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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/search/:keyword" element={<Search />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
