import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import api from "../../services/api";

import "./styles.css";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Login() {
  const [id, setId] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    const data = {};

    try {
      const response = await api.post("sessions", { id });

      alert(`Your access id: ${response.data.name}`);

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Login error. Try again.");
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero" />

        <form onSubmit={handleLogin}>
          <h1>Do your login</h1>
          <input
            placeholder="Your ID"
            type="text"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Login
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Create account
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes Logo" />
    </div>
  );
}
