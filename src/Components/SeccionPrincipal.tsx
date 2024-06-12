import "../Styles/SeccionPrincipal.css";

export const SeccionPrincipal = () => {
  return (
    <div className="custom-div-principal">
        <div className="custom-seccion-principal">
            <img 
                className="custom-seccion-principal"
                src="/src/assets/backgroun-images/fondo-seccion-1.png" 
                alt="Fondo de flores corintas"
            />
        </div>
      <div className="overlay d-flex flex-column align-items-center justify-content-center">
        <div>
          <span className="d-block text-center">¡Nos Casamos!</span>
        </div>
        <h1 className="custom-heading-text text-center">
          Melani y Carlos
        </h1>
        <div>
          <span className="d-block text-center">27 SEP 25</span>
        </div>
      </div>
    </div>
  );
};
