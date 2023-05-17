import { type Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function comparePosts(leftPost: Post, rightPost: Post): number {
  return compareDesc(new Date(leftPost.date), new Date(rightPost.date));
}
