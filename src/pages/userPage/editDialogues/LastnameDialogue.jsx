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

const LastnameDialogue = ({ open, setOpen, lastname, setLastname, id }) => {
  const handleClose = () => setOpen(false);
  const params = useParams();

  const validationSchema = yup.object({
    lastName: yup
      .string("Enter your firstname")
      .required("Your firstname is required"),
  });

  const formik = useFormik({
    initialValues: {
      lastName: lastname,
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
        <DialogTitle>Edit your Lastname</DialogTitle>
        <form
          onSubmit={() => {
            setLastname(formik.values.lastName);
            formik.handleSubmit();
          }}
        >
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              margin="dense"
              id="lastName"
              label="Lastname"
              type="text"
              variant="standard"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
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

export default LastnameDialogue;
