import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import FirstnameDialogue from "./editDialogues/FirstnameDialogue";
import LastnameDialogue from "./editDialogues/LastnameDialogue";
import EmailDialogue from "./editDialogues/EmailDialogue";
import PasswordDialogue from "./editDialogues/PasswordDialogue";
import AddressDialogue from "./editDialogues/AddressDialogue";
import PhoneDialogue from "./editDialogues/PhoneDialogue";

const ResumePage = ({ user }) => {
  const theme = useTheme();
  const [firstname, setFirstname] = useState(user.firstName);
  const [lastname, setLastname] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [address, setAddress] = useState([user.address]);
  const [phone, setPhone] = useState(user.phone);
  const [open, setOpen] = useState(false);
  const [editField, setEditField] = useState("");
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    setFirstname(user.firstName);
    setLastname(user.lastName);
    setEmail(user.email);
    setPassword(user.password);
    setAddress(user.address);
    setPhone(user.phone);
  });

  const getDialogue = (editField) => {
    switch (editField) {
      case "firstname":
        return (
          <FirstnameDialogue
            setOpen={setOpen}
            open={open}
            firstname={firstname}
            setFirstname={setFirstname}
            id={user._id}
          />
        );
      case "lastname":
        return (
          <LastnameDialogue
            setOpen={setOpen}
            open={open}
            lastname={lastname}
            setLastname={setLastname}
            id={user._id}
          />
        );
      case "email":
        return (
          <EmailDialogue
            setOpen={setOpen}
            open={open}
            email={email}
            setEmail={setEmail}
            id={user._id}
          />
        );
      case "password":
        return (
          <PasswordDialogue
            setOpen={setOpen}
            open={open}
            password={password}
            setPassword={setPassword}
            id={user._id}
          />
        );
      case "address":
        return (
          <AddressDialogue
            setOpen={setOpen}
            open={open}
            address={user.address}
            setAddress={setAddress}
            id={user._id}
          />
        );
      case "phone":
        return (
          <PhoneDialogue
            setOpen={setOpen}
            open={open}
            phone={phone}
            setPhone={setPhone}
            id={user._id}
          />
        );
    }
  };

  const buttonStyle = {
    width: "100%",
    textAlign: "center",
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "5px",
    backgroundColor: "white",
    display: "flex",
  };

  return (
    <>
      <Container>
        <Grid container textAlign="left" spacing={5} mb={5}>
          <Grid
            item
            xs={12}
            sx={{
              borderBottom: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ fontSize: { xs: "1.5rem" } }}
            >
              Manage your Account Information
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" mb={1}>
              Firstname:
            </Typography>
            <Button
              sx={buttonStyle}
              onClick={() => {
                setEditField("firstname");
                handleOpen();
              }}
            >
              <Typography variant="p" fontSize="16px" width="100%">
                {user.firstName}
              </Typography>

              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" mb={1}>
              Lastname:
            </Typography>
            <Button
              sx={buttonStyle}
              onClick={() => {
                setEditField("lastname");
                handleOpen();
              }}
            >
              <Typography variant="p" fontSize="16px" width="100%">
                {user.lastName}
              </Typography>
              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" mb={1}>
              Email:
            </Typography>
            <Button
              sx={buttonStyle}
              onClick={() => {
                setEditField("email");
                handleOpen();
              }}
            >
              <Typography variant="p" fontSize="16px" width="100%">
                {email}
              </Typography>
              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" mb={1}>
              Password:
            </Typography>
            <Button
              sx={buttonStyle}
              onClick={() => {
                setEditField("password");
                handleOpen();
              }}
            >
              <Typography variant="p" fontSize="16px" width="100%">
                {"password"}
              </Typography>
              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mb={1} display="flex" justifyContent="space-between">
              <Typography
                variant="body2"
                display="inline"
                sx={{ marginY: "auto" }}
              >
                Address:
              </Typography>{" "}
            </Box>
            <Button
              sx={buttonStyle}
              onClick={() => {
                setEditField("address");
                handleOpen();
              }}
            >
              <Typography variant="p" fontSize="16px" width="100%">
                {user.address}
              </Typography>
              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mb={1} display="flex" justifyContent="space-between">
              <Typography
                variant="body2"
                display="inline"
                sx={{ marginY: "auto" }}
              >
                Phone Number:
              </Typography>
            </Box>
            <Button
              sx={buttonStyle}
              onClick={() => {
                setEditField("phone");
                handleOpen();
              }}
            >
              <Typography
                variant="p"
                fontSize="16px"
                width="100%"
                fontFamily="number"
              >
                {user.phone}
              </Typography>
              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
        </Grid>
        {getDialogue(editField)}
      </Container>
    </>
  );
};

export default ResumePage;
