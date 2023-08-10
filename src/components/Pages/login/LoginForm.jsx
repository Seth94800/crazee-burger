import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import "./LoginForm.css";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  {
    /* comportements */
  }
  const HandleSubmit = (event) => {
    event.preventDefault();

    setInputValue("");
    navigate(`order/ ${inputValue}`);
  };
  const HandleChange = (event) => {
    setInputValue(event.target.value);
  };

  {
    /* affichage (render) */
    return (
      <>
        <div className="Logo">
          <p>Crazee</p>
          <img src="../src/assets/images/F03 logo-orange.png" alt="Logo" />
          <p>Burger</p>
        </div>

        <div className="wrapper-form">
          <form action="Submit" onSubmit={HandleSubmit}>
            <div className="bienvenue">
              <h1>Bienvenue chez nous !</h1>
              <hr></hr>
              <h2>Connectez-vous</h2>
            </div>

            <div className="input-with-icon">
              <BsPersonCircle className="bsperson" />
              <input
                value={inputValue}
                onChange={HandleChange}
                type="text"
                placeholder="entrez votre prénom"
                required
              />
            </div>

            <div className="button-with-icon">
              <button>Accéder à mon espace </button>
              <FaChevronRight className="chevron" />
            </div>
          </form>
        </div>
      </>
    );
  }
}
