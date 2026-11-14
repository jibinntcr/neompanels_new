import TeamPage from '@/app/team/page';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Leadership & Executive Management — NEOM Panels',
  description:
    'Meet the executive leadership team behind NEOM Panels, Starwoods and NEOM Packing Plywood: Managing Director Jibin N, CEO Muneer K H, CFO Muhamad Raneef T A and CTO Muhammed Jabir.',
  path: '/leadership',
  ogImage: '/assets/team/jibin-n-neom-panels-managing-director.webp',
  ogImageAlt: 'Jibin N, Managing Director of NEOM Panels',
  ogImages: [
    {
      url: '/assets/team/jibin-n-neom-panels-managing-director.webp',
      width: 800,
      height: 800,
      alt: 'Jibin N, Managing Director of NEOM Panels'
    },
    {
      url: '/assets/team/muneer-k-h.png',
      width: 800,
      height: 800,
      alt: 'Muneer K H — Chief Executive Officer, NEOM Panels'
    },
    {
      url: '/assets/team/muhamad-raneef.jpeg',
      width: 800,
      height: 800,
      alt: 'Muhamad Raneef T A — Chief Financial Officer, NEOM Panels'
    },
    {
      url: '/assets/team/muhammed-jabir.png',
      width: 800,
      height: 800,
      alt: 'Muhammed Jabir — Chief Technology Officer, NEOM Panels'
    }
  ],
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
