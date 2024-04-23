import { Carousel, Shortcut, HistorySection, ServicesCarousel } from "../../components";
import "./Home.css";

export function Home() {
  return (
    <div>
        <h1>Aquí va el nav</h1>
        <div className="carousel-container">
            <Carousel></Carousel>
            <div className="shortcut-container">
                <Shortcut></Shortcut>
            </div>
        </div>
        <HistorySection></HistorySection>
        <ServicesCarousel></ServicesCarousel>
    </div>
  );
}