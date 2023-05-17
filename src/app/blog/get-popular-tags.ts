import { type Post } from "contentlayer/generated";

export default function getPopularTags(posts: Post[]): string[] {
  const myMap: Record<string, number> = {};
  posts.forEach((post) => {
    if (!post.tags) return;
    post.tags
      .map((tag) => tag.toLocaleLowerCase())
      .forEach((tag) => {
        if (myMap[tag]) {
          myMap[tag] = myMap[tag] + 1;
        } else {
          myMap[tag] = 1;
        }
      });
  });

  return Object.keys(myMap)
    .map((tag) => [tag, myMap[tag]] as [string, number])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag]) => tag);
}
