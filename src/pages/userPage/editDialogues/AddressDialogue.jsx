import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { updateUser } from "../../../services/apiServices";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";

const AddressDialogue = ({ open, setOpen, address, setAddress }) => {
  const handleClose = () => setOpen(false);
  const params = useParams();

  const validationSchema = yup.object({
    address: yup
      .string("Enter your address")
      .required("Your address is required"),
  });

  const formik = useFormik({
    initialValues: {
      address: address,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      updateUser(values, params);
      handleClose();
    },
  });

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ width: { xs: "20rem", sm: "30rem", md: "38rem" } }}>
          Edit your address
        </DialogTitle>
        <form
          onSubmit={() => {
            setAddress(formik.values.address);
            formik.handleSubmit();
          }}
        >
          <DialogContent sx={{ width: "100%" }}>
            <TextField
              autoFocus
              sx={{ width: { xs: "15rem", sm: "25rem", md: "32rem" } }}
              margin="dense"
              id="address"
              label="address"
              type="text"
              variant="standard"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Edit</Button>
          </DialogActions>
        </form>
      </Dialog>
      ;
    </>
  );
};

export default AddressDialogue;
