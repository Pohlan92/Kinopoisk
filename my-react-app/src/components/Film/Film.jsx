import "./film.css";
import Button from "../Button/Button";

function Film() {
  return (
    <div className="film">
      <header className="film__img-wrapper">
        <img className="film__img" src="https://storage.myseldon.com/news-pict-b2/B29C92AED1689351A819301A716F9763" alt="5 сантиметров в секунду" />
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

        <h3 className="film__name">Кракен</h3>
        <div className="film__props">
          <div className="film__props-item">
            <span className="film__prop-title">Genrer</span>
            <span className="film__prop-text">Drama</span>
          </div>
          <div className="film__props-item">
            <span className="film__prop-title">Release</span>
            <span className="film__prop-text">2025</span>
          </div>
          <div className="film__props-item">
            <span className="film__prop-title">Runtime</span>
            <span className="film__prop-text">2h 20m</span>
          </div>
          <div className="film__props-item">
            <span className="film__prop-title">iMDB</span>
            <span className="film__prop-text">4.8</span>
          </div>
        </div>
        <p className="film__description">Lorem ipsum dolor sit amet.</p>
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
