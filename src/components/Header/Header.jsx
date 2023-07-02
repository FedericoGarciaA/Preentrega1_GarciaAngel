import { CartWidget } from "../CartWidget/CartWidget";
import logoNordvindar from '../../assets/logo-nordvindar.png'

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header_tittle">
        NORDVINDAR{" "}
        <img className="logo" src={logoNordvindar} alt="" />{" "}
        FURNISHING
      </h1>
      <ul className="navbar">
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">PRODUCTOS</a>
        </li>
        <li>
          <a href="#">NOSOTROS</a>
        </li>
        <li>
          <a href="#">CONTACTO</a>
        </li>
        <li>
          <a href="#"><CartWidget />(0)</a>
        </li>
      </ul>
    </header>
  );
};
