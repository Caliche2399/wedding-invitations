import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardComponent} from "./Components/CardComponent.tsx";
import {FormComponent} from "./Components/form/FormComponent.tsx";
import {FloatingButton} from "./Components/FloatingButton.tsx";
import {Divider} from "./Components/Divider.tsx";
import { SeccionPrincipal } from './Components/SeccionPrincipal.tsx';


function App() {

  return (
      <>
        <SeccionPrincipal />
        <CardComponent/>
        <Divider />
        <FormComponent />
        <Divider />
        <FloatingButton />
      </>
  );
}

export default App
