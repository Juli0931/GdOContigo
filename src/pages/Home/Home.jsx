import { Carousel, Shortcut, HistorySection, ServicesCarousel, Footer } from "../../components";
import "./Home.css";
import Menu from "../../assets/Menu.svg";

export function Home() {
  return (
    <div>
        <img src={Menu} className="menu" />
        <Carousel></Carousel>
        <Shortcut></Shortcut>
        <HistorySection></HistorySection>
        <ServicesCarousel></ServicesCarousel>
        <Footer></Footer>
    </div>
  );
}