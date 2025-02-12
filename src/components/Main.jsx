import { useAppDataContext } from "../context/AppDataContext";

export default function Main() {
  const { movies } = useAppDataContext();

  return (
    <main>
      <h2>Lista films</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} <br /> {movie.original_title} <br />{" "}
            {movie.original_language} <br />
            {movie.vote_average}
          </li>
        ))}
      </ul>
    </main>
  );
}
