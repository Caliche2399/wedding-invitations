import './App.css'
import {CardComponent} from "./Components/CardComponent.tsx";
import {FormComponent} from "./Components/form/FormComponent.tsx";
import {FloatingButton} from "./Components/FloatingButton.tsx";
import { SeccionPrincipal } from './Components/SeccionPrincipal.tsx';
import {SegundaSeccion} from "./Components/SegundaSeccion.tsx";
import {CountDownComponent} from "./Components/CountDownComponent.tsx";


function App() {

  return (
      <>
        <SeccionPrincipal />
        <SegundaSeccion />
        <CountDownComponent />
        <CardComponent />
        <FormComponent />
        <FloatingButton />
      </>
  );
}

export default App
