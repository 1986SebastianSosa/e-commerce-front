import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box, CircularProgress } from "@mui/material";

function ExampleCarousel({ selectedProduct }) {
  const pathImageUrl = process.env.REACT_APP_IMAGE_HOSTING_URL;
  const productImages = selectedProduct.imgUrl;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignitems: "center",
      }}
    >
      {Object.entries(selectedProduct) === 0 ? (
        <CircularProgress />
      ) : (
        <Carousel
          indicators={false}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {productImages.length === 0 ? (
            <CircularProgress />
          ) : (
            productImages.map((img, i) => (
              <Box
                display="flex"
                alignItems="center"
                key={`img-${i}`}
                sx={{
                  width: { md: "80%", xs: "80%" },
                  height: { md: "80%", xs: "80%" },
                  margin: "auto",
                  p: 5,
                }}
              >
                <img
                  alt="guitar"
                  srcSet={pathImageUrl + img}
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </Box>
            ))
          )}
        </Carousel>
      )}
    </Box>
  );
}

function Item(props) {
  return (
    <Paper sx={{ width: "100%", height: "150px", border: "1px solid #BF8832" }}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
}

export default ExampleCarousel;
