import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();

  const added = isInCart(product.id);

  return (
    <div className="product-card">
      {product.isNew && <span className="label new">New</span>}
      {product.discount && (
        <span className="label discount">-{product.discount}%</span>
      )}

      <div
        className="product-image"
        style={{ backgroundImage: `url(${product.image})` }}
      />

      <h3>{product.name}</h3>

      <p className="price">
        ₹{product.price}
        {product.oldPrice && (
          <span className="old-price">₹{product.oldPrice}</span>
        )}
      </p>

      <button
        className={added ? "added-btn" : ""}
        disabled={added}
        onClick={() => addToCart(product)}
      >
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
