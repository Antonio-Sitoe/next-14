interface Props {
  params: {
    id: string;
  };
}
export default function QizPage({ params }: Props) {
  return <div>quiz {params.id}</div>;
}
