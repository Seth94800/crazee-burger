import { useState } from "react";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");

  {
    /* comportements */
  }
  const HandleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };
  const HandleChange = (event) => {
    setInputValue(event.target.value);
  };

  {
    /* affichage (render) */
    return (
      <>
        <form action="Submit" onSubmit={HandleSubmit}>
          <h1>Bienvenue chez nous !</h1>
          <h2>Connectez-vous</h2>
          <input
            value={inputValue}
            onChange={HandleChange}
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
