import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup.string().required("Your first name is required"),
  lastName: yup.string().required("Your last name is required"),
  addressLine: yup.string().required("Your address is required"),
  addressLine2: yup.string(),
  city: yup.string().required("Your city is required"),
  state: yup.string().required("Your State is required"),
  zip: yup.number().required("Your Zip code is required"),
  country: yup.string().required("Your country is required"),
  phone: yup.number().required("A phone number is required"),
});
