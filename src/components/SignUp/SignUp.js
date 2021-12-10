import React from "react";
import "./SignUp.css";
import Link from "react-router-dom/es/Link";
const SignUp = () => {
  return (
    <div className="content">
      <form action="/">
        <div className="container">
          <h1 className="content__title">Регистрация</h1>
          <p>Заполните эту форму, чтобы стать участником</p>
          <br/>

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Введите Email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="psw">
            <b>Пароль</b>
          </label>
          <input
            type="password"
            placeholder="Введите пароль"
            name="psw"
            id="psw"
            required
          />

          <label htmlFor="psw-repeat">
            <b>Повторите Пароль</b>
          </label>
          <input
            type="password"
            placeholder="Повторите пароль"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <hr />

          <p>
            Создавая аккаунт вы соглашаетесь с нашими{" "}
            <Link to="/about">Правилами пользования</Link>.
          </p>
          <br/>
          <button type="submit" className="button-submit">
            Регистрация
          </button>
        </div>

        <div className="container signin">
          <p>
            Уже есть аккаунт? <Link to="/login">Войти</Link>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
