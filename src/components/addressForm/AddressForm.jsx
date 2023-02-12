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
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateOrderReducer } from "../../Redux/order/slice";
import { fields } from "./addressFormFields";
import { validationSchema } from "./validationSchema";

function AddressForm({ handleNext }) {
  const dispatch = useDispatch();

  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };

  const handleNextForm = (data) => {
    dispatch(updateOrderReducer({ ...data }));
    handleNext();
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      addressLine: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleNextForm(values),
  });

  return (
    <>
      <Box sx={{ height: "100%", width: "100%" }}>
        <Typography fontWeight="600" variant="h5">
          Shipping Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Container>
              <Grid container spacing={2}>
                {fields.map((field) => {
                  return (
                    <Grid item xs={12} md={6} key={field.id}>
                      <TextField
                        variant="standard"
                        fullWidth
                        id={field.id}
                        label={field.label}
                        size="small"
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
                  );
                })}
              </Grid>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Use this address for payment details"
                />
              </FormGroup>

              <Box display="flex" justifyContent="end">
                <Button
                  type="submit"
                  sx={{
                    ...buttonStyles,
                  }}
                  variant="contained"
                >
                  Next
                </Button>
              </Box>
            </Container>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default AddressForm;
