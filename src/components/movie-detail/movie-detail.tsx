import React, { useState } from "react";
import Image from "next/image";

import Modal from "../modal/modal";
import { EditMovie } from "../edit-movie/edit-movie";
import { DeleteMovie } from "../delete-movie/delete-movie";
import { parseYear } from "../../utils/parseYear";
import type { IMovieDetail } from "../../../types";

import styles from "./movie-detail.module.css";

const MovieDetail = (movieData: IMovieDetail): JSX.Element => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [movieEdited, setMovieEdited] = useState<boolean>(false);

  const renderGenres = () => {
    return movieData.genres.map((genre) => {
      return <li key={genre.name}>{genre.name}</li>;
    });
  };

  const renderCast = () => {
    return movieData.cast.map((cast) => {
      return <li key={cast.name}>{cast.name}</li>;
    });
  };

  const editMovie = () => {
    setMovieEdited(false);
    setShowEditModal(true);
  };

  const deleteMovie = () => {
    setShowDeleteModal(true);
  };

  const onCloseModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  };

  return (
    <section className={styles.movieDetail}>
      <div className={styles.detailInfo}>
        <Image
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieData.posterPath}`}
          alt={movieData.title}
          width="220"
          height="330"
          className={styles.detailImage}
        />
        <div className={styles.detailContent}>
          <h2 className={styles.detailTitle}>
            {movieData.title}{" "}
            <span className={styles.releaseDate} data-testid="release-date">
              {parseYear(movieData.releaseDate)}
            </span>
          </h2>
          <p data-testid="rating">{`${movieData.rating}/10`}</p>
          <p data-testid="date-watched">{`Watched: ${movieData.dateWatched}`}</p>
          <p data-testid="review">{movieData.review}</p>
          <p data-testid="liked">{movieData.like ? "Liked" : null}</p>
          <h3 className={styles.detailHeading}>Director</h3>
          <p data-testid="director">{movieData.director}</p>
          <div className={styles.detailMeta}>
            <div>
              <h3 className={styles.detailHeading}>Cast</h3>
              <ul>{renderCast()}</ul>
            </div>
            <div>
              <h3 className={styles.detailHeading}>Genres</h3>
              <ul>{renderGenres()}</ul>
            </div>
          </div>
          {movieEdited && <p data-testid="update-success">Movie updated</p>}
          <div className={styles.btnHolder}>
            <button
              className={styles.editBtn}
              onClick={editMovie}
              data-testid="edit-movie-btn"
            >
              Edit
            </button>
            <button
              className={styles.deleteBtn}
              onClick={deleteMovie}
              data-testid="delete-movie-btn"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {showEditModal && movieData && (
        <Modal
          content={
            <EditMovie
              movieData={movieData}
              setMovieEdited={setMovieEdited}
              onCloseModal={onCloseModal}
            />
          }
          onCloseModal={onCloseModal}
        />
      )}
      {showDeleteModal && movieData && (
        <Modal
          content={
            <DeleteMovie
              onCloseModal={onCloseModal}
              id={String(movieData.id)}
            />
          }
          onCloseModal={onCloseModal}
        />
      )}
    </section>
  );
};

export default MovieDetail;
