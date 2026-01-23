import "../css/AboutUs.css";

export default function AboutUs() {
  return (
    <section id="about-us" className="about-section">
      <h2 className="about-title">About Us</h2>

      <div className="about-cards">
        {/* Card 1 */}
        <div className="about-card left">
          <div className="about-content">
            <h3>Modern Fashion, Timeless Values</h3>
            <p>
              We are a contemporary fashion store delivering trend-driven
              collections with uncompromised quality. Our designs blend modern
              aesthetics with comfort, creating styles that last beyond
              seasons.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="about-card right">
          <div className="about-content">
            <h3>Ethics, Quality & Reliability</h3>
            <p>
              Every product is crafted responsibly using ethical sourcing and
              quality materials. We believe in transparent pricing, reliable
              delivery, and customer-first service you can always trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
