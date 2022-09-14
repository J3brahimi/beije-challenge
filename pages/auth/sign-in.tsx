import Head from "next/head";

// Components
import SignInForm from "component/Form/SignIn";

// Layout
import AuthLayout from "layout/AuthLayout";

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
