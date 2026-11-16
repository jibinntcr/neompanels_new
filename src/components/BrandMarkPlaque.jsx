export default function BrandMarkPlaque({ brand, size = 'md', className = '' }) {
  if (!brand) return null;

  const sizeClass =
    size === 'lg'
      ? 'brand-logo-plaque--lg'
      : size === 'sm'
        ? 'brand-logo-plaque--sm'
        : 'brand-logo-plaque--md';

  if (brand.logoType === 'lockup') {
    return (
      <div className={`brand-logo-plaque brand-logo-plaque--lockup ${sizeClass} ${className}`.trim()}>
        <img
          src={brand.logo}
          alt=""
          aria-hidden="true"
          width={brand.logoWidth || 72}
          height={brand.logoHeight || 72}
          className="brand-lockup__icon"
          loading="lazy"
        />
        <span className="brand-lockup__text" aria-label={brand.name}>
          <span className="brand-lockup__primary">{brand.lockupPrimary || 'NEOM'}</span>
          <span className="brand-lockup__secondary">{brand.lockupSecondary || 'ARCHITECTURAL'}</span>
        </span>
      </div>
    );
  }

  return (
    <div className={`brand-logo-plaque ${sizeClass} ${className}`.trim()}>
      <img
        src={brand.logo}
        alt={brand.logoAlt || brand.name}
        width={brand.logoWidth || 420}
        height={brand.logoHeight || 120}
        className="brand-logo-plaque__img"
        loading="lazy"
      />
    </div>
  );
}
