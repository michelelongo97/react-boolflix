import { useState } from "react";
import { useAppDataContext } from "../context/AppDataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setMovies, setSeries } = useAppDataContext();

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "82ffb1633bdf70348aba2ecb0741e91a",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setMovies(res.data.results));

    axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "82ffb1633bdf70348aba2ecb0741e91a",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setSeries(res.data.results));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        type="search"
        placeholder="Cerca film o serie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
