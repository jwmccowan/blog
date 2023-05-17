import { type Post } from "contentlayer/generated";

export default function filterPost(tag: string | null) {
  return (post: Post): boolean => {
    if (!tag) {
      return true;
    }
    if (!post.tags) {
      return false;
    }
    return post.tags
      .map((tag) => tag.toLocaleLowerCase())
      .includes(tag.toLocaleLowerCase());
  };
}
