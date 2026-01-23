import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";
import { useCart } from "../context/CartContext";

export default function Header({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef(null);
  const navigate = useNavigate();

  const { cartCount } = useCart();

  /* ================= Sticky Header ================= */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= Close menu on outside click ================= */
  useEffect(() => {
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  /* ================= Menu Actions ================= */
  const goHome = () => {
    navigate("/");
    setOpenMenu(false);
  };

  const goProducts = () => {
    navigate("/Products");
    setOpenMenu(false);
  };

  const scrollToAbout = () => {
    document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        {/* LEFT */}
        <div className="header-left" ref={menuRef}>
          <button
            className={`menu-btn ${openMenu ? "active" : ""}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? "✕" : "☰"}
          </button>

          {openMenu && (
            <div className="menu-dropdown">
              <button onClick={goHome}>Home</button>
              <button onClick={goProducts}>Products</button>
              <button onClick={scrollToAbout}>About Us</button>
              <button onClick={scrollToContact}>Contact Us</button>
            </div>
          )}

          <input className="search-input" placeholder="Search products..." />
        </div>

        {/* CENTER */}
        <div className="header-center">
          <h1 onClick={goHome} style={{ cursor: "pointer" }}>
            Fashion Store
          </h1>

          <nav className="nav-menu">
            <button onClick={goHome}>Home</button>
            <button onClick={goProducts}>Products</button>
            <button onClick={scrollToAbout}>About Us</button>
            <button onClick={scrollToContact}>Contact Us</button>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="header-right">
          <button className="login-btn">Login / SignUp</button>

          {/* Cart Button → Redirect only */}
          <button className="cart-btn" onClick={() => navigate("/cart")}>
            🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </header>

      <main>{children}</main>
    </>
  );
}
