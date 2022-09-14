import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const Home: NextPage = () => {
  const router = useRouter();
  const userEmail = useSelector((state: RootState) => state.user.email);

  useEffect(() => {
    // redirect user to right layout
    router.push(userEmail ? "/panel" : "/auth/sign-in");
  }, []);
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
