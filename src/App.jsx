import Tarjeta from "./components/Tarjeta.jsx";
import "./components/App.css";

function App() {
  return (
    <main>
      <h1>Conocé a nuestro staff</h1>
      <div className="contenedor-tarjetas">
        <Tarjeta
          nombre="Sol"
          profesion="Estudiante de Ingeniería en Sistemas"
          imagen="/imagenes/sol.jpg"
          descripcion="Con mucho entusiasmo para aprender"
        />
        <Tarjeta
          nombre="Lucas"
          profesion="UX Designer"
          imagen="/imagenes/lucas.jpg"
          descripcion="Me encanta diseñar experiencias digitales."
        />

        <Tarjeta
          nombre="Emma"
          profesion="Community Manager"
          imagen="/imagenes/emma.jpg"
          descripcion="Disfruto creando contenido."
        />
      </div>
    </main>
  );
}
export default App;
