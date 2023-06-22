import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Help from "./pages/Help";
import ContactUs from "./pages/ContactUs";
import Privacy from "./pages/Privacy";
import Faqs from "./pages/Faqs";
import Terms from "./pages/Terms";
import Search from "./pages/Search";
import { hasAuthenticated } from "./services/AuthApi";
import { useState } from "react";
import Auth from "./contexts/Auth";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import MyComparaisons from "./pages/MyComparaisons";
import Profile from "./pages/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  
  return (
    <Auth.Provider value={{isAuthenticated, setIsAuthenticated}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/category/:id" element={<Category />}></Route>
          <Route path="/categories" element={<Category />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/search/:keyword" element={<Search />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/my-comparaisons" element={<MyComparaisons />}></Route>
          {/* <AuthenticatedRoute path="/my-comparaisons" element={MyComparaisons} />
          <AuthenticatedRoute path="/profile" element={Profile} /> */}
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/acces-marchand/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Auth.Provider>
  );
}

export default App;
