import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  Container,
  Badge,
  Avatar,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  ClickAwayListener,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerNav from "./DrawerNav";
import CartDrawer from "./CartDrawer";
import "./NavBar.css";
import { fetchCategories, fetchProducts } from "../../services/apiServices";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Navbar() {
  const user = useSelector((store) => store.user);
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [page, setPage] = useState(1);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const handleClose = (e) => {
    if (e.target.id === "span_categories") return setCategoriesOpen(true);
    setCategoriesOpen(false);
  };
  const handleOpen = () => setCategoriesOpen((prev) => !prev);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  let cartQty = 0;
  cart.forEach((item) => {
    cartQty += item.qty;
  });

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetchCategories();
      setCategories(response);
    };
    getCategories();
  }, []);

  const handleAllProducts = async () => {
    const response = await fetchProducts(page);
  };

  const stringAvatar = (firstName, lastName) => {
    return {
      sx: {
        backgroundColor: "#FCFAF6",
        color: theme.palette.primary.main,
        fontWeight: 500,
        border: `1px solid ${theme.palette.primary.main}`,
      },
      children: `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`,
    };
  };

  const menuItemStyles = {
    color: "primary.main",
    borderRadius: "0 0 10px 10px",
    transition: "0.2s",
    borderBottom: "2px solid rgba(242, 219, 184, 0)",
    ":hover": {
      transition: "0.2s",
      background: "rgba(242, 219, 184, 0.1)",
      borderBottom: "2px solid rgba(242, 219, 184, 1)",
    },
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const pathName = window.location.pathname;

  const notTransparentNav = [
    "login",
    "register",
    "contactus",
    "userpage",
    "contact",
    "product",
    "checkout",
    "welcome",
  ];

  const renderTransparentNav = notTransparentNav.includes(
    pathName.substring(1).split("/")[0]
  );

  return (
    <>
      <ElevationScroll>
        <AppBar
          sx={
            navbarScroll
              ? {
                  backgroundColor: "#ab832a",
                  transition: "0.3s",
                  width: "100%",
                }
              : {
                  backgroundColor: renderTransparentNav
                    ? "#ab832a"
                    : "transparent",
                  boxShadow: 0,
                  transition: "0.3s",
                  width: "100%",
                }
          }
        >
          <Container>
            <Toolbar
              disableGutters
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                paddingX: 0,
                marginX: 0,
              }}
            >
              <Link to="/" className="navLink">
                <Typography>
                  <img
                    style={{
                      width: "25px",
                      // position: "relative",
                      // transform: "rotate(25deg)",
                      marginBottom: "0.6rem",
                    }}
                    srcSet={require("../../assets/images/guitarreroWithe.png")}
                    alt={"cardLog0"}
                  />
                  Guitarrero Store
                </Typography>
              </Link>

              {isMatch ? (
                <Box display="flex" alignItems="center">
                  <Box
                    display="flex"
                    onClick={() => setIsCartOpen(true)}
                    sx={{ cursor: "pointer" }}
                  >
                    <Badge
                      badgeContent={cartQty}
                      color="secondary"
                      max={99}
                      overlap="circular"
                    >
                      <ShoppingCartIcon
                        sx={{
                          paddingTop: 0.1,
                          marginLeft: 2,
                        }}
                        className="hover navLink"
                        color="background"
                      />
                    </Badge>
                  </Box>
                  <DrawerNav />
                </Box>
              ) : (
                <>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="35%"
                  >
                    <Typography
                      id="categories__btn"
                      name="categories__btn"
                      variant="button"
                      onClick={() => {
                        handleOpen();
                      }}
                    >
                      <span id="span_categories" className="navLink navStyles">
                        Categories
                      </span>
                    </Typography>
                    <ClickAwayListener onClickAway={(e) => handleClose(e)}>
                      <MenuList
                        variant="menu"
                        id="categories__menu"
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        sx={{
                          display: categoriesOpen ? "flex" : "none",
                          position: "absolute",
                          left: "32%",
                          top: "64px",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: `background.default`,
                            py: "1rem",
                            borderRadius: "15px",
                            backdropFilter: "blur(5px)",

                            // border: "1px solid rgba(255, 255, 255, 0.2)",
                          }}
                        >
                          <MenuItem sx={menuItemStyles}>
                            <Typography
                              variant="button"
                              px="1rem"
                              onClick={(e) => {
                                navigate("/store/allproducts");
                                handleClose(e);
                              }}
                            >
                              {" "}
                              ALL PRODUCTS
                            </Typography>
                          </MenuItem>
                          <MenuItem sx={menuItemStyles}>
                            <Typography
                              variant="button"
                              px="1rem"
                              onClick={(e) => {
                                navigate("/store/accesories");
                                handleClose(e);
                              }}
                            >
                              {" "}
                              ACCESORIES
                            </Typography>
                          </MenuItem>
                          <MenuItem sx={menuItemStyles}>
                            <Typography
                              variant="button"
                              px="1rem"
                              onClick={(e) => {
                                navigate("/store/effects");
                                handleClose(e);
                              }}
                            >
                              {" "}
                              EFFECTS
                            </Typography>
                          </MenuItem>
                          <MenuItem sx={menuItemStyles}>
                            <Typography
                              variant="button"
                              px="1rem"
                              onClick={(e) => {
                                navigate("/store/bass");
                                handleClose(e);
                              }}
                            >
                              {" "}
                              BASS
                            </Typography>
                          </MenuItem>
                          <MenuItem sx={menuItemStyles}>
                            <Typography
                              variant="button"
                              px="1rem"
                              onClick={(e) => {
                                navigate("/store/electric");
                                handleClose(e);
                              }}
                            >
                              {" "}
                              ELECTRIC
                            </Typography>
                          </MenuItem>
                          <MenuItem sx={menuItemStyles}>
                            <Typography
                              variant="button"
                              px="1rem"
                              onClick={(e) => {
                                navigate("/store/acoustic");
                                handleClose(e);
                              }}
                            >
                              {" "}
                              ACOUSTIC
                            </Typography>
                          </MenuItem>
                          <MenuItem sx={menuItemStyles}>
                            <Typography
                              variant="button"
                              px="1rem"
                              onClick={(e) => {
                                navigate("/store/amplifier");
                                handleClose(e);
                              }}
                            >
                              {" "}
                              AMPLIFIER
                            </Typography>
                          </MenuItem>
                        </Box>
                      </MenuList>
                    </ClickAwayListener>

                    <Typography variant="button">
                      <Link to="/contact" className="navLink navStyles">
                        Contact
                      </Link>
                    </Typography>
                    <Typography variant="button">
                      <Link to="/about" className="navLink navStyles">
                        About
                      </Link>
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    {Object.entries(user).length === 0 ? (
                      <>
                        <Box>
                          <Typography variant="button">
                            <Link to="/login" className="hover navLink">
                              Login
                            </Link>
                          </Typography>
                        </Box>
                      </>
                    ) : (
                      <>
                        <IconButton
                          size="small"
                          onClick={() => {
                            navigate(`/userpage/${user._id}`, {
                              replace: false,
                            });
                          }}
                        >
                          <Avatar
                            {...stringAvatar(user.firstName, user.lastName)}
                            sx={{
                              transition: "0.2s",
                              "&:hover": {
                                transition: "0.2s",
                                transform: "translateY(-5px)",
                              },
                            }}
                          />
                        </IconButton>
                      </>
                    )}

                    <Box
                      display="flex"
                      onClick={() => setIsCartOpen(true)}
                      sx={{ cursor: "pointer" }}
                    >
                      <Badge
                        badgeContent={cartQty}
                        color="secondary"
                        max={99}
                        overlap="circular"
                      >
                        <ShoppingCartIcon
                          sx={{
                            paddingTop: 0.1,
                            marginLeft: 2,
                            transition: "0.2s",
                            "&:hover": {
                              transition: "0.2s",
                              transform: "translateY(-5px)",
                              cursor: "pointer",
                            },
                          }}
                          className="hover navLink"
                          color="background"
                        />
                      </Badge>
                    </Box>
                  </Box>
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
}

export default Navbar;
