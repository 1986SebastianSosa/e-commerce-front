import { Box, Button, CssBaseline, Grid, Typography } from "@mui/material";
import "./gridCategories.css";
import { useNavigate } from "react-router-dom";
import { categories } from "./categories";

const GridCategories = () => {
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
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Box>
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignContent="center"
          onClick={() =>
            navigate(
              `/store/${categoryName.replace(
                categoryName[0],
                categoryName[0].toLowerCase()
              )}`
            )
          }
          sx={{ "&:hover": { cursor: "pointer" } }}
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
            alignItems="center"
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
    </>
  );
};

export default GridCategories;
