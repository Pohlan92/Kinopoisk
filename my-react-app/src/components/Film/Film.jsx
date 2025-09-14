import "./film.css";
import Button from "../Button/Button";
import { getShortText } from "../../utils";

function Film({ poster, name, genres, year, votes, type, description }) {
  console.log(1111, genres);

  return (
    <div className="film">
      <header className="film__img-wrapper">
        <img
          className="film__img"
          src={poster?.previewUrl}
          alt={name ? name : "Название не найдено"}
        />
      </header>
      <footer className="film__content">
        {/* <div className="film__control">
          <div className="film__control-left">
            <button className="btn btn--primary"></button>
          </div>
          <div className="film__control-right">
            <button className="btn btn--secondary"></button>
            <button className="btn btn--secondary"></button>
          </div>
        </div> */}

        <h3 className="film__name">{name ? name : "Название не найдено"}</h3>
        <div className="film__props">
          <div className="film__props-item">
            <span className="film__prop-title">Genrer</span>
            <span className="film__prop-text">
              {genres ? getShortText(genres[0].name, 9) : "нет"}
            </span>
          </div>
          <div className="film__props-item">
            <span className="film__prop-title">Release</span>
            <span className="film__prop-text">{year ? year : "нет"}</span>
          </div>
          <div className="film__props-item">
            <span className="film__prop-title">type</span>
            <span className="film__prop-text">{type}</span>
          </div>
          <div className="film__props-item">
            <span className="film__prop-title">iMDB</span>
            <span className="film__prop-text">{votes?.imdb}</span>
          </div>
        </div>
        <p className="film__description">
          {description ? getShortText(description, 55) : "нет описания"}
        </p>
        <Button use={"primary"} handler={() => {}}>
          Buy ticket
        </Button>
      </footer>
    </div>
  );
}

export default Film;

/* 


ageRating
: 
null
alternativeName
: 
"Byousoku 5 Centimeter"
backdrop
: 
{url: null, previewUrl: null}
countries
: 
[{…}]
description
: 
null
enName
: 
null
genres
: 
(2) [{…}, {…}]
id
: 
8230870
isSeries
: 
false
movieLength
: 
120
name
: 
"5 сантиметров в секунду"
poster
: 
{url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/b92d06ff-9e24-4ebe-b4c0-e0a0f67f0cc5/600x900', previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10893610/b92d06ff-9e24-4ebe-b4c0-e0a0f67f0cc5/300x450'}
rating
: 
{kp: 0, imdb: 0, filmCritics: 0, russianFilmCritics: 0, await: 0}
ratingMpaa
: 
null
seriesLength
: 
null
shortDescription
: 
null
status
: 
null
ticketsOnSale
: 
false
top10
: 
null
top250
: 
null
totalSeriesLength
: 
null
type
: 
"movie"
typeNumber
: 
1
votes
: 
{kp: 0, imdb: 0, filmCritics: 0, russianFilmCritics: 0, await: 0}
year
: 
2025

*/
