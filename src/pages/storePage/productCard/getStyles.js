export const getStyle = (type, theme) => {
  if (type === "list") {
    return {
      width: "100%",
      position: "relative",
      display: "flex",
      cursor: "pointer",
      transition: "0.2s",
      padding: "0.5rem",
      borderRadius: "15px",
      border: `thick double ${theme.palette.primary.main}`,
      ":hover": {
        backgroundColor: "white",
        transition: "0.2s",
        transform: "translateY(-5px)",
        boxShadow: "2px 2px 5px 5px rgb(0,0,0,0.22)",
      },
    };
  } else if (type === "module") {
    return {
      height: "250px",
      width: "200px",
      marginBottom: "2rem",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      transition: "0.2s",
      padding: "0.5rem",
      borderRadius: "15px",
      border: `thick double ${theme.palette.primary.main}`,
      ":hover": {
        backgroundColor: "white",
        transition: "0.2s",
        transform: "translateY(-5px)",
        boxShadow: "2px 2px 5px 1px rgb(0,0,0,0.22)",
        border: `thick double ${theme.palette.primary.main}`,
      },
    };
  }
};
