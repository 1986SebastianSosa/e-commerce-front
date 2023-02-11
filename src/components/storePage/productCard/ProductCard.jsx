import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getStyle } from "./getStyles";
import placeHolder from "../../../assets/images/img-placeholder.png";

const ProductCard = ({ product, display }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.slug}`, { replace: false });
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
  const listStyle = getStyle("list", theme);

  return (
    <>
      <Grid
        mb={2}
        container
        onClick={handleNavigate}
        elevation={1}
        sx={{
          ...listStyle,
          paddingX: "0px",
          boxShadow:
            " 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          width: "99%",
          height: "180px",
          backgroundColor: "white",
        }}
      >
        <Grid item xs={4} md={2} sx={{ height: "100%", p: { md: 2, xs: 1 } }}>
          {imgUrl[0] ? (
            <img
              srcSet={process.env.REACT_APP_IMAGE_HOSTING_URL + imgUrl[0]}
              alt={name}
              style={{
                borderRadius: "5px",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          ) : (
            <img
              src={placeHolder}
              alt=""
              style={{
                borderRadius: "5px",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          )}
        </Grid>
        <Grid
          item
          ps={2}
          md={10}
          xs={8}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography
            color={theme.palette.text.primary}
            fontWeight="500"
            variant="h6"
            textAlign="start"
            sx={{ lineHeight: "1.2" }}
          >
            {name}
          </Typography>
          <Grid item display="flex" sx={{ height: "100%" }} alignItems="center">
            <Grid item xs={10} sx={{ textAlign: "left" }}>
              <Typography
                sx={{
                  display: { xs: "none", md: "initial" },
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  height: "4rem",
                }}
                variant="p"
                color={theme.palette.text.primary}
              >
                {description.substring(0, 250)}...
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontFamily="number"
                fontSize="1.2rem"
                fontWeight="500"
                color={theme.palette.text.primary}
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
  const moduleStyle = getStyle("module", theme);

  return (
    <Card
      onClick={handleNavigate}
      sx={{
        ...moduleStyle,
        display: "block",
        width: "200px",
        backgroundColor: "white",
      }}
    >
      <CardMedia p={1} sx={{ height: "170px" }}>
        {imgUrl[0] ? (
          <img
            srcSet={process.env.REACT_APP_IMAGE_HOSTING_URL + imgUrl[0]}
            alt={name}
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        ) : (
          <img
            src={placeHolder}
            alt=""
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        )}
      </CardMedia>
      <CardHeader
        sx={{ paddingY: "0" }}
        title={
          <Typography
            fontWeight="700"
            variant="body1"
            textAlign="center"
            color={theme.palette.text.primary}
          >
            {name.substring(0, 14)}
          </Typography>
        }
        subheader={
          <Typography
            className="number"
            sx={{ width: "100%", color: theme.palette.text.primary }}
            color="primary"
            fontSize="1.2rem"
            fontWeight="500"
            variant="p"
          >{`U$S ${price}`}</Typography>
        }
      />
    </Card>
  );
};

export default ProductCard;
