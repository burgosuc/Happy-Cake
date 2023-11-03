import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="danger">
      <Container className="justify-content-between">
        <section>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            🏡 Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            📒 Contacto
          </Link>
        </section>
        <Navbar.Brand href="/" className="text-white ms-3 text-decoration-none">
          Happy Cake 🍰
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Navigation;
