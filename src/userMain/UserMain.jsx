import { Box, Fab } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MyRoutes from "../MyRoutes";
import { useNavigate } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";

const UserMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <Navbar />
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            position: "fixed",
            top: "75vh",
            right: "-5rem",
            zIndex: "100",
            transition: "0.3s",
            "&:hover": {
              transition: "0.3s",
              right: 0,
            },
          }}
          onClick={() => navigate("/about")}
        >
          <Fab variant="extended" color="secondary" aria-label="add">
            <GroupIcon sx={{ mr: 1 }} />
            About
          </Fab>
        </Box>
        <MyRoutes type="user" />
      </main>
      <Footer />
    </>
  );
};

export default UserMain;
