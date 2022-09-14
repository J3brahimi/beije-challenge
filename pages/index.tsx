import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

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

      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  );
};

export default Home;
