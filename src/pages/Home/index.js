import { FiLink } from "react-icons/fi";

import "./home.css";
import Menu from "../../components/menu/index.js";

export default function Home() {
  return (
    <div className="container_home">
      <div className="container_inf">
        <img src="/Logo.svg" alt="Logo do MyLInk" />
        <h1>MyLink</h1>
        <span>
          Dê um fim aos <strong>links </strong> grandes ✋
        </span>
      </div>

      <div className="container_form">
        <div className="icon_input">
          <FiLink size="24" color="#fff" />
          <input type="text" placeholder="Cole seu link aqui 😁" />
        </div>

        <button className="btn_shorten">Encurtar</button>
      </div>

      <Menu />
    </div>
  );
}
