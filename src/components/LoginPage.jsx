export default function LoginPage() {
  {
    /* state (état, datas) */
  }
  const [inputValue, setInputValue] = useState("");

  {
    /* comportements */
  }
  const HandleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
  };
  const HandleChange = (event) => {
    setInputValue(event.target.value);
  };

  {
    /* affichage (render) */
  }
  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form action="Submit" onSubmit={HandleSubmit}>
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
