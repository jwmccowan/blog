import { type Post } from "contentlayer/generated";

export interface BlogListProps {
  posts: Post[];
}

export default function BlogList(props: BlogListProps) {
  return (
    <ul>
      {props.posts.map((post) => (
        <li key={post._id}>
          <a href={post.url}>{post.title}</a>
        </li>
      ))}
    </ul>
  );
}
