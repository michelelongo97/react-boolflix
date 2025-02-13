import { useAppDataContext } from "../context/AppDataContext";

const flagLang = (language) => {
  // Converto "en" in "GB" per la llingua inglese
  if (language === "en") {
    return "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg";
  }

  // Trasformo in maiuscolo l'identificativo per la lingua per ricevere la bandiera corretta dal sito "purecatam..""
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${language.toUpperCase()}.svg`;
};

const convertVote = (vote) => {
  // Divido il voto per 2 e arrotondo per eccesso
  return Math.ceil(vote / 2);
};

export default function Main() {
  const { movies, series } = useAppDataContext();

  return (
    <main>
      <h2>Lista Films</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>Titolo Film: {movie.title}</p>
            <p>Titolo Originale: {movie.original_title}</p>
            <p>
              Lingua Originale:
              <img
                src={flagLang(movie.original_language)}
                alt={movie.original_language}
                className="flag-width"
              />
            </p>
            <p>Voto: {convertVote(movie.vote_average)}</p>
            <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} />
          </li>
        ))}
      </ul>

      <h2>Lista Serie TV</h2>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            <p>Titolo Serie: {serie.name}</p>
            <p>Titolo Originale: {serie.original_name}</p>
            <p>
              Lingua Originale:
              <img
                src={flagLang(serie.original_language)}
                alt={serie.original_language}
                className="flag-width"
              />
            </p>
            <p>Voto: {convertVote(serie.vote_average)}</p>
            <img src={`https://image.tmdb.org/t/p/w154/${serie.poster_path}`} />
          </li>
        ))}
      </ul>
    </main>
  );
}
