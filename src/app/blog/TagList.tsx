export interface TagListProps {
  tags: string[];
  label?: string;
}

export default function TagList(props: TagListProps): JSX.Element {
  const label = props.label ?? "Tag";
  return (
    <nav className="flex flex-wrap items-center gap-3">
      <span className="font-bold">{label}:</span>
      {props.tags.map((tag) => (
        <a
          className="bg-gray-200 rounded-full py-1 px-3 no-underline"
          key={tag}
          href={`/blog/search?tag=${tag}`}
        >
          #{tag}
        </a>
      ))}
    </nav>
  );
}
