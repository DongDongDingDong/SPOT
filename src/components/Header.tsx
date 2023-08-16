import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
    <div className="header__top">
      <div className="header__container container">
        <div className="header__contact">
          <span>(+01) - 2345 - 6789</span>

          <span> Our location</span>
        </div>

        <p className="header__alert-news">
          Super Value Deals - Save more with coupons
        </p>

        <a href="login-register.html" className="header__top-action">
          Log In / Sign Up
        </a>
      </div>
    </div>

    <nav className="nav container">
      <a href="index.html" className="nav__logo">
        <img src={require("../assets/img/logo.svg")} alt="" className="nav__logo-img" />
      </a>

      <div className="nav__menu" id="nav-menu">
        <div className="nav__menu-top">
          <a href="index.html" className="nav__menu-logo">
            <img src={require("../assets/img/logo.svg")} alt="" /> 
          </a>

          <div className="nav__close" id="nav-close">
            <i className="fi fi-rs-cross-small"></i>
          </div>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            <a href="index.html" className="nav__link active-link">Home</a>
          </li>

          <li className="nav__item">
            <a href="shop.html" className="nav__link">Shop</a>
          </li>

          <li className="nav__item">
            <a href="accounts.html" className="nav__link">My Account</a>
          </li>

          <li className="nav__item">
            <a href="compare.html" className="nav__link">Compare</a>
          </li>

          <li className="nav__item">
            <a href="login-register.html" className="nav__link">Login</a>
          </li>
        </ul>

        <div className="header__search">
          <input
            type="text"
            placeholder="Search for items..."
            className="form__input"
          />

          <button className="search__btn">
            <img src={require("../assets/img/search.png")} alt="" />
          </button>
        </div>
      </div>

      <div className="header__user-actions">
        <a href="wishlist.html" className="header__action-btn">
          <img src={require("../assets/img/icon-heart.svg")} alt="" />
          <span className="count">3</span>
        </a>

        <a href="cart.html" className="header__action-btn">
          <img src={require("../assets/img/icon-cart.svg")} alt="" />
          <span className="count">3</span>
        </a>

        <div className="header__action-btn nav__toggle" id="nav-toggle">
          <img src={require("../assets/img/menu-burger.svg")} alt=""/>
        </div>
      </div>
    </nav>
    </header>
  );
};

