import { permanentRedirect } from 'next/navigation';

export default function LeadershipRedirectPage() {
  permanentRedirect('/team');
}
