import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* =====================
     STATE (Persisted)
  ===================== */
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("fashionStoreCart");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("❌ Cart load error:", err);
      return [];
    }
  });

  /* =====================
     PERSIST TO STORAGE
  ===================== */
  useEffect(() => {
    localStorage.setItem("fashionStoreCart", JSON.stringify(cart));
  }, [cart]);

  /* =====================
     ACTIONS
  ===================== */

  // Add product or increase qty
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find(
        (item) => String(item.id) === String(product.id),
      );

      if (exists) {
        return prev.map((item) =>
          String(item.id) === String(product.id)
            ? { ...item, qty: item.qty + 1 }
            : item,
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        String(item.id) === String(id) ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  // Decrease quantity (auto remove if qty = 0)
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          String(item.id) === String(id)
            ? { ...item, qty: item.qty - 1 }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  // Remove item completely
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => String(item.id) !== String(id)));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("fashionStoreCart");
  };

  // Check if product already in cart
  const isInCart = (id) => {
    return cart.some((item) => String(item.id) === String(id));
  };

  /* =====================
     DERIVED VALUES
  ===================== */

  // Total quantity (for badge)
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Total amount (for checkout)
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  /* =====================
     PROVIDER
  ===================== */
  return (
    <CartContext.Provider
      value={{
        /* state */
        cart,

        /* actions */
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,

        /* helpers */
        isInCart,

        /* derived */
        cartCount,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* =====================
   HOOK
===================== */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
