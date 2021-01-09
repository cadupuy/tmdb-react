import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./index.css";
// components
import MovieContent from "../../components/MovieContent";

const Home = ({ movieId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=1ac11d33c66adb8718d8acf5fedd457f`
        );
        setIsLoading(false);
        setMovieInfo(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [movieId]);

  return isLoading ? (
    <div className="loading">
      <Loader
        type="Oval"
        color="#00d277"
        height={100}
        width={100}
        timeout={999999}
      />
    </div>
  ) : (
    <main>
      <MovieContent movieInfo={movieInfo} />
      {movieInfo.backdrop_path && (
        <img
          className="absolute"
          src={`https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`}
          alt="backgroundImage"
        />
      )}
    </main>
  );
};

export default Home;
