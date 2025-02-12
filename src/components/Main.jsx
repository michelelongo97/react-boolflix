import { useAppDataContext } from "../context/AppDataContext";

const flagLang = (language) => {
  // Converto "en" in "GB" per la llingua inglese
  if (language === "en") {
    return "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg";
  }

  // Trasformo in maiuscolo l'identificativo per la lingua per ricevere la bandiera corretta dal sito "purecatam..""
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${language.toUpperCase()}.svg`;
};

export default function Main() {
  const { movies } = useAppDataContext();

  return (
    <main>
      <h2>Lista films</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>Titolo Film: {movie.title}</p>{" "}
            <p>Titolo Film in lingua originale: {movie.original_title} </p>
            <p>
              Lingua originale:{" "}
              <img
                src={flagLang(movie.original_language)}
                alt={movie.original_language}
                className="flag-width"
              />{" "}
            </p>
            <p>Voto medio del Film: {movie.vote_average} </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
