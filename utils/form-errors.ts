const email = {
  required: "Email is required",
  pattern: "Email is invalid",
};

const password = {
  required: "Password is required",
  minLength: "Password must be more than 8 character",
};

const formErrorHandler: { email: any; password: any } = {
  email,
  password,
};

export default formErrorHandler;
