import "./quantityItems.css";
import {
  Grid,
  Typography,
  Button,
  Box,
  Link,
  Container,
  CircularProgress,
  ButtonGroup,
  CssBaseline,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import ExampleCarousel from "./exampleCarousel/ExampleCarousel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../../services/apiServices";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cart/slice";
import { useTheme } from "@emotion/react";

function ProductDetail() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id: slug } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [qty, setQty] = useState(1);
  const pathImageUrl = process.env.REACT_APP_IMAGE_HOSTING_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
    const getProduct = async () => {
      const response = await fetchOneProduct(slug);
      setSelectedProduct({ ...response.data });
    };
    getProduct();
  }, [slug]);

  const addToCart = () => {
    dispatch(addItemToCart({ ...selectedProduct, qty: qty }));
  };

  const removeFromQty = () => {
    if (qty > 1) {
      setQty((prev) => (prev -= 1));
    } else return;
  };

  const carouselImgStyles = {
    width: "100px",
    marginLeft: "10px",
    objectFit: "contain",
  };

  return (
    <Container
      sx={{
        mt: 13,
        border: `1px solid ${theme.palette.primary.light}`,
        backgroundColor: "white",
        p: 3,
        mb: 5,
      }}
    >
      <CssBaseline />
      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          md={7}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          {Object.entries(selectedProduct).length === 0 ? (
            <CircularProgress />
          ) : (
            <>
              <ExampleCarousel selectedProduct={selectedProduct} />
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  justifyContent: "center",
                }}
              >
                {selectedProduct.imgUrl.map((image, i) => {
                  return (
                    <img
                      key={i}
                      alt={`${selectedProduct.name}`}
                      srcSet={pathImageUrl + selectedProduct.imgUrl[i]}
                      style={{ ...carouselImgStyles }}
                    />
                  );
                })}

                {/* <img
                  alt={`${selectedProduct.name}`}
                  srcSet={pathImageUrl + selectedProduct.imgUrl[1]}
                  style={{ ...carouselImgStyles }}
                />
                <img
                  alt={`${selectedProduct.name}`}
                  srcSet={pathImageUrl + selectedProduct.imgUrl[2]}
                  style={{ ...carouselImgStyles }}
                /> */}
              </Box>
            </>
          )}
        </Grid>

        <Grid item xs={12} md={5}>
          <Typography
            sx={{
              fontSize: { xs: "30px", lg: "40px" },
              textAlign: { md: "left", xs: "center" },
            }}
            variant="h3"
          >
            {selectedProduct.name}
          </Typography>
          {/* </Grid> */}

          <Grid
            item
            mt={5}
            xs={12}
            display="flex"
            flexDirection="column"
            sx={{ textAlign: { xs: "center", md: "start" }, width: "100%" }}
          >
            <Typography>Stock: {selectedProduct.stock}</Typography>
            <Typography variant="h6" color="secondary">
              Product Available
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <LocalShippingOutlinedIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body2" ml="5px">
                Delivers today if you order{" "}
                <Typography
                  variant="span"
                  sx={{
                    color: "secondary.main",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  now!
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: { md: "start", xs: "center" },
              alignItems: "center",
              textAlign: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography variant="h6">Price: U$S </Typography>
            <Typography
              variant="p"
              fontSize="2rem"
              component="span"
              className="number"
            >
              {selectedProduct.price}
            </Typography>
          </Grid>
          <Grid
            item
            mb={5}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            sx={{ alignItems: { md: "flex-start", xs: "center" } }}
            rowSpacing={1}
          >
            <Box>
              <ButtonGroup
                disableElevation
                sx={{ display: "flex", mb: "0.5rem", height: "2.5rem" }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    border: `2px solid ${theme.palette.primary.light}`,
                    flexGrow: "1",
                  }}
                  onClick={() => removeFromQty()}
                >
                  <RemoveCircleOutlineIcon />
                </Button>
                <Button
                  color="primary"
                  sx={{
                    border: `2px solid ${theme.palette.primary.light}`,
                    flexGrow: "1",
                    "&:hover": {
                      border: `2px solid ${theme.palette.primary.light}`,
                    },
                  }}
                >
                  <Typography
                    className="number"
                    variant="p"
                    value={1}
                    sx={{
                      fontWeight: "400",
                      fontSize: "1.3rem",
                      padding: "0 12px",
                    }}
                  >
                    {qty}
                  </Typography>
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    border: `2px solid ${theme.palette.primary.light}`,
                    flexGrow: "1",
                  }}
                  onClick={() =>
                    qty < selectedProduct.stock
                      ? setQty((prev) => (prev += 1))
                      : null
                  }
                >
                  <AddCircleOutlineIcon />
                </Button>
              </ButtonGroup>
              <Button
                disableElevation
                color="primary"
                sx={{
                  p: 1.3,
                  mb: "1rem",
                  width: "100%",
                  borderRadius: "10px",
                  border: `2px solid ${theme.palette.primary.light}`,
                }}
                onClick={() => addToCart()}
                variant="contained"
              >
                <AddShoppingCartIcon />
                <Typography
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

            <Box display="flex" alignItems="center" mb={1}>
              <GppGoodOutlinedIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body2">
                Your card information is protected
              </Typography>
            </Box>
            <Typography
              variant="p"
              sx={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "secondary.main",
              }}
            >
              <Link
                sx={{
                  color: "secondary.main",
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    color: "secondary.dark",
                  },
                }}
                href="#"
              >
                Add to Wish List +
              </Link>
            </Typography>
          </Grid>
          <Grid item sx={{ textAlign: "start" }}>
            <Typography variant="body1">
              {selectedProduct.description}
            </Typography>
          </Grid>
        </Grid>
        <hr />
      </Grid>
    </Container>
  );
}

export default ProductDetail;
