import './App.css'
import { NavbarComponent } from './Components/navbar/NavbarComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardComponent} from "./Components/CardComponent.tsx";
import {FormComponent} from "./Components/form/FormComponent.tsx";
import {FloatingButton} from "./Components/FloatingButton.tsx";
import {Divider} from "./Components/Divider.tsx";


function App() {

  return (
      <>
        <NavbarComponent/>
        <CardComponent/>
        <Divider />
        <FormComponent />
        <Divider />
        <FloatingButton />
      </>
  );
}

export default App
