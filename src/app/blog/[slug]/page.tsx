import { allPosts } from "contentlayer/generated";

interface PageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params: { slug } }: PageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) {
    throw new Error();
  }
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  );
}
