import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./index.css";

// components
import MovieContent from "../../components/MovieContent";

const Home = ({ searchItem }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/76341?api_key=1ac11d33c66adb8718d8acf5fedd457f`
        );
        setIsLoading(false);
        setMovie(response.data);
        console.log("HELLO");
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading === true ? (
    <div className="loading">
      <Loader
        type="Oval"
        color="#00CCBC"
        height={100}
        width={100}
        timeout={999999}
      />
    </div>
  ) : (
    <main>
      <MovieContent movie={movie} />
      <img
        className="absolute"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="backgroundImage"
      />
    </main>
  );
};

export default Home;
