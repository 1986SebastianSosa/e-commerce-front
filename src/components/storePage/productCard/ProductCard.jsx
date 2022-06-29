import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  CardContent,
  Divider,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, display }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product._id}`, { replace: false });
  };

  return (
    <Grid item xs={display === "module" ? "auto" : 12}>
      {display === "module" ? (
        <ModuleView product={product} handleNavigate={handleNavigate} />
      ) : (
        <>
          <ListView product={product} handleNavigate={handleNavigate} />
        </>
      )}
    </Grid>
  );
};

const ListView = ({ product, handleNavigate }) => {
  const { name, imgUrl, price, id, description } = product;
  const theme = useTheme();

  const cardStyle = {
    position: "relative",
    display: "flex",
    cursor: "pointer",
    transition: "0.2s",
    padding: "0.5rem",
    borderRadius: "15px",
    ":hover": {
      backgroundColor: "white",
      transition: "0.2s",
      transform: "translateY(-5px)",
      boxShadow: "2px 2px 5px 5px rgb(0,0,0,0.22)",
      border: `thick double ${theme.palette.primary.main}`,
    },
  };

  return (
    <>
      <Grid
        p={5}
        m={1}
        container
        onClick={handleNavigate}
        elevation={1}
        sx={{
          ...cardStyle,
          boxShadow:
            " 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          width: "100%",
          height: "180px",
          backgroundColor: "white",
        }}
      >
        <Grid item xs={3} sx={{ height: "100%" }}>
          <img
            srcSet={imgUrl}
            alt={name}
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Grid>
        <Grid
          item
          px={5}
          xs={9}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography
            color="primary"
            fontWeight="500"
            variant="h6"
            textAlign="start"
            sx={{ lineHeight: "1.2" }}
          >
            {name}
          </Typography>
          <Grid
            item
            display="flex"
            sx={{ height: "100%" }}
            alignItems="flex-end"
          >
            <Grid item xs={10}>
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  height: "4rem",
                }}
                component="p"
                variant="subtitle2"
                align="left"
                color="primary"
              >
                {description.substring(0, 140)}...
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontWeight="500"
                color="primary"
              >{`$ ${price}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const ModuleView = ({ product, handleNavigate }) => {
  const theme = useTheme();
  const { name, imgUrl, price, id } = product;

  const cardStyle = {
    marginBottom: "2rem",
    display: "flex",
    cursor: "pointer",
    transition: "0.2s",
    padding: "0.5rem",
    borderRadius: "15px",
    border: "thick double white",
    ":hover": {
      backgroundColor: "white",
      transition: "0.2s",
      transform: "translateY(-5px)",
      boxShadow: "2px 2px 5px 1px rgb(0,0,0,0.22)",
      border: `thick double ${theme.palette.primary.main}`,
    },
  };

  return (
    <Card
      onClick={handleNavigate}
      sx={{
        ...cardStyle,
        display: "block",
        width: "200px",
        backgroundColor: "white",
      }}
    >
      <CardMedia p={1} sx={{ height: "170px" }}>
        <img
          srcSet={imgUrl}
          alt={name}
          style={{
            borderRadius: "5px",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </CardMedia>
      <CardHeader
        sx={{ paddingY: "0" }}
        title={
          <Typography
            fontWeight="700"
            variant="body1"
            textAlign="center"
            color="primary"
          >
            {name.substring(0, 14)}
          </Typography>
        }
        subheader={
          <Typography
            sx={{ width: "100%" }}
            color="primary"
            fontWeight="500"
            variant="subtitle2"
          >{`U$S ${price}`}</Typography>
        }
      />
    </Card>
  );
};

export default ProductCard;
