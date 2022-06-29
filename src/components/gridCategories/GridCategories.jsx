import { Box, Button, Grid, Typography } from "@mui/material";
import "./gridCategories.css";

const GridCategories = () => {
  const categories = [
    {
      name: "Effects",
      imageName: "pedals.png",
    },
    {
      name: "Acoustic",
      imageName: "acoustic.png",
    },
    {
      name: "Electric",
      imageName: "guitar.png",
    },
    {
      name: "Bass",
      imageName: "bass.png",
    },
    {
      name: "Amps",
      imageName: "amps.png",
    },
    {
      name: "Accessories",
      imageName: "accessories.png",
    },
  ];
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid container sx={{ width: "100%" }} justifyContent="space-between">
        {categories.map((category, index) => {
          let image = require(`../../assets/images/${category.imageName}`);
          return (
            <Grid
              item
              sx={{
                width: { xs: "100%", sm: "49%", md: "33%" },
                marginBottom: { xs: "10px", sm: "18px", md: "5px" },
              }}
              key={index}
            >
              <CategoryButton imgUri={image} categoryName={category.name} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

const CategoryButton = ({ imgUri, categoryName }) => {
  return (
    <Box>
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Box
          sx={{
            height: "175px",
            width: "100%",
          }}
        >
          <img srcSet={imgUri} alt="" className="img_back_button" />
        </Box>
        <Box
          position="absolute"
          display="flex"
          justifyContent="center"
          alignContent="center"
          width="100%"
          height="100%"
          sx={{
            transition: "0.3s",
            background: "rgb(191,136,50, 0.22)",
            backdropFilter: "blur(5px)",

            ":hover": {
              backdropFilter: "blur(0px)",
              transition: "0.3s",
              background: "transparent",
            },
          }}
        >
          <Button
            fullWidth
            sx={{
              transition: "0.3s",
              color: "white",
              ":hover": {
                transition: "0.3s",
                color: "#f2dbb8",
                transform: "translateY(-5px)",
              },
            }}
          >
            <Typography variant="button" fontWeight="700" fontSize="25px">
              {categoryName}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GridCategories;
