import { Carousel, Shortcut, HistorySection, ServicesCarousel, Footer, NavBar } from "../../components";
import "./Home.css";

export function Home() {
  return (
    <div>
        <NavBar></NavBar>
        <Carousel></Carousel>
        <Shortcut></Shortcut>
        <HistorySection></HistorySection>
        <ServicesCarousel></ServicesCarousel>
        <Footer></Footer>
    </div>
  );
}