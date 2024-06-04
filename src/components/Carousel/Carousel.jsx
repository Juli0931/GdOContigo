import { useState, useEffect, useCallback } from "react";
import BannerImg1 from "../../assets/BannerImg1.png";
import BannerImg2 from "../../assets/BannerImg2.png";
import BannerImg3 from "../../assets/BannerImg3.png";
import Banner1 from "../../assets/bannerMobile1.svg";
import Banner2 from "../../assets/bannerMobile2.svg";
import Banner3 from "../../assets/bannerMobile3.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.css";

export function Carousel() {
  const largeScreenImages = [BannerImg1, BannerImg2, BannerImg3];
  const smallScreenImages = [Banner1, Banner2, Banner3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [BannerImg, setBannerImg] = useState(
    window.innerWidth <= 768 ? smallScreenImages : largeScreenImages
  );

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BannerImg.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? BannerImg.length - 1 : prevIndex - 1
    );
  };

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 768) {
      setBannerImg(smallScreenImages);
    } else {
      setBannerImg(largeScreenImages);
    }
  }, [largeScreenImages, smallScreenImages]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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
