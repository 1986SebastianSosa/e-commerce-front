import {
  Container,
  Divider,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  CssBaseline,
  Paper,
  Alert,
} from "@mui/material";
import React from "react";
import imgGuitarStore from "../../assets/images/guitarscontactUs.webp";
import "./contactUs.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AddTask } from "@mui/icons-material";
import { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import { titleStyles } from "../../style/muiStyles";

function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const iconStyles = {
    transition: "0.2s",
    ":hover": {
      transition: "0.2s",
      transform: "translateY(-5px)",
      cursor: "pointer",
    },
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <Typography
          variant="h3"
          alignItems="center"
          paddingY="5rem"
          pb="2rem"
          sx={titleStyles}
        >
          Contact Us
        </Typography>
        <Paper
          elevation={5}
          sx={{
            backgroundColor: "white",
            p: "2rem",
            mb: "2rem",
          }}
        >
          <Grid container spacing={2} columns={16}>
            <Grid
              item
              xs={16}
              md={8}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Box paddingTop="0.5rem" textAlign="left">
                <Typography
                  variant="h5"
                  pb="0.5rem"
                  fontWeight={700}
                  color="primary"
                >
                  Get in Touch
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid xs={12} md={6} item>
                      <TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        placeholder="Enter First Name"
                        variant="outlined"
                        fullWidth
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={12} md={6} item>
                      <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        placeholder="Enter Last Name"
                        variant="outlined"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Enter Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        id="subject"
                        name="subject"
                        label="Subject"
                        placeholder="Subject"
                        variant="outlined"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        multiline
                        rows={4}
                        id="message"
                        name="message"
                        label="Message"
                        placeholder="Type your message here"
                        variant="outlined"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Button
                        onClick={handleClick}
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Submit
                      </Button>
                      <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                      >
                        <Alert
                          onClose={handleClose}
                          severity="success"
                          sx={{ width: "100%" }}
                        >
                          Your message has been sent! Thank you.
                        </Alert>
                      </Snackbar>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>

            <Grid
              item
              xs={16}
              md={8}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <Typography variant="h5" fontWeight={700} color="primary">
                  Contact Information
                </Typography>
                <Typography
                  variant="subtitle1"
                  textAlign="left"
                  paddingTop="0.2rem"
                  fontWeight="700"
                >
                  We'd love to hear from you.
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle2"
                    paddingTop="0.3rem"
                    textAlign="left"
                  >
                    Whether you’re curious about features, a free trial, or even
                    press—we’re ready to answer any and all questions.
                  </Typography>
                </Box>
              </Box>

              <Divider />
              <Box sx={{ width: { xs: "100%" } }}>
                <img srcSet={imgGuitarStore} alt="" className="imgcontactUs" />
              </Box>
              <Divider sx={{ mr: "1rem" }} />
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" textAlign="left">
                    <LocationOnIcon /> 742 Evergreen Terrace
                  </Typography>
                  <Typography variant="subtitle1" textAlign="left">
                    Open: 9:00-18:00
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" textAlign="left">
                    <EmailIcon sx={{ paddingTop: "0.3rem" }} />{" "}
                    Guitarrero@ha.com
                  </Typography>
                  <Typography variant="subtitle1" textAlign="left">
                    <LocalPhoneIcon sx={{ paddingTop: "0.3rem" }} /> 55523156
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Box
                    paddingTop="1.4rem"
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <InstagramIcon sx={iconStyles} />
                    <GitHubIcon sx={iconStyles} />
                    <TwitterIcon sx={iconStyles} />
                    <LinkedInIcon sx={iconStyles} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default ContactUs;
