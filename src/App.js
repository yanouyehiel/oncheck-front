import { Route, Routes, BrowserRouter } from "react-router-dom";
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
import Profile from "./pages/Profile";
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated);
  
  return (
    <Auth.Provider value={{isAuthenticated, setIsAuthenticated}}>
      <BrowserRouter>
        <Routes>
          {/* <AuthenticatedRoute path="/my-comparaisons" element={<MyComparaisons />} />
          <AuthenticatedRoute path="/profile" element={<Profile />} /> */}
          {isAuthenticated ?
            <>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/category/:id" element={<Category />}></Route>
              <Route exact path="/categories" element={<Category />}></Route>
              <Route exact path="/product/:id" element={<Product />}></Route>
              <Route exact path="/product" element={<Product />}></Route>
              <Route exact path="/search/:keyword" element={<Search />}></Route>
              <Route exact path="/search" element={<Search />}></Route>
              <Route exact path="/about-us" element={<About />}></Route>
              <Route exact path="/help" element={<Help />}></Route>
              <Route exact path="/contact-us" element={<ContactUs />}></Route>
              <Route exact path="/privacy" element={<Privacy />}></Route>
              <Route exact path="/faqs" element={<Faqs />}></Route>
              <Route exact path="/terms" element={<Terms />}></Route>
              <Route exact path="/profile" element={<Profile />}></Route>  
            </>
            :
            <>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/category/:id" element={<Category />}></Route>
              <Route exact path="/categories" element={<Category />}></Route>
              <Route exact path="/product/:id" element={<Product />}></Route>
              <Route exact path="/product" element={<Product />}></Route>
              <Route exact path="/search/:keyword" element={<Search />}></Route>
              <Route exact path="/search" element={<Search />}></Route>
              <Route exact path="/about-us" element={<About />}></Route>
              <Route exact path="/help" element={<Help />}></Route>
              <Route exact path="/contact-us" element={<ContactUs />}></Route>
              <Route exact path="/privacy" element={<Privacy />}></Route>
              <Route exact path="/faqs" element={<Faqs />}></Route>
              <Route exact path="/terms" element={<Terms />}></Route>
              <Route exact path="/profile" element={<Profile />}></Route>
            </>
          }
          <Route exact path="/*" element={<NotFound />}></Route>
          <Route exact path="/acces-marchand/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Auth.Provider>
  );
}

export default App;
