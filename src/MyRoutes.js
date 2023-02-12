import { Route, Routes } from "react-router-dom";
import GridCategories from "./components/gridCategories/GridCategories";
import HomePage from "./pages/homePage/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProductDetail from "./pages/productDetail/ProductDetail";
import AboutUs from "./pages/aboutUs/AboutUs";
import StorePage from "./pages/storePage/StorePage";
import CheckOut from "./pages/checkout/CheckOut";
import ContactUs from "./pages/contactUs/ContactUs";
import UserPage from "./pages/userPage/UserPage";
import Welcome from "./pages/login/Welcome";

const MyRoutes = ({ type }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/categories" element={<GridCategories />} />
      <Route path="/store/:categoryName" element={<StorePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/userPage/:id" element={<UserPage />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};

export default MyRoutes;
