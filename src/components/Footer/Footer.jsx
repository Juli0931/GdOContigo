import './Footer.css';
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="src\assets\Footer_logos.png" alt="Logo" className="footer-logo" />
        <nav className="footer-nav">
          <ul>
            <li><a href="#">Términos de servicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Contáctanos</a></li>
            <li><a href="#">Política de provacidad</a></li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="https://twitter.com/GdO_Oficial_"><img src="src\assets\Footer_X.png" alt="X" /></a>
          <a href="https://www.linkedin.com/company/gases-de-occidente-gdo/"><img src="src\assets\Footer_Linkedin.png" alt="Linkedin" /></a>
          <a href="https://www.instagram.com/gdo.oficial_?igsh=MWloczd4Nms4NDIxaA=="><img src="src\assets\Footer_Instagram.png" alt="Instagram" /></a>
          <a href="https://www.youtube.com/@gasesdeoccidentesaes"><img src="src\assets\Footer_Youtube.png" alt="Youtube" /></a>
        <p className="footer-text">Copyright (C) 2018. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
