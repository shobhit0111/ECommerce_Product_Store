import "../css/FashionSlider.css";

const fashionImages = [
  "/Fashion/photo1.jpg",
  "/Fashion/photo2.jpg",
  "/Fashion/photo3.jpg",
  "/Fashion/photo4.jpg",
  "/Fashion/photo5.jpg",
  "/Fashion/photo6.jpg",
  "/Fashion/photo7.jpg",
  "/Fashion/photo8.jpg",
  "/Fashion/photo9.jpg",
  "/Fashion/photo10.jpg",
  "/Fashion/photo11.jpg",
  "/Fashion/photo12.jpg",
];

export default function FashionSlider() {
  return (
    <section className="fashion-slider">
      <div className="slider-track">
        {/* duplicate images for seamless loop */}
        {[...fashionImages, ...fashionImages].map((img, i) => (
          <div className="slide" key={i}>
            <img src={img} alt={`fashion-${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
