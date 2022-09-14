const email = {
  required: "Email is required",
  pattern: "Email is invalid",
};

const password = {
  required: "Password is required",
  minLength: "Password must be more than 8 character",
};

const name = {
  required: "Full name is required",
};

const formErrorHandler: { email: any; password: any; name: any } = {
  email,
  password,
  name,
};

export default formErrorHandler;
