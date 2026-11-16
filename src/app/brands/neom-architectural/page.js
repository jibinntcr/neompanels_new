import { permanentRedirect } from 'next/navigation';

export default function InactiveArchitecturalBrandRedirect() {
  permanentRedirect('/brands');
}
