import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./links.css";

export default function Links() {
  return (
    <div className="container_links">
      <div className="links_header">
        <Link to={"/"}>
          <FiArrowLeft size={38} color="fff" />
        </Link>
        <h1>Meus links 🔗</h1>
      </div>

      <div className="links_item">
        <button className="link">
          <FiLink sizes={18} color="$fff" />
          https://www.google.com.br
        </button>
        <button className="link_trash">
          <FiTrash size={18} color="#FF5454" />
        </button>
      </div>

      <div className="links_item">
        <button className="link">
          <FiLink sizes={18} color="$fff" />
          https://www.google.com.br
        </button>
        <button className="link_trash">
          <FiTrash size={18} color="#FF5454" />
        </button>
      </div>
    </div>
  );
}
