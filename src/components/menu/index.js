import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTwitch,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { Link } from "react-router-dom";

import "./menu.css";

export default function Menu() {
  return (
    <div className="container_menu">
      <a
        href="https://www.linkedin.com/in/diegocrivelaro/"
        target="_blank"
        rel="noopener noreferrer"
        className="menu_social"
      >
        <BsLinkedin sizes={24} color="#fff" />
      </a>
      <a
        href="https://github.com/diegocrivelaro"
        target="_blank"
        rel="noopener noreferrer"
        className="menu_social"
      >
        <BsGithub sizes={24} color="#fff" />
      </a>
      <a
        href="https://www.twitch.tv/diegocrivelaro"
        target="_blank"
        rel="noopener noreferrer"
        className="menu_social"
      >
        <BsTwitch sizes={24} color="#fff" />
      </a>
      <a
        href="https://www.instagram.com/diego_crivelaro/"
        target="_blank"
        rel="noopener noreferrer"
        className="menu_social"
      >
        <BsInstagram sizes={24} color="#fff" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100075114414089"
        target="_blank"
        rel="noopener noreferrer"
        className="menu_social"
      >
        <BsFacebook sizes={24} color="#fff" />
      </a>
      <a
        href="https://twitter.com/CrivelaroDiego"
        target="_blank"
        rel="noopener noreferrer"
        className="menu_social"
      >
        <BsTwitter sizes={24} color="#fff" />
      </a>

      <Link className="menu_mylinks" to={"/links"}>
        Meus links
      </Link>
    </div>
  );
}
