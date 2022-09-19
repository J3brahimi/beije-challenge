import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import TextField from "@mui/material/TextField";
import BeatLoader from "react-spinners/BeatLoader";
import { PrimaryButton } from "component/Button/PrimaryButton.style";
import Loading from "component/Loading";

// Redux
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/user.slice";
import { AppDispatch } from "store/store";

// Types
import { ISignInForm } from "model";

// Assets
import { SignInFormWrapper, PasswordInputWrapper } from "./SignInForm.style";
import { BiHide, BiShow } from "react-icons/bi";

// Utils
import errorHandler from "utils/form-errors";
import { toast } from "react-toastify";

const SignInForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    register,
    watch,
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

  // handle show password
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const passwordValue = watch("password");
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <SignInFormWrapper onSubmit={handleSubmit(onSubmit)}>
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
      <PasswordInputWrapper>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          style={{ width: "100%" }}
          {...register("password", { required: true, minLength: 8 })}
          error={errors.password !== undefined}
          helperText={
            errors.password ? errorHandler.password[errors.password.type] : ""
          }
        />
        {passwordValue && (
          <button onClick={toggleShowPassword} type="button">
            {showPassword ? <BiShow /> : <BiHide />}
          </button>
        )}
      </PasswordInputWrapper>

      <div>
        <PrimaryButton
          type="submit"
          variant="outlined"
          size="large"
          disabled={loading}
        >
          {loading ? <BeatLoader color="#efe7dd" size={20} /> : "Sign in"}
        </PrimaryButton>
      </div>
      {loading && <Loading />}
    </SignInFormWrapper>
  );
};

export default SignInForm;
