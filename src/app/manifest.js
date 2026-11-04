export default function manifest() {
  return {
    name: 'NEOM Panels — Indian Wood-Panel Manufacturing',
    short_name: 'NEOM Panels',
    description:
      'NEOM Panels manufactures wood-panel products for furniture, interior projects and industrial packaging in India. Home to Starwoods and NEOM Packing Plywood.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F7F0',
    theme_color: '#073B2A',
    icons: [
      {
        src: '/assets/logo-n-mark.png',
        sizes: '246x308',
        type: 'image/png'
      },
      {
        src: '/assets/logo-full.png',
        sizes: '356x366',
        type: 'image/png'
      }
    ]
  };
}
