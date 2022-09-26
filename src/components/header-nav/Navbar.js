import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <>
      <Nav className="  MainNavbarColor navbar navbar-expand-lg navbar-light " >
        <div className="container-fluid">

          <section className="MainNavbarBrand"> </section>

          <Nav.Link href="#" className=" navbar-brand " width="1400" ></Nav.Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" >
              <Nav.Item>
                <Link to="/" className="fontTitles MainNavbarFontSize MainNavbarAside " >Inicio</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/habitaciones" className="fontTitles MainNavbarFontSize">Servicios</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/servicios" className="fontTitles MainNavbarFontSize" >Testimonios</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/eventos" className="fontTitles MainNavbarFontSize">Contáctenos</Link>
              </Nav.Item>
              
              
            </ul>
          </div>
        </div>
      </Nav>
    </>


  );
}

export default Navbar;