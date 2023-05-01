import ContentMarkdown from "@/common/components/ContentMarkdown";
import { findBySlug } from "@/common/utils/find-content";
import { allPages } from "contentlayer/generated";

export default function SitePage() {
  const post = findBySlug(allPages)("site");
  return <ContentMarkdown file={post} />;
}
