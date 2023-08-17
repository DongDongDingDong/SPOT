import React from 'react';
import {Arrivals} from './MainComponents/Arrivals'
import {Categories} from './MainComponents/Categories'
import {Deals} from './MainComponents/Deals'
import {Newsletter} from './MainComponents/Newsletter'
import {Showcase} from './MainComponents/Showcase'
import {Products} from './MainComponents/Products'

export const Home: React.FC = () => {
  return (
    <main className="main">
      <section className="home section--lg">
        <div className="home__container container grid">
          <div className="home__content">
            <span className="home__subtitle">Hot promotions</span>
            <h1 className="home__title">
              Fashion Trending <span>Great Collection</span>
            </h1>
            <p className="home__description">
              Save more with coupons & up to 20% off
            </p>
            <a href="shop.html" className="btn">Shop Now</a>
          </div>

          <img src={require("../../assets/img/home-img.png")} alt="" className="home__img" />
        </div>
      </section>
      <Categories />
      <Products />
      <Deals />
      <Arrivals />
      <Showcase />
      <Newsletter />
    </main>
  );
};
