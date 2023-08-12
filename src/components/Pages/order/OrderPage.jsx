import { useParams } from "react-router-dom";
import "./OrderPage.css";
import "./Main.css";
import "./Navbar.css";
import "./NavbarLeft.css";
import "./NavbarRight.css";
import Navbar from "./Navbar";
import Main from "./Main";



export default function OrderPage() {
    //state
const { username } = useParams()
    //comportement

    //affichage
  return (
    <div className="container">
      <Navbar username= {username}/>
      <Main />
      
    </div>
  )
}
