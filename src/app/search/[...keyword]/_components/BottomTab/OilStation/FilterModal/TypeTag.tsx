interface ITypeTageProps {
  type: string;
}

export default function TypeTag({ type }: ITypeTageProps) {
  const selected = false;
  return (
    <p
      className={`px-8 py-2 border rounded-2xl ${selected ? 'text-text50 bg-primary' : 'text-text600 bg-text50'}`}
    >
      {type}
    </p>
  );
}
