import { permanentRedirect } from 'next/navigation';

export default function DecorativeSurfacesRedirectPage() {
  permanentRedirect('/products');
}
