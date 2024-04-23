import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesImg1 from "../../assets/ServicesImg1.png";
import ServicesImg2 from "../../assets/ServicesImg2.png";
import ServicesImg3 from "../../assets/ServicesImg3.png";
import ServicesImg4 from "../../assets/ServicesImg4.png";
import ServicesImg5 from "../../assets/ServicesImg5.png";
import ServicesImg6 from "../../assets/ServicesImg6.png";
import "./ServicesCarousel.css";

export function ServicesCarousel() {
  const services = [
    {
      title: "Conexión al gas natural",
      image: ServicesImg1,
      className: "service-link",
    },
    {
      title: "Revisión periódica",
      image: ServicesImg2,
      className: "service-link",
    },
    {
      title: "Mantenimiento, adecuaciones y reparaciones",
      image: ServicesImg3,
      className: "service-link",
    },
    {
      title: "Cargo por conexión y disponibilidad del servicio",
      image: ServicesImg4,
      className: "service-link",
    },
    { title: "Industria", image: ServicesImg5, className: "service-link" },
    { title: "¡Conócelos todos!", image: ServicesImg6, className: "service-link" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="services-container">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className={`service-card`}>
            <img src={service.image} alt={service.title} />
            <div
              className="overlay"
              style={{
                backgroundColor:
                  index % 2 === 0
                    ? "rgba(0, 110, 181, 0.6)"
                    : "rgba(155, 171, 0, 0.6)",
              }}
            ></div>
            <h2>{service.title}</h2>
            {index !== services.length - 1 && (
              <a href={"#"} className="service-link">
                Conoce más
              </a>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
