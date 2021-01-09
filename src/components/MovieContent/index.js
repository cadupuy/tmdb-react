import React from "react";
import "./index.css";

const MovieContent = ({ movieInfo }) => {
  console.log(movieInfo);
  return (
    <section className="movieInformation">
      <div>
        {movieInfo.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}
            alt="MovieCover"
          />
        )}
      </div>
      <div>
        <h2>{movieInfo.title}</h2>

        <div className="movieResumeContainer">
          {movieInfo.tagline && <p className="tagLine">{movieInfo.tagline}</p>}
          {movieInfo.overview && (
            <p className="overview">{movieInfo.overview}</p>
          )}
        </div>

        <div className="movieCategoryContainer">
          {/* {movieInfo.genres.map((elem) => {
            return <span key={elem.id}>{elem.name}</span>;
          })} */}
          {/* <p>test</p>
          {movie.production_companies.map((elem) => {
            return <span key={elem.id}>{elem.name}</span>;
          })}
          <p>Legendary Pictures, Syncopy, Lynda Obst Productions</p> */}
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
              {movieInfo.revenue ? <p>${movieInfo.revenue}</p> : <p>-</p>}
              {/* <p>${movie.revenue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p> */}
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
