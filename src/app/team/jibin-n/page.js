import { buildPageMetadata } from '@/lib/seo';
import { getLeaderBySlug } from '@/lib/leadership-data';
import ExecutiveProfileTemplate, {
  buildLeaderMetadata
} from '@/components/ExecutiveProfileTemplate';

const leader = getLeaderBySlug('jibin-n');

export const metadata = buildPageMetadata({
  ...buildLeaderMetadata(leader),
  absoluteTitle: leader.metaTitle
});

export default function JibinNProfilePage() {
  return <ExecutiveProfileTemplate leader={leader} />;
}
