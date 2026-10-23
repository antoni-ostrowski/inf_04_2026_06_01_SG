import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [formState, setFormState] = useState(null);
  const [adres, setAdres] = useState("");
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [genPass, setGenPass] = useState(false);

  function handleSubmit() {
    setFormState({
      adres,
      login,
      pass,
      genPass,
    });
  }

  return (
    <div className="container-fluid p-3">
      <form
        className="container-fluid mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="adres-input" className="form-label">
          adres WWW:
        </label>
        <input
          id="adres-input"
          type="text"
          className="form-control"
          placeholder="adres strony WWW"
          value={adres}
          onChange={(e) => setAdres(e.target.value)}
        />

        <label htmlFor="login-input">login</label>
        <input
          id="login-input"
          type="text"
          className="form-control"
          placeholder="Twoj login"
          value={login}
          onChange={(e) =>  {
						setLogin(e.target.value)
					}}
        />

        <input id="pass-gen-input" type="checkbox" 

          checked={genPass}
          onChange={(e) => {
						console.log(e.target.checked)
						setGenPass(e.target.checked)
					}}
		/>
        <label
          htmlFor="pass-gen-input"
        >
          wygeneruj haslo
        </label>

        <label htmlFor="pass-input">Haslo:</label>
        <input
          id="pass-input"
          type="text"
          className="form-control"
          placeholder=""
          disabled={genPass}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          Zapisz
        </button>
      </form>

      <div className="container-fluid">
        {formState && (
          <>
            <p>Adres: {formState.adres}</p>
            <p>Login: {formState.login}</p>
            <p>{genPass ? <>Haslo wygenerowane automatycznie </> : <>Haslo: {formState.pass}</>}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
