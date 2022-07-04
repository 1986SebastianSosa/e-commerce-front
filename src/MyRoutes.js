import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/admin/dashboard/DashBoard";
import GridCategories from "./components/gridCategories/GridCategories";
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import ProductDetail from "./components/productDetail/ProductDetail";
import AboutUs from "./components/aboutUs/AboutUs";
import StorePage from "./components/storePage/StorePage";
import ProductCarousel from "./components/productDetail/ProductCarousel";
import AdminLogin from "./components/admin/login/AdminLogin";
import CheckOut from "./components/checkout/CheckOut";
import AddressForm from "./components/addressForm/AddressForm";
import ReviewForm from "./components/reviewForm/ReviewForm";
import PaymentForm from "./components/paymentForm/PaymentForm.jsx";
import ContactUs from "./components/ContactUs/ContactUs";
import PaymentConfirmation from "./components/PaymentConfirmation/paymentConfirmation";
import Profile from "./components/Profile/Profile";
import UserPage from "./components/userPage/UserPage";
import Welcome from "./components/login/Welcome";

const MyRoutes = ({ type }) => {
  if (type === "admin") {
    return (
      <Routes>
        <Route path="/admin/dashboard" element={<DashBoard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/categories" element={<GridCategories />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/productCarousel" element={<ProductCarousel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/addressForm" element={<AddressForm />} />
      <Route path="/reviewForm" element={<ReviewForm />} />
      <Route path="/paymentForm" element={<PaymentForm />} />
      <Route path="/paymentConfirmation" element={<PaymentConfirmation />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/userPage" element={<UserPage />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
};

export default MyRoutes;
