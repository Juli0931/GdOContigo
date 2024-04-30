import { Carousel, Shortcut, HistorySection, ServicesCarousel, Footer, NavBar,Questions } from "../../components";
import "./Home.css";

export function Home() {
  return (
    <div>
        <NavBar></NavBar>
        <Carousel></Carousel>
        <Shortcut></Shortcut>
        <HistorySection></HistorySection>
        <ServicesCarousel></ServicesCarousel>
        <Questions></Questions>
        <Footer></Footer>
    </div>
  );
}