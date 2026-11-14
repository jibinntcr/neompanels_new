import { buildPageMetadata } from '@/lib/seo';
import { getLeaderBySlug } from '@/lib/leadership-data';
import ExecutiveProfileTemplate, {
  buildLeaderMetadata
} from '@/components/ExecutiveProfileTemplate';

const leader = getLeaderBySlug('muhamad-raneef-t-a');

export const metadata = buildPageMetadata({
  ...buildLeaderMetadata(leader),
  absoluteTitle: leader.metaTitle
});

export default function MuhamadRaneefProfilePage() {
  return <ExecutiveProfileTemplate leader={leader} />;
}
