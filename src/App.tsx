import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardComponent} from "./Components/CardComponent.tsx";
import {FormComponent} from "./Components/form/FormComponent.tsx";
import {FloatingButton} from "./Components/FloatingButton.tsx";
import {Divider} from "./Components/Divider.tsx";
import { SeccionPrincipal } from './Components/SeccionPrincipal.tsx';
import {SegundaSeccion} from "./Components/SegundaSeccion.tsx";


function App() {

  return (
      <>
        <SeccionPrincipal />
        <SegundaSeccion />
        <CardComponent/>
        <Divider />
        <FormComponent />
        <Divider />
        <FloatingButton />
      </>
  );
}

export default App
