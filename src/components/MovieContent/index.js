import React from "react";
import "./index.css";

const MovieContent = ({ movie }) => {
  return (
    <section className="movieInformation">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="MovieCover"
        />
      </div>
      <div>
        <h2>{movie.title}</h2>

        <div className="movieResumeContainer">
          <p>{movie.tagline}</p>
          <p>{movie.overview}</p>
        </div>

        <div className="movieCategoryContainer">
          {/* {movie.genres.map((elem) => {
            return <span key={elem.id}>{elem.name}</span>;
          })}
          <p>test</p>
          {movie.production_companies.map((elem) => {
            return <span key={elem.id}>{elem.name}</span>;
          })}
          <p>Legendary Pictures, Syncopy, Lynda Obst Productions</p> */}
        </div>
        <div className="movieDetailsSection">
          <div className="detailsContainer">
            <div className="movieDetails">
              <p>Original Release:</p>
              <p>{movie.release_date}</p>
            </div>

            <div className="movieDetails">
              <p>Running Time:</p>
              <p>{movie.runtime} mins</p>
            </div>
          </div>
          <div className="detailsContainer">
            <div className="movieDetails">
              <p>Box Office:</p>
              <p>${movie.revenue}</p>
            </div>

            <div className="movieDetails">
              <p>Vote Average:</p>
              <p>{movie.vote_average} / 10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieContent;
