import Head from "next/head";

// Layout
import AuthLayout from "layout/AuthLayout";

// Components
import SignUpForm from "component/Form/SignUp";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>BEIJE | Sign-up</title>
      </Head>
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
};

export default SignUp;
