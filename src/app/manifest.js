export default function manifest() {
  return {
    name: 'NEOM Panels',
    short_name: 'NEOM Panels',
    description:
      'NEOM Panels is an Indian panel manufacturing company and the company behind Starwoods and NEOM Packing Plywood.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F5EF',
    theme_color: '#103F2C',
    icons: [
      {
        src: '/assets/neom-icon-3d.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  };
}
