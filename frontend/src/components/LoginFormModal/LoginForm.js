import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const demoLogin = (e) => {
    e.preventDefault();
   dispatch(
     sessionActions.login({ credential: "demo@aa.io", password: "password" })
   ).catch((res) => {
     if (res.data && res.data.errors) setErrors(res.data.errors);
   });
  };

  return (
    <div id="login-form-modal">
      <>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            Username or Email 
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <div></div>
          <br></br>
          <label>
            Password 
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Log In</button>
          <br></br>
          <br></br>
          <button
            className="login-button"
            id="login-modal-button"
            type="submit"
            onClick={demoLogin}
          >
            Demo Log In
          </button>
        </form>
      </>
    </div>
  );
}

export default LoginForm;
