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

const PhoneDialogue = ({ open, setOpen, phone, setPhone, id }) => {
  const handleClose = () => setOpen(false);
  const params = useParams();

  const validationSchema = yup.object({
    phone: yup.string("Enter your phone").required("Your phone is required"),
  });

  const formik = useFormik({
    initialValues: {
      phone: phone,
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
        <DialogTitle>Edit your phone</DialogTitle>
        <form
          onSubmit={() => {
            setPhone(formik.values.phone);
            formik.handleSubmit();
          }}
        >
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              margin="dense"
              id="phone"
              label="phone"
              type="phone"
              variant="standard"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
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

export default PhoneDialogue;
