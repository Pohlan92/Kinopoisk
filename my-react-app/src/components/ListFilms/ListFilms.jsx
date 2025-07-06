import "./listFilms.css";
import Film from "../Film/Film";

function ListFilms({films}) {
  return (
    <div className="list-films">
      {
        films.map((film) => {
          console.log(film);
          return <Film description={film.description} type={film.type} votes={film.votes} year={film.year} genres={film.genres} name={film.name} poster={film.poster}></Film>
        })
      }
    </div>
  );
}

export default ListFilms;
