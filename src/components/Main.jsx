import { useAppDataContext } from "../context/AppDataContext";

const flagLang = (language) => {
  // Converto "en" in "GB" per la llingua inglese
  if (language === "en") {
    return "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg";
  }

  // Trasformo in maiuscolo l'identificativo per la lingua per ricevere la bandiera corretta dal sito "purecatam..""
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${language.toUpperCase()}.svg`;
};

// Funzione per voto arrotondato e stelle
const convertVote = (vote) => {
  const fullStars = Math.ceil(vote / 2);
  const emptyStars = 5 - fullStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push("fas fa-star");
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push("far fa-star");
  }

  return stars.map((star) => <i className={star}></i>);
};
export default function Main() {
  const { movies, series } = useAppDataContext();

  return (
    <main>
      <h2>Lista Films</h2>
      <div className="container">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="card">
              <p>
                <strong>Titolo Film: </strong>
                {movie.title}
              </p>
              <p>
                <strong>Titolo Originale:</strong> {movie.original_title}
              </p>
              <p>
                <strong>Lingua Originale:</strong>
                <img
                  src={flagLang(movie.original_language)}
                  alt={movie.original_language}
                  className="flag-width"
                />
              </p>
              <p>
                <strong>Voto: </strong>
                {convertVote(movie.vote_average)}
              </p>
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              />
            </div>
          ))}
        </div>
      </div>

      <h2>Lista Serie TV</h2>
      <div className="container">
        <div className="row">
          {series.map((serie) => (
            <div key={serie.id} className="card">
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
              <img
                src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
