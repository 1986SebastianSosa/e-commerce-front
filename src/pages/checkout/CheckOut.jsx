import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "@mui/material";
import { getForms } from "./getForms";
import "./checkout.css";

export default function CheckOut() {
  const [activeStep, setActiveStep] = useState(0);
  const [orderCreated, setOrderCreated] = useState({});

  const xs = useMediaQuery("(min-width:0)");
  const sm = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    "Shipping Address",
    "Payment Details",
    "Review your order",
    "Order Confirmation",
  ];

  return (
    <Container className="checkout">
      <Box
        sx={{
          margin: "auto",
          width: "100%",
          maxWidth: "800px",
          height: "100vh",
          maxHeight: "1000px",
          mt: "64px",
          mb: "64px",
          paddingTop: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Box width="100%" marginBottom="1rem" sx={{ flexShrink: 1 }}>
          <Stepper activeStep={activeStep}>
            {sm ? (
              steps.map((step) => {
                return (
                  <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                );
              })
            ) : (
              <Step key={activeStep}>
                <StepLabel>- {steps[activeStep]} </StepLabel>
              </Step>
            )}
          </Stepper>
        </Box>
        <Paper
          sx={{
            borderRadius: "15px",
            backgroundColor: "white",
            p: "2rem",
            width: "100%",
          }}
        >
          {getForms(activeStep, setActiveStep, orderCreated, setOrderCreated)}
        </Paper>
      </Box>
    </Container>
  );
}
