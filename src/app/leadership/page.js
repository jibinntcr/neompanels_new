import TeamPage from '@/app/team/page';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Leadership & Executive Management — NEOM Panels',
  description:
    'Meet the executive leadership team behind NEOM Panels, Starwoods and NEOM Packing Plywood: Managing Director Jibin N, CEO Muneer K H, CFO Muhamad Raneef T A and CTO Muhammed Jabir.',
  path: '/leadership',
  ogImage: '/assets/hero-neom-flagship.jpg',
  ogImageAlt: 'NEOM Panels Executive Leadership Team',
  keywords: [
    'NEOM Panels leadership',
    'NEOM Panels directors and executives',
    'Jibin N Managing Director NEOM Panels',
    'Muneer K H CEO NEOM Panels',
    'Muhamad Raneef T A CFO NEOM Panels',
    'Muhammed Jabir CTO NEOM Panels'
  ]
});

export default TeamPage;
