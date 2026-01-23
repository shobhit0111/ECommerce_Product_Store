import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Products.css";
import Headers from "../components/Header";
import FashionBackground from "../components/FashionBackground";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    let temp = [...products];

    // Category filter
    // if (category !== "all") {
    //   temp = temp.filter((p) => p.category?.name?.toLowerCase() === category);
    // }
    if (category !== "all") {
      temp = temp.filter(
        (p) => p.category?.name?.toLowerCase() === category.toLowerCase(),
      );
    }

    // Sorting
    if (sort === "low-high") {
      temp.sort((a, b) => a.price - b.price);
    }
    if (sort === "high-low") {
      temp.sort((a, b) => b.price - a.price);
    }
    if (sort === "discount") {
      temp = temp.filter((p) => p.price < 100); // example logic
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFiltered(temp);
  }, [sort, category, products]);

  return (
    <div className="products-page">
      <FashionBackground />
      <div className="products-bg-overlay" />
      <Headers />
      <h2>All Products</h2>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="filters">
          <button
            className={sort === "low-high" ? "active" : ""}
            onClick={() => setSort("low-high")}
          >
            Low → High
          </button>

          <button
            className={sort === "high-low" ? "active" : ""}
            onClick={() => setSort("high-low")}
          >
            High → Low
          </button>

          <button
            className={sort === "discount" ? "active" : ""}
            onClick={() => setSort("discount")}
          >
            Under ₹100
          </button>
        </div>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="Clothes">Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>

      {/* PRODUCTS GRID */}
      <div className="products-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
