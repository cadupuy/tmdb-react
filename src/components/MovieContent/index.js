import React from "react";
import "./index.css";

// Images
import NotFound from "../../assets/img/noavailable.png";

const MovieContent = ({ movieInfo }) => {
  return (
    <section className="movieInformation">
      <div>
        {movieInfo.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}
            alt="MovieCover"
          />
        ) : (
          <img className="notFound" src={NotFound} alt="MovieCover" />
        )}
      </div>
      <div>
        <h2>{movieInfo.title?.toUpperCase()}</h2>

        <div className="movieResumeContainer">
          {movieInfo.tagline && <p className="tagLine">{movieInfo.tagline}</p>}
          {movieInfo.overview && (
            <p className="overview">{movieInfo.overview}</p>
          )}
        </div>

        <div className="movieCategoryContainer">
          {movieInfo.genres &&
            movieInfo.genres.map((elem, index) => {
              if (movieInfo.genres.length === index + 1) {
                return (
                  <span className="genres" key={elem.id}>
                    {elem.name}
                  </span>
                );
              } else {
                return (
                  <span className="genres" key={elem.id}>
                    {elem.name},{" "}
                  </span>
                );
              }
            })}

          <br />

          {movieInfo.production_companies &&
            movieInfo.production_companies.map((elem, index) => {
              if (movieInfo.production_companies.length === index + 1) {
                return (
                  <span className="companies" key={elem.id}>
                    {elem.name}
                  </span>
                );
              } else {
                return (
                  <span className="companies" key={elem.id}>
                    {elem.name},{" "}
                  </span>
                );
              }
            })}
        </div>
        <div className="movieDetailsSection">
          <div className="detailsContainer">
            <div className="movieDetails">
              <p>Original Release:</p>
              {movieInfo.release_date ? (
                <p>{movieInfo.release_date}</p>
              ) : (
                <p>-</p>
              )}
            </div>

            <div className="movieDetails">
              <p>Running Time:</p>
              {movieInfo.runtime ? <p>{movieInfo.runtime} mins</p> : <p>-</p>}
            </div>
          </div>
          <div className="detailsContainer">
            <div className="movieDetails">
              <p>Box Office:</p>

              {/* RegExp for pricing format:  https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */}

              {movieInfo.revenue ? (
                <p>
                  $
                  {movieInfo.revenue
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              ) : (
                <p>-</p>
              )}
            </div>

            <div className="movieDetails">
              <p>Vote Average:</p>
              {movieInfo.vote_average ? (
                <p>{movieInfo.vote_average} / 10</p>
              ) : (
                <p>-</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieContent;
