import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Divider,
  Container,
  Grid,
  CssBaseline,
  ListItem,
} from "@mui/material";
import React, { useEffect } from "react";
import { titleStyles } from "../../style/muiStyles";
import { postResetDB } from "../../services/apiServices";
import DevsAvatars from "./DevsAvatars";
import "./aboutUs.css";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardStyles = {
    backgroundColor: "white",
    transition: "0.2s",
    width: "100%",
    marginBottom: "1rem",
    maxWidth: "300px",
    minWidth: "250px",
    height: "300px",
    boxShadow: "3px 3px 5px 0 rgb(0,0,0, 0.22)",
    ":hover": {
      transition: "0.5s",
      boxShadow: "3px 3px 5px 0 rgb(0,0,0, 0.44)",
    },
  };

  const handleResetDataBase = async () => {
    const response = await postResetDB();
  };

  return (
    <>
      <CssBaseline />
      <Box
        className="about-page"
        sx={{
          height: "400px",
          width: "100%",
        }}
      >
        <DevsAvatars />
      </Box>
      <Box>
        <Typography
          sx={{
            ...titleStyles,
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          About Us
        </Typography>
      </Box>
      <Container>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign="start"
              fontSize="18px"
              lineHeight="1.5rem"
              variant="h5"
              pt="10px"
            >
              We are a multidisciplinary team of <b> 4 members, </b> who have
              different academic backgrounds as well as
              <b> extensive experience</b> in our respective previous fields,
              which includes sound designing, acting, adinistrative work and
              entrepreneurial persuits in the fashion industry.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign="start"
              lineHeight="1.5rem"
              fontSize="18px"
              variant="h5"
              pt="10px"
            >
              Despite of these past studies not having anything related between
              them, we have currently <b>created strong ties </b>to pursue &
              achieve our main goal: <b>to get better</b> in the IT Development
              world. This will help us renew our job careers sharing knowledge,
              ideas, etc.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Typography
        sx={{
          ...titleStyles,
          marginBottom: "20px",
          marginTop: "30px",
        }}
      >
        About Our Project
      </Typography>

      <Container>
        <Divider />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign="start"
              fontSize="18px"
              lineHeight="1.5rem"
              variant="h5"
              pt="10px"
            >
              This e-commerce site is oriented to create the final
              <b> Hack Academy Bootcamp</b> project. We've worked intensively
              during
              <b>
                <span style={{ fontFamily: "number" }}> 3</span> weeks
              </b>
              , each member dedicated around
              <b>
                <span style={{ fontFamily: "number" }}>190</span> hours.
              </b>
              Our first step, was to do a brainstorming which motivated us to
              design a MER in Figma. Later on, we started the project following
              the MER and the to do list implemented in Trello.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              textAlign="start"
              lineHeight="1.5rem"
              fontSize="18px"
              variant="h5"
              pt="10px"
            >
              The app was divided in the following projects:
              <b>
                <span style={{ fontFamily: "number" }}>1-</span> User Interface,
              </b>
              <b>
                <span style={{ fontFamily: "number" }}>2-</span>Admin Site,
              </b>
              <b>
                <span style={{ fontFamily: "number" }}>3-</span>API Rest.
              </b>
              Our main purpose was to create our own brand. We designed the
              color palette inspired by wood and natural elements. All details
              and functionalities implemented were the
              <b> team's own ideas. </b>
              The spanish guitar was the main inspiration element to design this
              web experience.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container mt="50px" mb="20px">
          <Grid item pr={3} xs={12} md={6}>
            <img
              loading="lazy"
              alt="merEcommerceFront"
              width="100%"
              srcSet={require("../../assets/images/MERe-commerce.png")}
            />
          </Grid>
          <Grid item display="flex" flexDirection="column" xs={12} md={6}>
            <Typography fontSize="16px" lineHeight="1.5rem" textAlign="left">
              <Typography fontWeight="600" fontSize="18px" component="span">
                1-User Interface:{" "}
              </Typography>
              Clients can <b>login,</b> navigate the site,<b> browse </b>
              product categories and <b> add or delete </b> items from the
              <b> shopping cart.</b> They can also pay the order and deliver it
              (simulation mode). Finally, once they've finished the shopping
              process, they can also review their order history.
            </Typography>

            <Typography
              lineHeight="1.5rem"
              fontSize="16px"
              textAlign="left"
              mt="1rem"
            >
              <Typography fontWeight="600" fontSize="18px" component="span">
                2- Admin Site:{" "}
              </Typography>
              This is where administrators <b>have the controls</b> to manage
              the site. They can <b>view, create, edit and delete products,</b>
              categories and admins. In addition to this, they can also check
              order details and edit order status.
            </Typography>

            <Typography
              lineHeight="1.5rem"
              textAlign="left"
              fontSize="16px"
              mt="1rem"
            >
              <Typography fontWeight="600" fontSize="18px" component="span">
                3-API Rest:{" "}
              </Typography>
              This site is in charge of receiving and sending the
              <b> requested information.</b>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Divider
          sx={{
            my: "30px",
          }}
        />
        <Grid justifyContent="center" container columnSpacing={2}>
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Card sx={cardStyles}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  Challenges
                </Typography>
                <Divider />

                <Typography pt="30px" variant="body2">
                  Our main challenge was to create and design the whole web
                  experience in just
                  <b>
                    <span style={{ fontFamily: "number" }}> 3</span> weeks.
                  </b>
                  At the beginning, we thought that working from home could
                  limit us from crafting a <b> great product ,</b> but we’ve
                  discovered that our workflow was very fluid and faster than we
                  actually anticipated, overcoming any potential obstacles
                  <b>efficiently </b>.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Card sx={cardStyles}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  Organization
                </Typography>
                <Divider />

                <Typography pt="30px" variant="body2">
                  We defined a <b> sprint per week </b>and we followed the
                  <b> Trello </b> pendings list to comply accordingly with the
                  corresponding time frame. We’ve also developed a very
                  <b> cohesive feedback </b> communication flow, which enhanced
                  our team’s progress efforts. We’ve also updated Trello
                  continuously to better picture our desired project goals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Card sx={cardStyles}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  Technologies
                </Typography>
                <Divider />

                <Box display="flex" variant="body2" pt="30px">
                  <br />
                  <Box>
                    <ListItem>Javascript</ListItem>
                    <ListItem>
                      {/* <CssIcon /> */}
                      CSS
                    </ListItem>

                    <ListItem>React.js</ListItem>
                    <ListItem>Mongoose</ListItem>
                    <ListItem>Redux</ListItem>
                  </Box>
                  <Box>
                    <ListItem>Express</ListItem>
                    <ListItem>Node.js</ListItem>
                    <ListItem>JWToken</ListItem>
                    <ListItem>Material UI</ListItem>

                    <ListItem>others...</ListItem>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          marginY="2rem"
          justifyContent={{ md: "flex-end", xs: "center" }}
        >
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Box textAlign="left">
              <Typography variant="h5">Credentials</Typography>
              <Typography
                sx={{
                  mb: "1rem",
                  fontSize: "15px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                For full access use the following credentials:
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "600",
                  pb: "10px",
                }}
              >
                Email: user@user.com / Password:
                <span style={{ fontFamily: "number" }}>1234</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Access to the CRUD - ADMIN site
              </Typography>

              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#7B8723",
                  my: "1rem",
                }}
                onClick={() => {
                  window.open(process.env.REACT_APP_ADMIN_URL, "_blank");
                }}
              >
                ADMIN
              </Button>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  mb: "1rem",
                }}
              >
                For a better experience, please reset the database:
              </Typography>
              <Button onClick={handleResetDataBase} variant="outlined">
                Reset DataBase
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUs;
