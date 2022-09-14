import Head from "next/head";

import AuthLayout from "layout/AuthLayout";

const SignIn = () => {
  return (
    <>
      <Head>
        <title>BEIJE | Sign-in</title>
      </Head>
      <AuthLayout>Sign-in form</AuthLayout>
    </>
  );
};

export default SignIn;
