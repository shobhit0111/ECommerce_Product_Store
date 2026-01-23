//import { useEffect, useState, useRef } from "react";
// import ProductCard from "../components/ProductCard";
// import Skeleton from "../components/Skeleton";
// import EmptyState from "../components/EmptyState";
import "../css/Home.css";
import FashionBackground from "../components/FashionBackground";
import Header from "../components/Header";
import FashionSlider from "../components/FashionSlider";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

export default function Home() {
  //   const [items, setItems] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [category, setCategory] = useState("all");
  //   const [visibleCount, setVisibleCount] = useState(8); // 👈 NEW
  //   const productsRef = useRef(null);

  //   const CATEGORY_MAP = {
  //     women: 1, // clothes
  //     accessories: 4, // shoes
  //     men: 1, // clothes
  //     all: null,
  //   };

  //   const CATEGORY_LIMITS = {
  //     women: 8,
  //     accessories: 6,
  //     men: 8,
  //     all: 12,
  //   };
  //   const ALL_FASHION_CATEGORIES = [
  //     "womens-dresses",
  //     "womens-jewellery",
  //     "womens-bags",
  //     "mens-shirts",
  //     "mens-shoes",
  //   ];

  //   const handleCategoryClick = (cat) => {
  //     setCategory(cat);
  //     setVisibleCount(CATEGORY_LIMITS[cat] || 8);

  //     setTimeout(() => {
  //       productsRef.current?.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }, 100);
  //   };

  //   useEffect(() => {
  //     setLoading(true);
  //     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  //     const fetchProducts = async () => {
  //       try {
  //         let url = `${API_BASE_URL}/products?offset=0&limit=50`;

  //         if (category !== "all") {
  //           const categoryId = CATEGORY_MAP[category];
  //           url = `${API_BASE_URL}/products?categoryId=${categoryId}&offset=0&limit=30`;
  //         }

  //         const res = await fetch(url);
  //         const data = await res.json();

  //         setItems(
  //           data.map((item) => ({
  //             id: item.id,
  //             name: item.title,
  //             price: item.price,
  //             oldPrice: item.price + Math.floor(Math.random() * 50),
  //             inStock: true,
  //             image: item.images?.[0],
  //             isNew: Math.random() > 0.5,
  //             discount: Math.floor(Math.random() * 10) + 1,
  //           })),
  //         );
  //       } catch (err) {
  //         console.error(err);
  //         setItems([]);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchProducts();
  //   }, [category]);

  return (
    <div className="app-content">
      <FashionBackground />
      <Header />

      {/* HERO SECTION */}
      <div className="hero-section">
        <div
          className="hero-card women"
          //   onClick={() => handleCategoryClick("women")}
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
          //   onClick={() => handleCategoryClick("accessories")}
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
          //   onClick={() => handleCategoryClick("men")}
          style={{
            backgroundImage:
              "url('https://htmldemo.net/reid/reid/assets/img/bg/banner31.jpg')",
          }}
        >
          <span>#For Men</span>
          <p>Big Sale of Final Sale Item</p>
        </div>
      </div>
      <FashionSlider />
      <AboutUs />
      <Footer />
    </div>
  );
}
