import "../Styles/SeccionPrincipal.css";
import { Roll, Zoom} from "react-awesome-reveal";

export const SeccionPrincipal = () => {
  return (
      <>
          <div className="d-flex flex-column align-items-center justify-content-center">
              <img
                  className="custom-seccion-principal"
                  src="/assets/backgroun-images/fondo-seccion-1.png"
                  alt="Fondo de flores corintas"/>
          </div>
          <div className="custom-div-principal">
              <div className="overlay d-flex flex-column align-items-center justify-content-center">
                  <Roll duration={2500}>
                      <img
                          src="https://www.bodas502.com/wp-content/uploads/2023/02/rama_beige.png"/>
                  </Roll>

                  <Zoom duration={2500}>
                      <div>
                          <span className="d-block text-center custom-span">¡Nos Casamos!</span>
                    </div>
                    <h1 className="custom-heading-text text-center">
                      Melani <br/>
                      - & - <br/>
                      Carlos
                    </h1>
                  </Zoom>
                  <Roll duration={2500}>
                      <img className="custom-flower-image"
                           src="https://www.bodas502.com/wp-content/uploads/2023/02/rama_beige.png"/>
                  </Roll>
                  <div className="py-4">
                      <span className="d-block text-center custom-span">04 - OCT - 25</span>
                  </div>
              </div>
          </div>
      </>
  );
};
