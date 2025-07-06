import { useEffect, useState } from "react";
import "./App.css";
import ListFilms from "./components/ListFilms/ListFilms";

// Саша const API_KEY = "6KVSF1N-X4W406N-KD3ZNY9-CR3124K";
// мой
const API_KEY = "WSMDW74-8AV4C0V-MZ1FEF8-MV8J6DQ";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://api.kinopoisk.dev/v1.4/movie?page=1&limit=20", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
    })
      .then((responce) => responce.json())
      .then((data) => setFilms(data.docs));
  }, []);

  return films && <ListFilms films={films}></ListFilms>;
}

export default App;
