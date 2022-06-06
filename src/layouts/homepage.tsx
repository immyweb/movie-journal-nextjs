import SearchMovie from "../../src/components/search-movie/search-movie";
import MoviesList from "../../src/components/movies-list/movies-list";
import { IMovies } from "../../types/types";

const Homepage: React.FC<{ data: IMovies }> = ({ data }) => {
  return (
    <>
      <SearchMovie />
      <MoviesList movies={data.movies} />
    </>
  );
};

export default Homepage;
