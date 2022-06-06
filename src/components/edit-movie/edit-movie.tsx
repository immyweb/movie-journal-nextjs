import React, { useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { updateMovie } from "../../../lib/crud";
import requests from "../../requests";
import { parseYear } from "../../utils/parseYear";
import type { IMovieListItem, IMovieDetail } from "../../../types/types";

import styles from "./edit-movie.module.css";

type IEditMovie = {
  movieData: IMovieDetail;
  onCloseModal: () => void;
  setMovieEdited: Dispatch<SetStateAction<boolean>>;
};

interface FormElements extends HTMLFormControlsCollection {
  date: HTMLInputElement;
  review: HTMLInputElement;
  rating: HTMLInputElement;
  like: HTMLInputElement;
}

interface EditMovieFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const EditMovie = ({
  movieData,
  setMovieEdited,
  onCloseModal,
}: IEditMovie): JSX.Element => {
  const [postSucess, setPostSucess] = useState<boolean>(false);

  const handleSubmit = (evt: React.FormEvent<EditMovieFormElement>) => {
    evt.preventDefault();

    const { date, review, rating, like } = evt.currentTarget.elements;
    const movie: IMovieListItem = {
      title: movieData.title,
      theMovieDbId: movieData.theMovieDbId,
      dateWatched: date.value,
      posterImg: movieData.posterPath,
      review: review.value,
      releaseDate: movieData.releaseDate,
      rating: parseInt(rating.value),
      like: like.checked,
    };

    updateMovie(String(movieData.id), movie).then(() => {
      setPostSucess(true);
      setMovieEdited(true);
      onCloseModal();
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          {movieData.posterPath && (
            <Image
              src={`${requests.imgUrl}${movieData.posterPath}`}
              width="220"
              height="330"
              alt={movieData.title}
            />
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.subHeading}>Edit movie</h3>
          <h2 className={styles.heading}>
            {movieData.title}{" "}
            <span className={styles.date}>
              ({parseYear(movieData.releaseDate)})
            </span>
          </h2>
          <label htmlFor="date" className={styles.label}>
            Date watched
          </label>
          <input
            type="date"
            name="date"
            id="date"
            defaultValue={movieData.dateWatched}
            required
          />
          <label htmlFor="review" className={styles.label}>
            Review
          </label>
          <textarea
            name="review"
            id="review"
            defaultValue={movieData.review}
            required
          />
          <label htmlFor="rating" className={styles.label}>
            Rating
          </label>
          <input
            type="number"
            name="rating"
            id="rating"
            min="1"
            max="10"
            defaultValue={movieData.rating}
            required
          />
          <label htmlFor="like" className={styles.label}>
            Like
          </label>
          <input
            type="checkbox"
            name="like"
            id="like"
            defaultChecked={movieData.like}
          />
          <input type="submit" value="update" className={styles.submit} />
          {postSucess && <p data-testid="post-success">Movie updated!</p>}
        </div>
      </form>
    </section>
  );
};
