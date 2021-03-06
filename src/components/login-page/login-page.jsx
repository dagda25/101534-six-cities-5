import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";

const LoginPage = (props) => {
  const {onSubmit} = props;
  const loginRef = React.createRef();
  const passwordRef = React.createRef();

  const handleSubmit = (evt) => {
    if (evt) {
      evt.preventDefault();
    }

    onSubmit({
      login: loginRef.current ? loginRef.current.value : null,
      password: passwordRef.current ? passwordRef.current.value : null,
    });
  };

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" ref={loginRef}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" ref={passwordRef}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginPage;
