type Props = { children: React.ReactNode };

function CharacterDetail({ children }: Props) {
  return <div className="sticky top-4">{children}</div>;
}

export default CharacterDetail;
