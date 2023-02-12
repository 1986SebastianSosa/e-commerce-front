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

const PasswordDialogue = ({ open, setOpen, password, setPassword, id }) => {
  const handleClose = () => setOpen(false);
  const params = useParams();

  const validationSchema = yup.object({
    password: yup
      .string("Enter your password")
      .required("Your password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: password,
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
        <DialogTitle>Edit your Password</DialogTitle>
        <form
          onSubmit={() => {
            formik.handleSubmit();
          }}
        >
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              margin="dense"
              id="password"
              label="password"
              type="password"
              variant="standard"
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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

export default PasswordDialogue;
