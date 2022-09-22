//Importo estilos CSS y Importo CartWidget/Logotipo
import "./NavBar.css";
import CartWidget from "../CartWigdet/CartWigdet";
import Logotipo from "../Logotipo/Logotipo";

// Funcion NavBar
const NavBar = () => {
  return (
    <div>
      <ul className="barraNavegacion">
        <li>
          <Logotipo />
        </li>
        <li>
          <a className="links" href="#">
            Inicio
          </a>
        </li>
        <li>
          <a className="links" href="#">
            Tienda
          </a>
        </li>
        <li>
          <a className="links" href="#">
            Galeria
          </a>
        </li>
        <li>
          <a className="links" href="#">
            Nosotros
          </a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
};

//Exporto
export default NavBar;
