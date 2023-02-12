export const getStyle = (type, theme) => {
  if (type === "list") {
    return {
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
  } else if (type === "module") {
    return {
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
  }
};
