import { NextResponse } from 'next/server';

// North & Central Indian Hindi-speaking states / UTs (ISO 3166-2 region codes used by Vercel Geo IP)
const HINDI_BELT_REGIONS = new Set([
  'DL', // Delhi NCR
  'UP', // Uttar Pradesh
  'HR', // Haryana
  'RJ', // Rajasthan
  'MP', // Madhya Pradesh
  'BR', // Bihar
  'JH', // Jharkhand
  'UK', // Uttarakhand
  'UT', // Uttarakhand (alternate ISO code)
  'HP', // Himachal Pradesh
  'CT', // Chhattisgarh
  'CG', // Chhattisgarh (alternate code)
  'CH', // Chandigarh
  'PB', // Punjab
  'JK'  // Jammu & Kashmir
]);

const REGION_NAMES = {
  DL: 'Delhi NCR',
  UP: 'Uttar Pradesh',
  HR: 'Haryana',
  RJ: 'Rajasthan',
  MP: 'Madhya Pradesh',
  BR: 'Bihar',
  JH: 'Jharkhand',
  UK: 'Uttarakhand',
  UT: 'Uttarakhand',
  HP: 'Himachal Pradesh',
  CT: 'Chhattisgarh',
  CG: 'Chhattisgarh',
  CH: 'Chandigarh',
  PB: 'Punjab',
  JK: 'Jammu & Kashmir'
};

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Skip static assets, API routes, and Admin portal
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/assets') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // 1. Explicit URL query override (?lang=hi or ?lang=en)
  const queryLang = searchParams.get('lang')?.toLowerCase();
  if (queryLang === 'hi' || queryLang === 'en') {
    response.cookies.set('neom_lang_manual', queryLang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax'
    });
    return response;
  }

  // 2. Detect North India / Hindi belt via Vercel Geo headers or Accept-Language
  const country = (request.headers.get('x-vercel-ip-country') || '').toUpperCase();
  const region = (request.headers.get('x-vercel-ip-country-region') || '').toUpperCase();
  const city = request.headers.get('x-vercel-ip-city') || '';
  const acceptLang = (request.headers.get('accept-language') || '').toLowerCase();

  const isNorthHindiRegion = country === 'IN' && HINDI_BELT_REGIONS.has(region);
  const isBrowserHindi = acceptLang.startsWith('hi') || acceptLang.includes(',hi;');

  if (isNorthHindiRegion || isBrowserHindi) {
    response.cookies.set('neom_auto_lang', 'hi', {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax'
    });
    if (isNorthHindiRegion) {
      response.cookies.set('neom_detected_region', REGION_NAMES[region] || city || region, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
        sameSite: 'lax'
      });
    }
  } else if (country) {
    response.cookies.set('neom_auto_lang', 'en', {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax'
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)']
};
