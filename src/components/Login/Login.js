import React from "react";
import "./Login.css";
import Link from "react-router-dom/es/Link";
const Login = () => {
  return (
    <div className="content">
      <form action="/">
        <div className="container">
          <h1 className="content__title">Вход на сайт</h1>
          <label htmlFor="uname">
            <b>Никнейм</b>
          </label>
          <input
            type="text"
            placeholder="Введите Никнейм"
            name="uname"
            required
          />

          <label htmlFor="psw">
            <b>Пароль</b>
          </label>
          <input
            type="password"
            placeholder="Введите пароль"
            name="psw"
            required
          />
          <label>
            <input type="checkbox" name="remember" /> Запомнить меня
          </label>
          <br/>
          <br/>
          <button className="button-submit">
            Войти
          </button>

        </div>

        <div className="container">
          <button type="button" className="cancelbtn">
            Отмена
          </button>
          <span className="psw">
            Забыли <Link to="/contact">пароль?</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
