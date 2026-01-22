import { useEffect, useState, useRef } from "react";
import ProductCard from "./components/ProductCard";
import Skeleton from "./components/Skeleton";
import EmptyState from "./components/EmptyState";
import "./App.css";
import FashionBackground from "./components/FashionBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FashionSlider from "./components/FashionSlider";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("womens-dresses");
  const productsRef = useRef(null);
  const handleCategoryClick = (cat) => {
    setCategory(cat);

    setTimeout(() => {
      productsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  useEffect(() => {
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  fetch(`${VITE_API_BASE_URL}/products/category/${category}?limit=30`)
    .then((res) => res.json())
    .then((data) => {
      const sanitizedProducts = data.products.map((item) => ({
        id: item.id,
        name: item.title,
        price: item.price,
        oldPrice: item.price + Math.floor(Math.random() * 50),
        inStock: item.stock > 0,
        image: item.images?.[0] || item.thumbnail,
        isNew: Math.random() > 0.5,
        discount: Math.floor(Math.random() * 10) + 1,
      }));

      setItems(sanitizedProducts);
      setLoading(false);
    })
    .catch(() => {
      setItems([]);
      setLoading(false);
    });
}, [category]);


  return (
    <>
      <div className="app-content">
        <FashionBackground />
        <Header />

        {/* Hero Section - Full Width */}
        {/* Hero Section - Full Width */}
        <div className="hero-section">
          <div
            className="hero-card women"
            onClick={() => handleCategoryClick("womens-dresses")}
            style={{
              backgroundImage:
                "url('https://htmldemo.net/reid/reid/assets/img/bg/banner29.jpg')",
            }}
          >
            <span>#For Women</span>
            <p>Sale 10% Off Almost Everything</p>
          </div>

          <div
            className="hero-card accessories"
            onClick={() => handleCategoryClick("womens-bags")}
            style={{
              backgroundImage:
                "url('https://htmldemo.net/reid/reid/assets/img/bg/banner30.jpg')",
            }}
          >
            <span>#Accessories</span>
            <p>Sale 40% Off Almost Everything</p>
          </div>

          <div
            className="hero-card men"
            onClick={() => handleCategoryClick("mens-shirts")}
            style={{
              backgroundImage:
                "url('https://htmldemo.net/reid/reid/assets/img/bg/banner31.jpg')",
            }}
          >
            <span>#For Men</span>
            <p>Big Sale of Final Sale Item. Caught in the moment! </p>
          </div>
        </div>

        {/* Products Section - Constrained Width */}
        <div className="content-container" ref={productsRef}>
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Contemporary, minimal and modern designs
          </p>

          {loading && (
            <div className="grid">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} />
              ))}
            </div>
          )}

          {!loading && items.length === 0 && <EmptyState />}

          {!loading && items.length > 0 && (
            <div className="grid">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
        <FashionSlider />
        <Footer />
      </div>
    </>
  );
}
