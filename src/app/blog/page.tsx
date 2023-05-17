import BlogList from "./BlogList";
import getPopularTags from "./get-popular-tags";
import { allPosts } from "contentlayer/generated";
import TagList from "./TagList";

export const revalidate = 60;

export default function BlogPage() {
  return (
    <div className="prose py-12">
      <h1>Hi this blog</h1>
      <TagList label="Popular tags" tags={getPopularTags(allPosts)} />
      <hr />
      <BlogList posts={allPosts} />
    </div>
  );
}
