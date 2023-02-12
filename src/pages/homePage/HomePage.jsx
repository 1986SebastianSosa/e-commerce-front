import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  CssBaseline,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { fetchStarredProducts } from "../../services/apiServices";
import GridCategories from "../../components/gridCategories/GridCategories";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { titleStyles, subTitleStyles } from "../../style/muiStyles";
import { ReactComponent as CreditCard } from "../../assets/images/creditCard.svg";
import { ReactComponent as Truck } from "../../assets/images/truck.svg";
import { ReactComponent as Shield } from "../../assets/images/shield.svg";

import "./HomePage.css";
import SlickCarousel from "./slickCarousel/SlickCarousel";

const HomePage = () => {
  const [starredProducts, setStarredProducts] = useState([]);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getstarredProducts = async () => {
      const response = await fetchStarredProducts();
      setStarredProducts([...response]);
    };
    getstarredProducts();
  }, []);

  return (
    <>
      <CssBaseline />
      <section className="start-page parallax-background" id="home">
        <Box className="opacity-bg"></Box>
        <Box
          className="content-bg"
          sx={{
            display: "flex",
            flexDirection: "column",
            JustifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="title-text"
          >
            <Typography
              variant="h4"
              noWrap
              sx={{ color: "white", fontSize: { xs: "1rem", sm: "2rem" } }}
            >
              One click away from a life of music.
            </Typography>

            <Box sx={{ paddingTop: "2rem" }}>
              <Button
                onClick={() => navigate("/store/allproducts")}
                variant="contained"
                disableElevation
              >
                Shop Now
              </Button>
            </Box>
          </Box>
          <Box className="arrow-down"></Box>
        </Box>
      </section>

      <section>
        <Container>
          <Box>
            <Typography
              marginTop="50px"
              color={theme.palette.text.primary}
              sx={titleStyles}
            >
              Music Inspires
            </Typography>
            <Box
              m="auto"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Typography
                variant="h2"
                sx={{
                  ...subTitleStyles,
                  marginTop: "20px",
                  textAlign: "center",
                }}
                color={theme.palette.text.primary}
              >
                Life without playing music is inconceivable for me.
              </Typography>
              <Typography textAlign="start">- Albert Einstein</Typography>
            </Box>
          </Box>
          <Box sx={{ paddingY: "3rem" }}>
            <GridCategories />
          </Box>
        </Container>
      </section>

      <section>
        <Box
          className="parallax"
          sx={{
            backgroundSize: { xs: "450%", sm: "300%", md: "200%", lg: "100%" },
          }}
        >
          <Box
            sx={{
              height: "50vh",
              width: "100%",
              marginBottom: "3rem",
            }}
          ></Box>
        </Box>
      </section>

      <section>
        <Grid
          container
          py={2}
          sx={{ paddingBottom: "5rem" }}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Box>
              <Typography
                variant="h3"
                color={theme.palette.text.primary}
                sx={{ marginBottom: "2rem" }}
              >
                Our Featured Products
              </Typography>
            </Box>
            <Box
              py={1}
              sx={{
                backgroundColor: "white",
                borderBottom: `1px solid ${theme.palette.primary.light}`,
                borderTop: `1px solid ${theme.palette.primary.light}`,
              }}
            >
              {<SlickCarousel starredProducts={starredProducts} />}
            </Box>
          </Grid>
        </Grid>

        <Container>
          <Box>
            <Grid container paddingBottom={3}>
              <Grid item xs={12} sm={4} className="iconsvg">
                <CreditCard />

                <Typography variant="h5" fontWeight={700}>
                  Buy with card or cash
                </Typography>
                <Typography variant="subtitle1">
                  We accept all credit and debit cards. We also offer our shop
                  local card with awesome benefits and discounts!
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                className="iconsvg"
                sx={{
                  borderLeft: `1px solid ${theme.palette.primary.light}`,
                  borderRight: `1px solid ${theme.palette.primary.light}`,
                }}
              >
                <Truck />

                <Typography
                  variant="h5"
                  color={theme.palette.text.primary}
                  fontWeight={700}
                >
                  Fast and safe shipping
                </Typography>
                <Typography
                  color={theme.palette.text.primary}
                  variant="subtitle1"
                >
                  Our delivery service is as fast as you have ever imagined. Get
                  your products at home within{" "}
                  <span style={{ fontFamily: "number" }}>72hs</span> of
                  purchase!
                </Typography>
              </Grid>
              {/* <Divider orientation="vertical" flexItem>
                .
              </Divider> */}
              <Grid item xs={12} sm={4} className="iconsvg">
                <Shield />
                <Typography
                  variant="h5"
                  color={theme.palette.text.primary}
                  fontWeight={700}
                >
                  Protected Purchase
                </Typography>
                <Typography
                  color={theme.palette.text.primary}
                  variant="subtitle1"
                >
                  If there's any problem with your order transaction you will be
                  reimbursed for 100% of your purchase total
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section>
        <Box className="marqueebutom">
          <p className="giftext">
            <span style={{ display: "inline-block", marginRight: "20%" }}>
              Get <span style={{ fontFamily: "number" }}> $85.00 </span> in
              Bonus Bucks in Fender Player Stratocaster
            </span>
            <span style={{ display: "inline-block", marginRight: "20%" }}>
              Tidepool with Maple Fingerboard in you buy within the next 48hs!
            </span>
            <span style={{ display: "inline-block", marginRight: "20%" }}>
              Stay put for the incoming selection of PRS and Marshall products{" "}
              <span style={{ fontFamily: "number" }}>$60</span>
              Bundle Savings in Fishman Loudbox mini BT Songwriter Package with
              Microphone, Stand & Cable!
            </span>
          </p>
        </Box>
      </section>
    </>
  );
};

export default HomePage;
