import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate()

  {
    /* comportements */
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    setInputValue("");
    navigate(`order/ ${inputValue}`)
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  {
    /* affichage (render) */
    return (
      <>
        <form action="Submit" onSubmit={handleSubmit}>
          <h1>Bienvenue chez nous !</h1>
          <h2>Connectez-vous</h2>
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="entrez votre prénom..."
            required
          />
          <button>Accédez à votre espace</button>
        </form>
      </>
    );
  }
}
