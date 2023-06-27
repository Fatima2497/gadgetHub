import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from './pages/Forgotpassword'
import Signup from './pages/Signup'
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermandCondition from "./pages/TermandCondition";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { PrivateRoutes } from "./routing/PrivateRoutes";
import { OpenRoutes } from "./routing/OpenRoutes";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Error from "./pages/Error";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<PrivateRoutes> <Cart /> </PrivateRoutes>} />
            <Route path="order" element={<PrivateRoutes> <Order /> </PrivateRoutes>} />
            <Route path="profile" element={<PrivateRoutes> <Profile /> </PrivateRoutes>} />
            <Route path="compare" element={<CompareProduct />} />
            <Route path="wishlist" element={<PrivateRoutes> <Wishlist /> </PrivateRoutes>} />
            <Route path="login" element={<OpenRoutes> <Login /> </OpenRoutes>} />
            <Route path="checkout" element={<PrivateRoutes> <Checkout /> </PrivateRoutes>} />
            <Route path="forgotpassword" element={<OpenRoutes> <Forgotpassword /> </OpenRoutes>} />
            <Route path="signup" element={<OpenRoutes> <Signup /> </OpenRoutes>} />
            <Route path="reset-password/:token" element={<OpenRoutes> <ResetPassword /> </OpenRoutes>} />
            <Route path="privacy-policy" element={<OpenRoutes> <PrivacyPolicy /> </OpenRoutes>} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shiping-policy" element={<ShippingPolicy />} />
            <Route path="term-condition" element={<TermandCondition />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
