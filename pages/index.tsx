import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BEIJE</title>
        <meta
          name="description"
          content="BEIJE is a subscription service for menstrual hygiene products."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </div>
  );
};

export default Home;
