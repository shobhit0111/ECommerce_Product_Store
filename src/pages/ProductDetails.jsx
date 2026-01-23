import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import "../css/ProductDetails.css";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, isInCart } = useCart();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("");

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const isFashion =
    product.category?.name === "Clothes" ||
    product.category?.name === "Shoes";

  const sizes = isFashion ? ["S", "M", "L", "XL"] : ["Standard"];

  return (
    <>
      <Header />
      <div className="product-detail">
        <div className="image-section">
          <img src={product.images?.[0]} alt={product.title} />
        </div>

        <div className="info-section">
          <h2>{product.title}</h2>
          <p className="product-id">Product ID: #{product.id}</p>

          <div className="rating">⭐ {4.2} / 5</div>

          <h3 className="price">₹{product.price}</h3>

          {/* SIZE */}
          <div className="sizes">
            <p>Size:</p>
            {sizes.map((s) => (
              <button
                key={s}
                className={size === s ? "active" : ""}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          {/* DESCRIPTION */}
          <ul className="description">
            {isFashion ? (
              <>
                <li>Premium quality fabric for everyday comfort</li>
                <li>Breathable, lightweight & skin-friendly material</li>
                <li>Perfect for casual & semi-formal occasions</li>
                <li>Easy to wash and long-lasting color</li>
              </>
            ) : (
              <>
                <li>High-performance build with modern design</li>
                <li>Energy efficient & durable construction</li>
                <li>User-friendly controls and smooth experience</li>
                <li>Ideal for daily use and long-term reliability</li>
              </>
            )}
          </ul>

          <button
            className="add-to-cart"
            disabled={isInCart(product.id)}
            onClick={() => addToCart(product)}
          >
            {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
}
