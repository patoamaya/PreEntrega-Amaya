import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList
        saludo={"Saludos por parte de la página"}
        informacion={"Ventautos"}
      />
    </div>
  );
}

export default App;
