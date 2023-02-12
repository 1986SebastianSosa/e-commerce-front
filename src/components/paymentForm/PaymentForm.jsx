import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  TextField,
  Grid,
  Container,
  useMediaQuery,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MySnackBar from "../snackBar/MySnackBar";
import { validationSchema } from "./validationChema";
import { useFormik } from "formik";
import { fields } from "./paymentFormFields";

function PaymentForm({ handleNext, handleBack }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("info");
  const sm = useMediaQuery("(min-width:600px)");

  const handleCloseSnack = () => setShowSnack(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      cardNumber: "",
      expiredDate: "",
      cvv: "",
    },
    validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSnackMessage("Payment accepted");
      setShowSnack(true);
    }, 1000);
    setTimeout(() => {
      setIsLoading(false);
      handleNext();
    }, 2500);
  };

  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} mb={3}>
            <Typography fontWeight="600" variant="h5">
              Payment Method
            </Typography>
          </Grid>

          <Grid item xs={12} mb={2}>
            <img
              srcSet={require("../../assets/images/credit-card-logo.png")}
              alt={"cardLog0"}
            />
          </Grid>

          <Grid item>
            <Typography variant={sm ? "p" : "body2"}>
              This is a example form, please not enter your credit card number.
            </Typography>
          </Grid>
        </Grid>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            {fields.map((field) => {
              return field.id !== "expiredDate" ? (
                <Grid item xs={12}>
                  <TextField
                    my={1}
                    variant="standard"
                    disabled={isLoading}
                    fullWidth
                    id={field.id}
                    label={field.label}
                    type="text"
                    aria-describedby={field.ariaDescribedBy}
                    value={formik.values[field.id]}
                    onChange={formik.handleChange}
                    error={
                      formik.touched[field.id] &&
                      Boolean(formik.errors[field.id])
                    }
                    helperText={
                      formik.touched[field.id] && formik.errors[field.id]
                    }
                  />
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      id={field.id}
                      name={field.id}
                      minDate={new Date()}
                      maxDate={new Date("2034-01-01T00:00:00.000")}
                      label={field.label}
                      views={["month", "year"]}
                      value={formik.values[field.value]}
                      onChange={(newValue) =>
                        formik.setFieldValue("expiredDate", newValue)
                      }
                      renderInput={(params) => {
                        console.log(params);
                        return (
                          <TextField
                            {...params}
                            variant="standard"
                            disabled={isLoading}
                            fullWidth
                            label={field.label}
                            type="text"
                            aria-describedby={field.ariaDescribedBy}
                            error={
                              formik.touched[field.id] &&
                              Boolean(formik.errors[field.id])
                            }
                            helperText={
                              formik.touched[field.id] &&
                              formik.errors[field.id]
                            }
                          />
                        );
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
              );
            })}
          </Grid>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={sm ? "Remember Credit Card for next time" : "Remember"}
            />
          </FormGroup>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              sx={{
                transition: "0.2",
                marginRight: "1rem",
                ":hover": {
                  transition: "0.2",
                  color: "#ab832a",
                  backgroundColor: "rgb(171,131,42, 0.1)",
                },
              }}
              variant="text"
              onClick={handleBack}
            >
              Back
            </Button>
            <LoadingButton
              loading={isLoading}
              sx={{ ...buttonStyles }}
              variant="contained"
              type="submit"
            >
              Next
            </LoadingButton>
          </Box>
        </form>
        <MySnackBar
          open={showSnack}
          message={snackMessage}
          handleClose={handleCloseSnack}
          severity={snackSeverity}
        />
      </Container>
    </>
  );
}

export default PaymentForm;
