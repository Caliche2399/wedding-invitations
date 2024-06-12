import {Col, Row} from "react-bootstrap";
import "../Styles/SegundaSeccion.css";
import {Fade} from "react-awesome-reveal";
import { CgCross } from "react-icons/cg";

export const SegundaSeccion = () =>{
    return (
        <Fade delay={300}>
            <div>
                <Row className="d-flex align-items-end">
                    <Col className="m-3 rounded rounded-5 d-flex align-items-end">
                        <img className="custom-img-segunda" src="/assets/backgroun-images/seccion-arriba.png"/>
                    </Col>
                </Row>
            </div>
            <div className="d-flex justify-content-center">
                <p className="text-center">
                    Con la gracias de Dios y la bendición de nuestros padres <br/> <br/>
                    Enma Paniagua Dieguez <br/>
                    <CgCross/>Cesar Augusto Aguilar Donis <br/>
                    <span>(Padres del novio )</span> <br/><br/>
                    Yajaira Yanira Torres Salazar <br/>
                    Fredy Fernando Cardoza Morales <br/>
                    <span>(Padres de la novia)</span> <br/><br/><br/>
                    Ahora, pues, permanecen estas tres virtudes: la fe, la esperanza y el amor. <br/>
                    Pero la más excelente de ellas es el amor <br/>
                    (1 Corintios 13:13)
                </p>
            </div>
            <div>
                <Row>
                    <Col className="m-3 rounded rounded-5">
                        <img src="/assets/backgroun-images/seccion-abajo.png"/>
                    </Col>
                </Row>
            </div>
        </Fade>
    );
}

