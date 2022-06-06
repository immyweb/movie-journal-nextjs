import React from "react";
import { useRouter } from "next/router";

import { removeMovie } from "../../../lib/crud";
import styles from "./delete-movie.module.css";

export const DeleteMovie = ({
  onCloseModal,
  id,
}: {
  onCloseModal: () => void;
  id: string;
}): JSX.Element => {
  const router = useRouter();

  const onDeleteMovie = () => {
    removeMovie(id).then(() => {
      onCloseModal();
      router.push("/");
    });
  };

  return (
    <section>
      <p>Are you sure you want to delete this movie entry?</p>
      <div className={styles.btnHolder}>
        <button
          className={styles.editBtn}
          onClick={onDeleteMovie}
          data-testid="delete-yes"
        >
          Yes
        </button>
        <button
          className={styles.deleteBtn}
          onClick={onCloseModal}
          data-testid="delete-no"
        >
          No
        </button>
      </div>
    </section>
  );
};
