import { Container, Row, Col, Button } from 'react-bootstrap';
import {SeccionPrincipal} from "./Components/SeccionPrincipal.tsx";

function WeddingInvitation() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <SeccionPrincipal/>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <img src="imagen-de-la-pareja.jpg" alt="Imagen de la pareja" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <h2>Detalles de la boda</h2>
          <ul>
            <li>Fecha: 12 de agosto de 2024</li>
            <li>Hora: 3:00 pm</li>
            <li>Lugar: Iglesia de San Juan</li>
          </ul>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h2>Regalos</h2>
          <p>Si deseas hacernos un regalo, puedes hacerlo a través de nuestra página de regalos.</p>
          <Button variant="secondary">Ver regalos</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default WeddingInvitation;