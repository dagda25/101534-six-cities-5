import React from "react";
import {Header} from "../header/header";


const ErrorPage = () => {

  return (
    <React.Fragment>
      <Header/>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Server Error</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Server Error</b>
              <p className="favorites__status-description">Please try again later</p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </React.Fragment>
  );
};


export default ErrorPage;
