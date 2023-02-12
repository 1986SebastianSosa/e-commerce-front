import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup.string().required("Enter first name"),
  lastName: yup.string("Enter last name").required("Enter first name"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  address: yup.string("Enter an address").required("Enter email"),
  phone: yup.number("Enter a phone").required("Enter phone"),
});
