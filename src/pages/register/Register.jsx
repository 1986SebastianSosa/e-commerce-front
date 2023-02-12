import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";
import {
  Button,
  Divider,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
} from "@mui/material";
import { Typography, Tooltip } from "@mui/material";
import { Container } from "@mui/system";
import { registerUser } from "../../services/registerServices";
import { loginUserReducer } from "../../Redux/user/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Twitter } from "@mui/icons-material";
import { categoryBtnStyles } from "../../components/login/styles";
import Google from "../../assets/icons/google_icon.png";
import "../login/login.css";

export default function Register() {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = async ({
    firstName,
    lastName,
    email,
    password,
    address,
    phone,
  }) => {
    setError(false);
    const response = await registerUser(
      firstName,
      lastName,
      email,
      password,
      address,
      phone
    );
    if (Object.entries(response).length === 0) return setError(true);

    dispatch(loginUserReducer(response));
    navigate("/", { replace: true });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleRegister(values),
  });

  return (
    <>
      <Container sx={{ paddingY: "2rem", mt: "64px" }}>
        <Grid container component="main" className="borderform">
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            className="gradientbg"
            component={Paper}
            elevation={3}
            square
            backgroundColor="white"
          >
            <Box
              sx={{
                my: 3,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">Register</Typography>
              <form onSubmit={formik.handleSubmit}>
                <Box>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="firstName"
                    id="firstName"
                    label="First Name"
                    variant="standard"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="lastName"
                    id="lastName"
                    label="Last Name"
                    variant="standard"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="email"
                    id="email"
                    label="Email"
                    variant="standard"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="phone"
                    id="phone"
                    type="number"
                    label="Phone"
                    variant="standard"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    type="password"
                    name="password"
                    id="password"
                    label="Password"
                    variant="standard"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="address"
                    id="address"
                    label="Enter your address"
                    variant="standard"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                  />
                  <Box height="3rem" display="flex" alignItems="center">
                    {error ? (
                      <Typography sx={{ color: "red" }}>
                        Email already exist
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Box>
                  <Button
                    disableElevation
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ ...categoryBtnStyles }}
                  >
                    Register
                  </Button>

                  <Divider sx={{ py: "2rem", color: "black" }}>OR</Divider>
                  <Box paddingBottom={2} alignItems="center">
                    <Tooltip
                      title={
                        <Typography>
                          This functionality is beyond the scope of this project
                        </Typography>
                      }
                      arrow
                    >
                      <Button
                        variant="outlined"
                        sx={{ color: "text.primary", width: "100%" }}
                      >
                        <img
                          src={Google}
                          alt="Google Icon"
                          style={{ width: "20.92px", marginRight: "5px" }}
                        />{" "}
                        <span>Sign in with Google</span>
                      </Button>
                    </Tooltip>
                  </Box>
                  <Box alignItems="center">
                    <Tooltip
                      title={
                        <Typography>
                          This functionality is beyond the scope of this project
                        </Typography>
                      }
                      arrow
                    >
                      <Button
                        variant="outlined"
                        sx={{ color: "text.primary", width: "100%" }}
                      >
                        <Twitter
                          sx={{ marginRight: "5px", color: "#00acee" }}
                        />{" "}
                        Sign in with Twitter
                      </Button>
                    </Tooltip>
                  </Box>
                </Box>
              </form>
            </Box>
          </Grid>
          <Grid
            className="background-guitar"
            item
            xs={false}
            sm={6}
            md={7}
            sx={{
              backgroundImage:
                "url(https://wallpaperboat.com/wp-content/uploads/2019/04/electric-guitar-003.jpg)",

              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[70]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Container>
    </>
  );
}
