import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import '../assets/css/login.css'

export function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <div >
      <div className="login-container">
        <p className="login-title">
          <strong>Iniciar sesión</strong>
        </p>

        <p className="login-message">
          Inicia sesión para acceder a tu portal
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">
            Nombre de usuario:
            <input name="username" type="text" className="login-input" />
          </label>
          <label className="login-label">
            Contraseña:
            <input name="username" type="text" className="login-input" />
          </label>
          <button type="submit" className="login-button">Acceder</button>
        </form>
      </div>
    </div>
  );
}
