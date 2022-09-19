import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

// Components
import TextField from "@mui/material/TextField";
import BeatLoader from "react-spinners/BeatLoader";
import { PrimaryButton } from "component/Button/PrimaryButton.style";

// Redux
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/user.slice";
import { AppDispatch } from "store/store";

// Types
import { ISignUpForm } from "model";

// Assets
import { SignUpFormWrapper } from "./SignUpForm.style";

// Utils
import errorHandler from "utils/form-errors";

const SignUpForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>();

  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // set "email" value to global state
      dispatch(setUser({ email: data.email }));
    }, 3000);
  };
  return (
    <SignUpFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        label="Full name"
        variant="outlined"
        {...register("name", {
          required: true,
        })}
        error={errors.name !== undefined}
        helperText={errors.name ? errorHandler.name[errors.name.type] : ""}
      />
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
        <PrimaryButton
          type="submit"
          variant="outlined"
          size="large"
          disabled={loading}
        >
          {loading ? <BeatLoader color="#efe7dd" size={20} /> : "Sign up"}
        </PrimaryButton>
      </div>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
