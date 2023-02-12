import { LinkedIn, GitHub } from "@mui/icons-material";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

const DevsAvatars = () => {
  const devList = [
    {
      name: "Soledad Campos",
      imageOne: require("../../assets/images/soleCampos1.jpg"),
      imageTwo: require("../../assets/images/sole2.jpg"),
      linkedin: "https://www.linkedin.com/in/soledad-campos-arellano/",
      gitHub: "https://github.com/SoleDalia",
    },
    {
      name: "Sebastian Sosa",
      imageOne: require("../../assets/images/seba.jpeg"),
      imageTwo: require("../../assets/images/Seba2.jpeg"),
      linkedin: "https://www.linkedin.com/in/sebastian-sosa-cinotti/",
      gitHub: "https://github.com/1986SebastianSosa",
    },
    {
      name: "Rodrigo Rabellino",
      imageOne: require("../../assets/images/Rodri1.jpeg"),
      imageTwo: require("../../assets/images/Rodri2.jpeg"),
      linkedin: "https://www.linkedin.com/in/rodrigorabellino/",
      gitHub: "https://github.com/RodrigoRabellino",
    },
    {
      name: "Juan Arede",
      imageOne: require("../../assets/images/JuanBlanco1.jpg"),
      imageTwo: require("../../assets/images/JuanBlanco2.jpg"),
      linkedin: "https://www.linkedin.com/in/juanarede/",
      gitHub: "https://github.com/juanarede",
    },
  ];

  return (
    <Stack
      className="about-opacity-bg"
      justifyContent="center"
      sx={{
        alignItems: "center",
      }}
      direction="row"
      spacing={2}
      flexWrap="wrap"
    >
      {devList.map((item) => {
        return <MyAvatar dev={item} key={item.name} />;
      })}
    </Stack>
  );
};

const MyAvatar = ({ dev }) => {
  const [hover, setHover] = useState(false);

  const avatarBoxStyle = {
    width: { md: "150px", sm: "120px", xs: "75px" },
    height: { md: "150px", sm: "120px", xs: "75px" },
  };
  const avatarStyles = {
    height: "100%",
    width: "100%",
  };
  const linkStyles = {
    height: "2rem",
    transition: "0.2s",
    color: "white",
    p: 0,
    px: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ":hover": { transition: "0.2s", transform: "translateY(-5px)" },
  };
  return (
    <Box sx={{ ...avatarBoxStyle, cursor: "pointer" }}>
      <Avatar
        src={hover ? dev.imageTwo : dev.imageOne}
        sx={avatarStyles}
        alt={`${dev.name}`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />
      <Box pt="10px">
        <Typography color="white" fontWeight="600">
          {dev.name}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            aria-label="LinkedIn"
            sx={linkStyles}
            onClick={() => {
              window.open(dev.linkedin, "_blank");
            }}
          >
            <LinkedIn className="logoLinkedin" />
          </IconButton>
          <IconButton
            aria-label="GitHub"
            sx={linkStyles}
            onClick={() => {
              window.open(dev.gitHub, "_blank");
            }}
          >
            <GitHub className="logoGithub" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default DevsAvatars;
