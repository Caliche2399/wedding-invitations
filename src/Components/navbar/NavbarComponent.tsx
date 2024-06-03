
import "../navbar/navbar.css";
import { Navbar, Nav } from 'react-bootstrap';

export const NavbarComponent =()=> {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="mx-5" href="#home">
        <img
          src={"/assets/logo/logo-boda-navbar.png"}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="nav-link-active">Home</Nav.Link>
          <Nav.Link href="#shop">Shop</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
