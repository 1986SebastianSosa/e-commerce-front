import { Skeleton, Grid } from "@mui/material";

const LoadingSkeleton = () => {
  const skeletonStyle = {
    backgroundColor: "rgb(68,68,68, 0.22)",
    borderRadius: "15px",
  };
  return (
    <Grid container justifyContent="center" spacing={2} marginTop={1}>
      <Grid item lg="auto">
        <Skeleton
          sx={skeletonStyle}
          variant="rectangular"
          width={176}
          height={272}
        />
      </Grid>
      <Grid item lg="auto">
        <Skeleton
          sx={skeletonStyle}
          variant="rectangular"
          width={176}
          height={272}
        />
      </Grid>
      <Grid item lg="auto">
        <Skeleton
          sx={skeletonStyle}
          variant="rectangular"
          width={176}
          height={272}
        />
      </Grid>
      <Grid item lg="auto">
        <Skeleton
          sx={skeletonStyle}
          variant="rectangular"
          width={176}
          height={272}
        />
      </Grid>
      <Grid item lg="auto">
        <Skeleton
          sx={skeletonStyle}
          variant="rectangular"
          width={176}
          height={272}
        />
      </Grid>
    </Grid>
  );
};

export default LoadingSkeleton;
