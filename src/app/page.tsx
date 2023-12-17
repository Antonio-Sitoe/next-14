import Link from "next/link";
import { sql } from "@vercel/postgres";

const Quizzes = async () => {
  const quizes = await sql`
  SELECT * FROM quizzes
  `;

  return (
    <ul>
      {quizes.rows.map((item) => {
        return (
          <li key={item.id}>
            <Link href={"/quiz/" + item.id}>Quiz {item.id}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default function Home() {
  return (
    <main>
      <h1>Quiz</h1>
      <Quizzes />
    </main>
  );
}
