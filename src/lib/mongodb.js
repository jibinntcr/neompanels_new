import fs from 'node:fs';
import path from 'node:path';
import { MongoClient } from 'mongodb';
import { STORAGE_DIR } from '@/lib/storage';

const DB_CONFIG_PATH = path.join(STORAGE_DIR, 'db-config.json');

let cachedClient = null;
let cachedDb = null;
let cachedUri = null;

export function getConfiguredMongoUri() {
  if (process.env.MONGODB_URI && process.env.MONGODB_URI.trim()) {
    return process.env.MONGODB_URI.trim();
  }
  try {
    if (fs.existsSync(DB_CONFIG_PATH)) {
      const cfg = JSON.parse(fs.readFileSync(DB_CONFIG_PATH, 'utf8'));
      if (cfg.mongodbUri && String(cfg.mongodbUri).trim()) {
        return String(cfg.mongodbUri).trim();
      }
    }
  } catch (_) {
    // Ignore read error
  }
  return null;
}

export function getConfiguredMongoDbName() {
  if (process.env.MONGODB_DB_NAME && process.env.MONGODB_DB_NAME.trim()) {
    return process.env.MONGODB_DB_NAME.trim();
  }
  try {
    if (fs.existsSync(DB_CONFIG_PATH)) {
      const cfg = JSON.parse(fs.readFileSync(DB_CONFIG_PATH, 'utf8'));
      if (cfg.dbName && String(cfg.dbName).trim()) {
        return String(cfg.dbName).trim();
      }
    }
  } catch (_) {
    // Ignore
  }
  return 'neom_panels_db';
}

export function saveRuntimeMongoConfig({ mongodbUri, dbName }) {
  fs.mkdirSync(STORAGE_DIR, { recursive: true });
  const payload = {
    mongodbUri: String(mongodbUri || '').trim(),
    dbName: String(dbName || 'neom_panels_db').trim() || 'neom_panels_db',
    updatedAt: new Date().toISOString()
  };
  fs.writeFileSync(DB_CONFIG_PATH, JSON.stringify(payload, null, 2), 'utf8');
  // Reset cached connection if URI changed
  if (cachedUri !== payload.mongodbUri) {
    cachedClient = null;
    cachedDb = null;
    cachedUri = null;
  }
  return payload;
}

export async function getMongoDatabase() {
  const uri = getConfiguredMongoUri();
  if (!uri) {
    return null;
  }

  const dbName = getConfiguredMongoDbName();

  if (cachedDb && cachedClient && cachedUri === uri) {
    return cachedDb;
  }

  try {
    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 4000,
      connectTimeoutMS: 4000
    });
    await client.connect();
    const db = client.db(dbName);
    cachedClient = client;
    cachedDb = db;
    cachedUri = uri;
    return db;
  } catch (err) {
    console.warn('[NEOM MongoDB] Could not connect to MongoDB URI, using local durable storage fallback:', err.message);
    return null;
  }
}

export async function getMongoStatus() {
  const uri = getConfiguredMongoUri();
  const dbName = getConfiguredMongoDbName();
  if (!uri) {
    return {
      configured: false,
      connected: false,
      mode: 'hybrid-durable-json',
      dbName,
      maskedUri: null,
      message:
        'Running on local durable JSON store. Set MONGODB_URI in environment variables or paste your MongoDB Atlas URI below to enable live cloud sync.'
    };
  }

  const maskedUri = uri.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@');
  try {
    const db = await getMongoDatabase();
    if (!db) {
      return {
        configured: true,
        connected: false,
        mode: 'fallback-durable-json',
        dbName,
        maskedUri,
        message: 'MongoDB URI is configured but unreachable; operating seamlessly on local durable fallback.'
      };
    }
    await db.command({ ping: 1 });
    return {
      configured: true,
      connected: true,
      mode: 'mongodb-primary',
      dbName,
      maskedUri,
      message: `Connected to MongoDB (${dbName}). All records are synced between MongoDB and durable storage.`
    };
  } catch (err) {
    return {
      configured: true,
      connected: false,
      mode: 'fallback-durable-json',
      dbName,
      maskedUri,
      message: `Connection check failed (${err.message}); operating on local durable fallback.`
    };
  }
}
