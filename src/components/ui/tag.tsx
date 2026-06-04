type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return <span className="tag">{children}</span>;
}
