import { permanentRedirect } from 'next/navigation';

export default function GrowthVisionRedirectPage() {
  permanentRedirect('/about#purpose-vision-values');
}
