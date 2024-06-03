
import "../navbar/navbar.css";
import { Navbar, Nav } from 'react-bootstrap';

export const NavbarComponent =()=> {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="mx-5" href="#home">
        <img
          src={"/assets/logo/logo-boda-navbar.png"}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle className="mx-5" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto mx-5">
          <Nav.Link className="mx-3" href="#location">Ubicación</Nav.Link>
          <Nav.Link className="mx-3" href="#dress-code">Dress Code</Nav.Link>
          <Nav.Link className="mx-3" href="#details">Detalles</Nav.Link>
          <Nav.Link className="mx-3" href="#confirm">Confirmar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
