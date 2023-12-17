import { sql } from "@vercel/postgres";

interface Props {
  params: {
    id: string;
  };
}

async function get({ id }: any) {
  const quizes = await sql`
  SELECT name, description FROM quizzes
WHERE id =${id}`;
  return quizes;
}
export default async function QizPage({ params }: Props) {
  const a = await get(params.id);
  console.log(a.oid);
  return <div>quiz {params.id}</div>;
}
