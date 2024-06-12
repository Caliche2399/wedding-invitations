import {Col, Row} from "react-bootstrap";
import "../Styles/SegundaSeccion.css";
import {Fade} from "react-awesome-reveal";
import { CgCross } from "react-icons/cg";
import { TfiLayoutLineSolid } from "react-icons/tfi";

export const SegundaSeccion = () =>{
    return (
        <Fade delay={300}>
            <div>
                <Row className="d-flex align-items-end">
                    <Col xs={12} sm={10} md={8} lg={12} xl={12} className="m-3 d-flex align-items-end">
                        <img className="custom-img-segunda" src="/assets/backgroun-images/seccion-arriba.png"/>
                    </Col>
                </Row>
            </div>
            <div className="d-flex justify-content-center py-5">
                <p className="text-center custom-parragraph">
                    Con la gracia de Dios y la bendición de nuestros padres <br/> <br/>
                    Enma Paniagua Dieguez <br/>
                    Cesar Augusto Aguilar Donis <CgCross/><br/><br/>
                    <TfiLayoutLineSolid/> <br/><br/>
                    Yajaira Yanira Torres Salazar <br/>
                    Fredy Fernando Cardoza Morales <br/><br/><br/>
                    Ahora, pues, permanecen estas tres virtudes: <br/>
                    la fe, la esperanza y el amor. <br/>
                    Pero la más excelente de ellas es el amor <br/>
                    (1 Corintios 13:13)
                </p>
            </div>
            <div>
                <Row>
                    <Col className="m-3 rounded rounded-5">
                        <img className="custom-img-abajo" src="/assets/backgroun-images/seccion-abajo.png"/>
                    </Col>
                </Row>
            </div>
        </Fade>
    );
}

