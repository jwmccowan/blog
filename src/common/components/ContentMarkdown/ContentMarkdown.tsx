import type { Page, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export interface ContentMarkdownProps {
  className?: string;
  file: Post | Page;
}

export default function ContentMarkdown(
  props: ContentMarkdownProps,
): JSX.Element {
  const MdxComponent = useMDXComponent(props.file.body.code);
  return <MdxComponent />;
}
