import { BsPersonCircle } from "react-icons/bs";
import { NavbarLeft } from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
// import "./Navbar.css";

export default function Navbar(username) {
  return (
    <div className="navbar">
      <NavbarLeft />

      <NavbarRight username={username} />
      <BsPersonCircle className="bsperson" />
    </div>
  );
}
