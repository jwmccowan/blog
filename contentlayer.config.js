import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrismPlus from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.md`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath.split("/")[1]}`,
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.split("/")[1],
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/*.md`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the page",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.split("/")[1],
    },
  },
}));

export default makeSource({
  contentDirPath: "markdown",
  documentTypes: [Post, Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrismPlus, { ignoreMissing: true }]],
  },
});
