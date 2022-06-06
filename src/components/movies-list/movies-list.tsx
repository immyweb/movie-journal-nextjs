import React from "react";
import Image from "next/image";
import Link from "next/link";

import requests from "../../requests";
import { IMovieListItem, IMovies } from "../../../types/types";
import { parseYear } from "../../utils/parseYear";

import styles from "./movies-list.module.css";

const MoviesList = (movies: IMovies): JSX.Element => {
  const sortByDateWatched = (data: IMovieListItem[]) => {
    const sortedData = data;
    return sortedData.sort((a, b) => {
      return +new Date(b.dateWatched) - +new Date(a.dateWatched);
    });
  };

  const renderMovies = () => {
    return movies.movies.map((movie) => {
      const { title, dateWatched, rating, posterImg, _id } = movie;
      return (
        <li className={styles.movie} key={title}>
          <Link
            href="/movies/[id].tsx"
            as={`/movies/${_id}`}
            className={styles.movieLink}
          >
            <a>
              <Image
                src={`${requests.imgUrl}${posterImg}`}
                alt={title}
                className={styles.poster}
                width="168"
                height="252"
              />
            </a>
          </Link>
          <h3 className={styles.movieTitle}>{title}</h3>
          <p>{parseYear(dateWatched)}</p>
          <p>{rating}</p>
        </li>
      );
    });
  };

  return (
    <section className={styles.moviesList}>
      <h2 className={styles.heading}>Your movies</h2>
      <ul className={styles.movieContainer}>{renderMovies()}</ul>
    </section>
  );
};

export default MoviesList;
