import "../Styles/SeccionPrincipal.css";
import {Zoom} from "react-awesome-reveal";

export const SeccionPrincipal = () => {
  return (
      <Zoom>
          <div className="custom-div-principal">
              <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                      className="custom-seccion-principal"
                      src="/assets/backgroun-images/fondo-seccion-1.png"
                      alt="Fondo de flores corintas"
                  />
              </div>
              <div className="overlay d-flex flex-column align-items-center justify-content-center">
                  <div>
                      <span className="d-block text-center custom-span">¡Nos Casamos!</span>
                  </div>
                  <h1 className="custom-heading-text text-center">
                      Melani y Carlos
                  </h1>
                  <div>
                      <span className="d-block text-center custom-span">27 SEP 25</span>
                  </div>
              </div>
          </div>
      </Zoom>
  );
};
