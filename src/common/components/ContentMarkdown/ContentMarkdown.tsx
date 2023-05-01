import type { Page } from "contentlayer/generated";

export interface ContentMarkdownProps {
  className?: string;
  file: { body: { html: string } };
}

export default function ContentMarkdown(
  props: ContentMarkdownProps,
): JSX.Element {
  return (
    <div
      className={props.className}
      dangerouslySetInnerHTML={{ __html: props.file.body.html }}
    />
  );
}
