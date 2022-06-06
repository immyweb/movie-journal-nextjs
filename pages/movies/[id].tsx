import MovieDetail from "../../src/components/movie-detail/movie-detail";
import { getMovie, getMovieDetail, getMovieCredits } from "../../lib/crud";
import { getDirector, getCast } from "../../lib/utils";

import type { NextPage, GetServerSideProps } from "next";
import type { IMovieDetail } from "../../types";

const Movie: NextPage<{
  data: IMovieDetail;
}> = ({ data }) => {
  return (
    <>
      <MovieDetail {...data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params!.id;
  let movieItem, movieDetail, movieCredits, data: IMovieDetail;

  if (id !== undefined) {
    movieItem = await getMovie(id);
    movieDetail = await getMovieDetail(movieItem.movie.theMovieDbId);
    movieCredits = await getMovieCredits(movieItem.movie.theMovieDbId);
  }

  const { movie } = movieItem;
  data = {
    cast: getCast(movieCredits.cast, 3),
    dateWatched: movie.dateWatched,
    director: getDirector(movieCredits.crew),
    genres: movieDetail.genres,
    id: id,
    like: movie.like,
    posterPath: movieDetail.poster_path,
    rating: movie.rating,
    releaseDate: movieDetail.release_date,
    review: movie.review,
    theMovieDbId: movie.theMovieDbId,
    title: movieDetail.title,
  };

  return { props: { data } };
};

export default Movie;
