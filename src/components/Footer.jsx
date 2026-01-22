// components/Footer.jsx
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Returns</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Extras</h4>
          <ul>
            <li>Brands</li>
            <li>Gift Certificates</li>
            <li>Affiliate</li>
            <li>Specials</li>
            <li>Site Map</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Address: Your address goes here</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: support@productstore.com</p>

          <div className="social-icons">
            <span>🐦</span>
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
          </div>
        </div>

        <div className="footer-col newsletter">
          <h4>Join Our Newsletter</h4>
          <p>
            Get exclusive offers, fashion updates and early access to sales.
          </p>

          <input type="email" placeholder="Enter your email address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Product Store. Made with ❤️ by You
        </p>
        <div className="footer-links">
          <span>Order History</span>
          <span>Wishlist</span>
          <span>Newsletter</span>
        </div>
      </div>
    </footer>
  );
}
