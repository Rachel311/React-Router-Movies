import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


export default function MovieList(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = () => {
      axios.get('http://localhost:5000/api/movies')
      .then(response => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch(error => {
        console.log('Error', error);
      });
    }
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
