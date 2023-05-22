import ContentMarkdown from "@/common/components/ContentMarkdown";
import { findPostBySlug } from "@/common/utils/find-content";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import TagList from "../TagList";

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
  const post = findPostBySlug(slug);
  return (
    <div className="prose my-12">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600 italic">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </p>
      {post.tags && <TagList tags={post.tags} />}
      <hr />
      <article>
        <ContentMarkdown file={post} />
      </article>
    </div>
  );
}
