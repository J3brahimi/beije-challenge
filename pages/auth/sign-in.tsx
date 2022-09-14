import Head from "next/head";

// Layout
import AuthLayout from "layout/AuthLayout";

// Components
import SignInForm from "component/Form/SignIn";

const SignIn = () => {
  return (
    <>
      <Head>
        <title>BEIJE | Sign-in</title>
      </Head>
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
};

export default SignIn;
