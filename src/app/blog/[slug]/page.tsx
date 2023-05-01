import ContentMarkdown from "@/common/components/ContentMarkdown/ContentMarkdown";
import { findBySlug } from "@/common/utils/find-content";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";

export const dynamic = "error";
export const dynamicParams = true;
export const revalidate = 60;

export function generateStaticParams() {
  return allPosts.map((post) => post.slug);
}

interface PageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params: { slug } }: PageProps) {
  const post = findBySlug(allPosts)(slug);
  return (
    <div className="prose my-12">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600 italic">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </p>
      <ContentMarkdown file={post} />
    </div>
  );
}
