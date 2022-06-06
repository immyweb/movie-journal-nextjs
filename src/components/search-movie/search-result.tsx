import React from "react";
import Image from "next/image";

import requests from "../../requests";
import { IResult } from "../../../types/types";
import { parseYear } from "../../utils/parseYear";

import styles from "../search-movie/search-movie.module.css";

interface ISearchResult extends IResult {
  onSelect: (result: IResult) => void;
}

const SearchResult = ({
  theMovieDbId,
  posterImg,
  title,
  releaseDate,
  onSelect,
}: ISearchResult): JSX.Element => {
  const result = { theMovieDbId, posterImg, title, releaseDate };
  return (
    <li
      key={theMovieDbId}
      className={styles.item}
      data-testid={theMovieDbId}
      onClick={() => onSelect(result)}
    >
      <Image
        src={`${requests.imgUrl}${posterImg}`}
        alt={title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>({parseYear(releaseDate)})</p>
      </div>
    </li>
  );
};

export default SearchResult;
