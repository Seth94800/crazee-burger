import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>ERROR PAGE</h1>
        <Link to= "/"> 
        <button>Retourner vers la page Accueil</button>
        </Link>
    </div>
  )
}
