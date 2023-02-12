import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import "./slickCarousel.css";
import { useTheme } from "@emotion/react";
import { addItemToCart } from "../../../Redux/cart/slice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { settings } from "./settings";

const SlickCarousel = ({ starredProducts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart = (product) => {
    dispatch(addItemToCart({ ...product, qty: 1 }));
  };

  const theme = useTheme();

  if (starredProducts.length === 0) return <></>;

  return (
    <Slider {...settings}>
      {starredProducts.map((product) => {
        const imageUrl =
          process.env.REACT_APP_IMAGE_HOSTING_URL + product.imgUrl[0];
        return (
          <Box className="carouselBox" key={product.name}>
            <Box
              p={{ xs: 0, sm: 1 }}
              sx={{
                height: "70%",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => navigate(`/product/${product.slug}`)}
            >
              <img
                src={
                  !product.imgUrl[0]
                    ? require("../../../assets/images/img-placeholder.png")
                    : imageUrl
                }
                alt={product.name}
              />
            </Box>
            <Box onClick={() => navigate(`/product/${product.slug}`)}>
              <Typography
                variant="h6"
                fontSize="1.2rem"
                sx={{
                  height: "4rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.name}
              </Typography>
            </Box>
            <Box>
              <Button
                disableElevation
                color="primary"
                sx={{
                  mb: "1rem",
                  width: "100%",
                  borderRadius: "10px",
                  border: `2px solid ${theme.palette.primary.light}`,
                }}
                onClick={() => addToCart(product)}
                variant="contained"
              >
                <AddShoppingCartIcon />
                <Typography
                  display={{ xs: "none", sm: "block" }}
                  variant="p"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Add to cart
                </Typography>
              </Button>
            </Box>
          </Box>
        );
      })}
    </Slider>
  );
};

export default SlickCarousel;
