import { allPosts } from "contentlayer/generated";

export const revalidate = 60;

export default function BlogPage() {
  return (
    <div>
      <h1>Hi this blog</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post._id}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
