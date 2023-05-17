"use client";

import { allPosts } from "contentlayer/generated";
import { useSearchParams } from "next/navigation";
import filterPost from "../filter-posts";
import comparePosts from "../compare-posts";
import BlogList from "../BlogList";

export default function ParamFilteredBlogList() {
  const searchParams = useSearchParams();
  const filteredAllPosts = allPosts
    .filter(filterPost(searchParams.get("tag")))
    .sort(comparePosts);

  return (
    <>
      <h2>Posts tagged with #{searchParams.get("tag")}</h2>
      <BlogList posts={filteredAllPosts} />
    </>
  );
}
