import Head from "next/head";
import Header from "../components/header/header";

const MainLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Movie Journal</title>
        <meta name="description" content="Movie Journal NextJS project" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
