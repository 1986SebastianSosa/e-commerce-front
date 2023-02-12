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

const EmailDialogue = ({ open, setOpen, email, setEmail, id }) => {
  const handleClose = () => setOpen(false);
  const params = useParams();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .required("Your email is required")
      .email("Please enter a valid email address"),
  });

  const formik = useFormik({
    initialValues: {
      email: email,
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
        <DialogTitle>Edit your email</DialogTitle>
        <form
          onSubmit={() => {
            setEmail(formik.values.email);
            formik.handleSubmit();
          }}
        >
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              margin="dense"
              id="email"
              label="email"
              type="email"
              variant="standard"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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

export default EmailDialogue;
