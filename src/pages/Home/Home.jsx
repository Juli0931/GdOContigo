import { Carousel, Shortcut, HistorySection, ServicesCarousel, Footer } from "../../components";
import "./Home.css";
import Menu from "../../assets/Menu.svg";

export function Home() {
  return (
    <div>
        <img src={Menu} className="menu" />
        <div className="carousel-container">
            <Carousel></Carousel>
            <div className="shortcut-container">
                <Shortcut></Shortcut>
            </div>
        </div>
        <HistorySection></HistorySection>
        <ServicesCarousel></ServicesCarousel>
        <Footer></Footer>
    </div>
  );
}