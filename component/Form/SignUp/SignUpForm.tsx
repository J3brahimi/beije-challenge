import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

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
import { ISignUpForm } from "model";

// Assets
import { SignUpFormWrapper } from "./SignUpForm.style";

// Utils
import errorHandler from "utils/form-errors";
import { toast } from "react-toastify";
import { PublicApi } from "service/api";

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

    const body = {
      email: data.email,
      password: data.password,
      phone: { dialCode: "90", number: "5318425719" },
      dateOfBirth: "1989-12-31T20:30:00.000Z",
      firstName: data.name,
      lastName: data.name,
      agreementsSignedDate: {
        kvkk: "2022-09-19T11:00:40.846Z",
        confidentialityAgreement: "2022-09-19T11:00:33.486Z",
        membershipAgreement: "2022-09-19T11:00:33.486Z",
        userConsent: "2022-09-19T11:00:33.486Z",
      },
    };

    PublicApi.post("/public/user/auth/register", body)
      .then((res) => {
        toast.success("you signed up successfully");
        // set "email" value to global state
        dispatch(setUser({ email: res.data?.account?.email }));
      })
      .catch((err) => {
        toast.error("Error");
      })
      .finally(() => {
        setLoading(false);
      });
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
      {loading && <Loading />}
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
