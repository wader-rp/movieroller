import React from "react";
import "./moviesToWatch.css";
import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";

export const OnHoverIcons = ({ index, movies, setMovies }) => {
  const removeMovie = (index) => {
    const moviesCopy = [...movies];
    const splicedCopy = moviesCopy.filter((_, i) => i !== index);
    const strigifyCopy = JSON.stringify(splicedCopy);
    setMovies(splicedCopy);
    localStorage.setItem("toWatch", [strigifyCopy]);
  };

  return (
    <div className="movie-icons">
      <div className="movie-icon-wrapper">
        <DeleteOutlined
          className="movie-icon"
          onClick={() => removeMovie(index)}
        />
        <p className="movie-icon-text">Delete</p>
      </div>
      <div className="movie-icon-wrapper">
        <InfoCircleOutlined className="movie-icon" />
        <p className="movie-icon-text">Info</p>
      </div>
    </div>
  );
};
