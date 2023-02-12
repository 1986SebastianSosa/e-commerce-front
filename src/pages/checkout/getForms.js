import AddressForm from "../../components/addressForm/AddressForm";
import PaymentConfirmation from "../../components/PaymentConfirmation/paymentConfirmation";
import PaymentForm from "../../components/paymentForm/PaymentForm";
import ReviewForm from "../../components/reviewForm/ReviewForm";

export const getForms = (
  step,
  setActiveStep,
  orderCreated,
  setOrderCreated
) => {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  switch (step) {
    case 0:
      return <AddressForm handleNext={handleNext} />;
    case 1:
      return <PaymentForm handleNext={handleNext} handleBack={handleBack} />;
    case 2:
      return (
        <ReviewForm
          handleNext={handleNext}
          handleBack={handleBack}
          setOrder={setOrderCreated}
        />
      );
    case 3:
      return <PaymentConfirmation order={orderCreated} />;
    default:
      return <h1>No more steps available</h1>;
  }
};
