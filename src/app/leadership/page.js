import TeamPage from '@/app/team/page';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Executive Leadership & Team',
  description:
    'Meet the executive leadership team guiding NEOM Panels: Managing Director Jibin N, Chief Executive Officer Muneer K H, Chief Financial Officer Muhamad Raneef T A, and Chief Technology Officer Muhammed Jabir.',
  path: '/leadership',
  ogImage: '/assets/team/jibin-n-neom-panels-managing-director.webp',
  ogImageAlt: 'Jibin N, Managing Director of NEOM Panels',
  keywords: [
    'NEOM Panels leadership',
    'NEOM Panels executive team',
    'Jibin N Managing Director NEOM Panels',
    'Muneer K H CEO NEOM Panels',
    'Muhamad Raneef T A CFO NEOM Panels',
    'Muhammed Jabir CTO NEOM Panels'
  ]
});

export default TeamPage;
