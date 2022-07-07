import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  Divider,
  FormControl,
  Typography,
  Button,
} from "@mui/material";

import "./footer.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const iconStyles = {
    ml: 1,
  };

  return (
    <>
      <Box
        label="cosopum"
        padding="2.5rem"
        paddingBottom="2rem"
        bgcolor="#000000"
        color="#F2DBB8"
        height="50%"
        sx={{ position: "absolute", width: "100%" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
              <Box textAlign="left" variant="h1" marginBottom={3}>
                <Link to="/" className="footerLink">
                  GUITARRERO
                </Link>
              </Box>
              <Box textAlign="left">
                <Typography
                  sx={{
                    cursor: "pointer",
                    fontWeight: "600",
                    textDecoration: "none",
                    color: "#7B8723",
                  }}
                  onClick={() => {
                    window.open(process.env.REACT_APP_ADMIN_URL, "_blank");
                  }}
                >
                  ADMIN
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography
                variant="subtitle1"
                borderBottom={0}
                textAlign="left"
                color="primary"
                fontWeight={700}
              >
                Locals
              </Typography>
              <Box marginTop={1}>
                <Box color="inherit" textAlign="left">
                  P. Sherman, calle Wallaby, 42
                </Box>
              </Box>
              <Box>
                <Box href="" color="inherit" textAlign="left">
                  Open: 9:00-18:00
                </Box>
              </Box>

              <Box marginTop={2}>
                <Box href="" color="inherit" textAlign="left">
                  742 Evergreen Terrace
                </Box>
              </Box>
              <Box>
                <Box href="" color="inherit" textAlign="left">
                  Open: 9:00-18:00
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography
                variant="subtitle1"
                borderBottom={0}
                textAlign="left"
                color="primary"
                fontWeight={700}
              >
                Contact
              </Typography>
              <Box>
                <Box href="" color="inherit" textAlign="left" marginTop={1}>
                  pepe.leia@ha.com
                </Box>
              </Box>
              <Box>
                <Box href="" color="inherit" textAlign="left">
                  Cel:55523156
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl variant="standard" fullWidth>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  textAlign="left"
                  color="primary"
                >
                  Suscribe for More
                </Typography>
                <Divider />

                <input
                  className="subscribe"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <Button variant="contained" color="primary">
                  Send
                </Button>
              </FormControl>
            </Grid>
          </Grid>
          <Divider sx={{ marginY: "2rem" }} />

          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box textAlign="left">&reg;2022 Guitarrero</Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Link to="/" className="footerLink">
                  <InstagramIcon sx={iconStyles} />
                </Link>
                <Link to="/" className="footerLink">
                  <GitHubIcon sx={iconStyles} />
                </Link>
                <Link to="/" className="footerLink">
                  <TwitterIcon sx={iconStyles} />
                </Link>
                <Link to="/" className="footerLink">
                  <LinkedInIcon sx={iconStyles} />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
