import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}
