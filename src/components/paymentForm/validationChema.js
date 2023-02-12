import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("The name on the card is required"),
  cardNumber: yup.number().required("The credit card number is required"),
  expiredDate: yup.string().required("The expiration date is required"),
  cvv: yup.number().required("The security code is required"),
});
