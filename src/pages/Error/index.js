import { Link } from "react-router-dom";

import "./Error.css";

export default function Error() {
  return (
    <div className="container_404">
      <img src="/notfound.svg" alt="Imagem de 404" />
      <h1>Página não encontrada</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
