import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../css/ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const added = isInCart(product.id);

  /* ================= SAFE IMAGE ================= */
  const getSafeImage = (images) => {
    if (!Array.isArray(images)) return "/fallback.png";

    const validImage = images.find(
      (img) =>
        img &&
        !img.includes("placeimg.com") &&
        !img.includes("api.escuelajs.co"),
    );

    return validImage || "/fallback.png";
  };

  /* ================= ADD TO CART ================= */
  const handleAddToCart = (e) => {
    e.stopPropagation(); // ❗ prevent redirect

    if (added) return;

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: getSafeImage(product.images),
      category: product.category,
    });
  };

  /* ================= REDIRECT ================= */
  const goToDetails = () => {
    navigate(`/ProductDetails/${product.id}`);
  };

  return (
    <div className="product-card" onClick={goToDetails}>
      {product.isNew && <span className="label new">New</span>}
      {product.discount && (
        <span className="label discount">-{product.discount}%</span>
      )}

      {/* IMAGE */}
      <div
        className="product-image"
        style={{
          backgroundImage: `url(${getSafeImage(product.images)})`,
        }}
      />

      {/* TITLE */}
      <h3 className="product-title">{product.title}</h3>

      {/* PRICE */}
      <p className="price">
        ₹{product.price}
        {product.oldPrice && (
          <span className="old-price">₹{product.oldPrice}</span>
        )}
      </p>

      {/* BUTTON */}
      <button
        type="button"
        className={added ? "added-btn" : ""}
        onClick={handleAddToCart}
        disabled={added}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}
