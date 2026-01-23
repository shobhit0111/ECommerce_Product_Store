import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import "../css/Cart.css"

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalAmount } =
    useCart();

  if (cart.length === 0) {
    return <h2>Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-page">
      <Header />
      <h2>My Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="details">
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <div className="qty-controls">
              <button onClick={() => decreaseQty(item.id)}>−</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <button
            className="delete-btn"
            onClick={() => removeFromCart(item.id)}
          >
            ✕
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total: ₹{totalAmount}</h3>
        <button className="place-order">Place Order</button>
      </div>
    </div>
  );
}
