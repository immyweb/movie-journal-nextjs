import Homepage from "../src/layouts/homepage";
import { getMovies } from "../lib/crud";

import type { NextPage } from "next";
import type { IMovies } from "../types/types";

const Home: NextPage<{ data: IMovies }> = ({ data }) => {
  return (
    <>
      <Homepage data={data} />
    </>
  );
};

export async function getStaticProps() {
  const data = await getMovies();

  return { props: { data } };
}

export default Home;
