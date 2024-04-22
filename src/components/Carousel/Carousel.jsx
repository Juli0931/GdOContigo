import { useState, useEffect } from "react";
import BannerImg1 from "../../assets/BannerImg1.png";
import BannerImg2 from "../../assets/BannerImg2.png";
import BannerImg3 from "../../assets/BannerImg3.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.css";

export function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const BannerImg = [BannerImg1, BannerImg2, BannerImg3];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BannerImg.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? BannerImg.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BannerImg.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [BannerImg]);

  return (
    <div className="carousel-container">
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <img
        src={BannerImg[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="carousel-image"
      />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
    </div>
  );
}
