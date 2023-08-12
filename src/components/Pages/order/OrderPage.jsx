import { Link, useParams } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import "./OrderPage.css";
import { BsPersonCircle } from "react-icons/bs";



export default function OrderPage() {
    //state
const { username } = useParams()
    //comportement

    //affichage
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo-order">
          <Logo />
        </div>
        <div className="nav-profil-container">
          <h1>Hey, {username}</h1>
          <Link to= "/">
          <button>Se déconnecter</button>
          </Link>
          <BsPersonCircle className="bsperson" />
        </div>
      </div >
    </div>
  )
}
