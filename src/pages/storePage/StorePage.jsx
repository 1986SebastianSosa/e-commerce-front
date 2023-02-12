import {
  Box,
  CssBaseline,
  Grid,
  Pagination,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  fetchProducts,
  fetchProductsByCategory,
} from "../../services/apiServices";
import { ViewList, ViewModule } from "@mui/icons-material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import { titleStyles } from "../../style/muiStyles";
import { categoryHeader } from "./utils/categoryHeader";
import { categoryName } from "./utils/categoryName";
import { Puff } from "react-loader-spinner";
import ProductCard from "./productCard/ProductCard";
import InfoIcon from "@mui/icons-material/Info";
import "./StorePage.css";

const StorePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [prodCount, setProdCount] = useState(0);
  const [categorySelected, setCategorySelected] = useState("All Products");
  const [viewDisplay, setViewDisplay] = useState("module");

  const theme = useTheme();
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getAllProducts = async () => {
      try {
        const data = await fetchProducts(page);
        setProducts(data.products);
        setProdCount(data.count);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    const getProductsByCategory = async () => {
      try {
        const data = await fetchProductsByCategory(params.categoryName, page);
        setProducts(data.products);
        setProdCount(data.count);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (params.categoryName === "allproducts") {
      getAllProducts();
      setCategorySelected("All Products");
    } else {
      getProductsByCategory();

      setCategorySelected(categoryName(params.categoryName));
    }
  }, [params.categoryName, page]);

  return (
    <>
      <CssBaseline />
      <Grid container sx={{ marginBottom: "10vh" }}>
        <Grid item xs={12} className="heading">
          <img
            srcSet={categoryHeader(params)}
            alt=""
            style={{ boxShadow: "inset 0px 54px 51px -6px rgba(0,0,0,0.64)" }}
          />
        </Grid>
        <Box className="opacity-bg"></Box>
      </Grid>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              my="1rem"
              sx={{
                width: "100%",
                borderBottom: `solid 1px ${theme.palette.text.secondary}`,
              }}
            >
              <Typography
                variant="h3"
                color={theme.palette.text.primary}
                sx={titleStyles}
              >
                {categorySelected}
              </Typography>

              <ToggleButtonGroup
                size="small"
                exclusive
                color="primary"
                value={viewDisplay}
                onChange={(e, newValue) => setViewDisplay(newValue)}
              >
                <ToggleButton value="module">
                  <ViewModule fontSize="small" />
                </ToggleButton>
                <ToggleButton value="list">
                  <ViewList fontSize="small" />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box>
              {isLoading ? (
                <Box
                  minHeight="20rem"
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Puff
                    color={theme.palette.secondary.main}
                    height="100"
                    width="100"
                  />
                </Box>
              ) : (
                <>
                  <Grid
                    container
                    width="100%"
                    justifyContent={{ xs: "center", sm: "space-between" }}
                  >
                    {products ? (
                      products.map((product) => {
                        return (
                          <ProductCard
                            key={product._id}
                            product={product}
                            display={viewDisplay}
                          />
                        );
                      })
                    ) : (
                      <Box py={5} display="flex">
                        <InfoIcon />
                        <Typography ml={2}>
                          It looks like the are no products to show right now.
                          Try again later
                        </Typography>
                      </Box>
                    )}
                  </Grid>
                  <Box display="flex" justifyContent="center">
                    <Pagination
                      page={page}
                      count={Math.ceil(prodCount / 10)}
                      shape="rounded"
                      onChange={(e) => setPage(parseInt(e.target.textContent))}
                    />
                  </Box>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default StorePage;
