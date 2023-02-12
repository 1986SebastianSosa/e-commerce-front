import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  Container,
  IconButton,
  useMediaQuery,
  Backdrop,
  CircularProgress,
  Avatar,
  CssBaseline,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUser } from "../../services/apiServices";
import { Logout } from "@mui/icons-material";
import { logOutUserReducer } from "../../Redux/user/slice";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import ResumePage from "./ResumePage";
import OrdersPage from "./OrdersPage";

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, accessToken } = useSelector((store) => store.user);
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState("resume");
  const mediaQuery650 = useMediaQuery("(max-width:650px)");
  const theme = useTheme();

  <CssBaseline />;

  useEffect(() => {
    if (!_id) {
      return navigate("/", { replace: true });
    }
    const getUser = async () => {
      const response = await fetchUser(_id, accessToken);
      setUser(response);
    };
    getUser();
  }, [_id, accessToken]);

  const handleLogOut = () => {
    dispatch(logOutUserReducer());
    navigate("/", { replace: "true" });
  };

  const getTab = (selectTab) => {
    switch (selectTab) {
      case "resume":
        return <ResumePage user={user} />;
      case "orders":
        return <OrdersPage user={user} />;
      case "wishList":
        return <WishListPage user={user} />;

      default:
        return <ResumePage />;
    }
  };

  const itemsList = [
    {
      label: "Resume",
      value: "resume",
    },
    {
      label: "Orders",
      value: "orders",
    },
    {
      label: "Wish List",
      value: "wishList",
    },
  ];

  const stringAvatar = {
    sx: {
      width: 56,
      height: 56,
      backgroundColor: "#FCFAF6",
      color: theme.palette.primary.main,
      fontWeight: 500,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  };

  if (!_id) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Container sx={{ marginTop: "64px", py: "1rem" }}>
      {/* <Box display="flex" flexDirection={mediaQuery650 ? "column" : "row"}> */}
      {/* <Box width={mediaQuery650 ? "100%" : "25%"} alignItems="center"> */}
      <Grid container>
        <Grid item xs={12} md={4}>
          <Stack
            spacing={2}
            // direction={mediaQuery650 ? "row" : "column"}
            marginY="1rem"
            alignItems="center"
          >
            <Typography
              variant="h6"
              // display={!mediaQuery650 ? "block" : "none"}
            >
              {user.firstName + " " + user.lastName}
            </Typography>
            <IconButton
              size="small"
              onClick={() => navigate("/userpage", { replace: false })}
            >
              {Object.entries(user).length === 0 ? (
                <CircularProgress />
              ) : (
                <>
                  <Avatar
                    {...stringAvatar}
                    children={`${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`}
                  />
                </>
              )}
            </IconButton>
            {itemsList.map((item) => {
              return (
                <Button
                  onClick={() => setActiveTab(item.value)}
                  sx={{
                    borderRadius: "15px",
                    width: "100%",
                    maxWidth: { xs: "300px", md: "100%" },
                    margin: "auto",
                  }}
                  disableElevation
                  variant={activeTab === item.value ? "contained" : "outlined"}
                  key={item.value}
                >
                  {item.label}
                </Button>
              );
            })}

            <Divider />
            <Button
              onClick={handleLogOut}
              sx={{ borderRadius: "15px" }}
              disableElevation
            >
              <Logout /> LogOut
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            pl="2rem"
          >
            {getTab(activeTab)}
          </Box>
        </Grid>
      </Grid>

      {/* </Box> */}

      {/* </Box> */}
    </Container>
  );
};

export const WishListPage = () => {
  return (
    <div>
      <Typography variant="overline" fontSize="25px" fontWeight="700">
        COMING SOON
      </Typography>
    </div>
  );
};

export default UserPage;
