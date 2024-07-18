import "../../Styles/form-component.css"
import { RiFileList3Line } from "react-icons/ri";

export const FormComponent = () => {

    const handleClick = () =>{
        window.open('https://forms.gle/4a1WHhLfPWuhZSth9', '_blank');
    }

    return (
      <div id="confirm" className="text-center py-5">
        <h2 className="py-5">Confirma Tu Asistencia</h2>
        <p>Tu confirmación nos ayudará a asegurarnos de tener todo listo para recibirte adecuadamente en nuestro día
          especial. Simplemente haz clic en el botón a continuación para confirmar tu asistencia.</p>
        <button onClick={handleClick} className="my-4 rounded rounded-5 custom-button" type="submit">
          <RiFileList3Line/> Confirmar
        </button>
      </div>
    );
}