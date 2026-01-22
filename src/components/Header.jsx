// import React, { useState, useEffect, useRef } from "react";
// import "../css/Header.css";
// import { useCart } from "../context/CartContext";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [openCart, setOpenCart] = useState(false);
//   const cartRef = useRef(null);

//   const { cartItems, totalItems, removeFromCart } = useCart();

//   // Sticky header on scroll
//   useEffect(() => {
//     const onScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Close cart when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (cartRef.current && !cartRef.current.contains(e.target)) {
//         setOpenCart(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <header className={`header ${isScrolled ? "scrolled" : ""}`}>
//       {/* Left */}
//       <div className="header-left">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="search-input"
//         />
//       </div>

//       {/* Center */}
//       <div className="header-center">
//         <h1>Product Store</h1>
//       </div>

//       {/* Right */}
//       <div className="header-right" ref={cartRef}>
//         <button className="login-btn">Login / SignUp</button>

//         {/* Cart Button */}
//         <button
//           className="cart-btn"
//           onClick={() => setOpenCart((prev) => !prev)}
//         >
//           🛒
//           {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
//         </button>

//         {/* Cart Dropdown */}
//         {openCart && (
//           <div className="cart-dropdown">
//             <h4>My Cart</h4>

//             {cartItems.length === 0 && (
//               <p className="empty-cart">Cart is empty</p>
//             )}

//             {cartItems.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.name} />
//                 <div>
//                   <p className="cart-name">{item.name}</p>
//                   <p className="cart-price">
//                     ₹{item.price} × {item.qty}
//                   </p>
//                 </div>
//                 <button
//                   className="remove-btn"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}

//             {cartItems.length > 0 && (
//               <button className="checkout-btn">Checkout</button>
//             )}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import "../css/Header.css";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const cartRef = useRef(null);

  const { cartItems, totalItems, removeFromCart } = useCart();

  // Sticky header
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close cart when clicking outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setOpenCart(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      {/* Left */}
      <div className="header-left">
        <input className="search-input" placeholder="Search products..." />
      </div>

      {/* Center */}
      <div className="header-center">
        <h1>Product Store</h1>
      </div>

      {/* Right */}
      <div className="header-right" ref={cartRef}>
        <button className="login-btn">Login / SignUp</button>

        {/* Cart Button */}
        <button className="cart-btn" onClick={() => setOpenCart(!openCart)}>
          🛒
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </button>

        {/* Cart Dropdown */}
        {openCart && (
          <div className="cart-dropdown">
            <h4>My Cart</h4>

            {cartItems.length === 0 && (
              <p className="empty-cart">Your cart is empty</p>
            )}

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <p className="cart-name">{item.name}</p>
                  <p className="cart-price">
                    ₹{item.price} × {item.qty}
                  </p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}

            {cartItems.length > 0 && (
              <button className="checkout-btn">Checkout</button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
