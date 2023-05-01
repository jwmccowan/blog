interface PageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params: { slug } }: PageProps) {
  return <div>{slug}</div>;
}
