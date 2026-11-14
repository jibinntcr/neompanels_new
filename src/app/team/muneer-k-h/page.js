import { buildPageMetadata } from '@/lib/seo';
import { getLeaderBySlug } from '@/lib/leadership-data';
import ExecutiveProfileTemplate, {
  buildLeaderMetadata
} from '@/components/ExecutiveProfileTemplate';

const leader = getLeaderBySlug('muneer-k-h');

export const metadata = buildPageMetadata({
  ...buildLeaderMetadata(leader),
  absoluteTitle: leader.metaTitle
});

export default function MuneerKHProfilePage() {
  return <ExecutiveProfileTemplate leader={leader} />;
}
