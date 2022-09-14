import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

// Components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BeatLoader from "react-spinners/BeatLoader";

// Redux
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/user.slice";
import { AppDispatch } from "store/store";

// Types
import { ISignInForm } from "model";

// Assets
import { SignInFormWrapper } from "./SignInForm.style";

// Utils
import errorHandler from "utils/form-errors";
import { toast } from "react-toastify";

const SignInForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>();

  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("you signed in successfully");
      // set "email" value to global state
      dispatch(setUser({ email: data.email }));
    }, 3000);
  };
  return (
    <SignInFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>BEIJE | SIGN-IN</h2>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        {...register("email", {
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        })}
        error={errors.email !== undefined}
        helperText={errors.email ? errorHandler.email[errors.email.type] : ""}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        {...register("password", { required: true, minLength: 8 })}
        error={errors.password !== undefined}
        helperText={
          errors.password ? errorHandler.password[errors.password.type] : ""
        }
      />
      <div>
        <p>
          Don&apos;t have account?{" "}
          <Link href="/auth/sign-up">
            <a>Sign up</a>
          </Link>
        </p>
        <Button type="submit" variant="outlined" size="large">
          {loading ? <BeatLoader color="#efe7dd" size={20} /> : "Sign in"}
        </Button>
      </div>
    </SignInFormWrapper>
  );
};

export default SignInForm;
