import Button from 'react-bootstrap/Button';
import "../Styles/card-component.css"
import {Card, Col, Row} from "react-bootstrap";

export const CardComponent = () => {

    const handleGoogleMapClick = () => {
        window.location.href = `https://maps.app.goo.gl/6VwqTjfBhuN3TDS48`;
    }

    const handleReceptionGoogleMapClick = () => {
        window.location.href = `https://maps.app.goo.gl/wZy8brngqhfo4cME7`
    }

    const handleWazeClick = (latitude: number, longitude: number) => {
        window.location.href = `https://waze.com/ul?ll=${latitude},${longitude}`;
    }

    return (
        <Row id="location" className="d-flex justify-content-around mx-2 py-3">
            {/*Tarjeta para la misa */}
            <Col xs={12} md={6} lg={6} className="mb-3">
                <Card className="custom-card mx-5 rounded rounded-5">
                    <Card.Body>
                        <div className="text-center">
                            <img className="custom-img" src="/assets/images/iglesia2.png" alt="Logo"/>
                        </div>
                        <Card.Title className="text-center py-2">Ceremonia</Card.Title>

                        <Card.Text className="py-3 text-center ">
                            Iglesia Yurrita
                            <br/>
                            <br/>
                            14:00 - 15:00
                        </Card.Text>

                        <div className="d-flex justify-content-center">
                            <Button className="custom-button" onClick={() => handleGoogleMapClick()}>
                                <img src="/assets/logo/google-map.png" alt="Google Maps" />
                            </Button>

                            <Button className="custom-button" onClick={() => handleWazeClick(14.615716, -90.5144297)}>
                                <img src="/assets/logo/waze.png" alt="Waze" />
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            {/*Tarjeta para la fiesta*/}
            <Col xs={12}  md={6} lg={6} className="mb-3">
                <Card className="mx-5 custom-card rounded rounded-5">
                    <Card.Body>
                        <div className="text-center">
                            <img className="custom-img" src="/assets/images/recepcion.png" alt="Logo"/>
                        </div>
                        <Card.Title className="text-center py-2">Recepción</Card.Title>
                        <Card.Text className="py-3 text-center">
                            Arika Venue
                            <br/>
                            <br/>
                            18:00 - 23:00
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <Button className="custom-button" onClick={() => handleReceptionGoogleMapClick()}>
                                <img src="/assets/logo/google-map.png" alt="Google Maps"/>
                            </Button>

                            <Button className="custom-button" onClick={() => handleWazeClick(14.5435991, -90.4247486)}>
                                <img src="/assets/logo/waze.png" alt="Waze"/>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}