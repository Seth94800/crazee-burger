import { Link } from "react-router-dom";
// import "./NavbarRight.css";

export default function NavbarRight(username) {
  return (
    <div className="nav-profil-container">
          <h1>Hey, {username}</h1>
          <Link to= "/">
          <button>Se déconnecter</button>
          </Link>
        </div>
  )
}
