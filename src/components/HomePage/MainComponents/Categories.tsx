import React from 'react';

export const Categories: React.FC = () => {
  return (
    <section className="categories container section">
      <h3 className="section__title"><span>Popular</span> Categories</h3>

      <div className="categories__container swiper">
        <div className="swiper-wrapper">
          <a href="shop.html" className="category__item swiper-slide">
            <img
              src={require("../../../assets/img/category-1.jpg")}
              alt=""
              className="category__img"
            />

            <h3 className="category__title">T-Shirt</h3>
          </a>

          <a href="shop.html" className="category__item swiper-slide">
            <img
              src={require("../../../assets/img/category-2.jpg")}
              alt=""
              className="category__img"
            />

            <h3 className="category__title">Bags</h3>
          </a>

          <a href="shop.html" className="category__item swiper-slide">
            <img
              src={require("../../../assets/img/category-3.jpg")}
              alt=""
              className="category__img"
            />

            <h3 className="category__title">Sandal</h3>
          </a>

          <a href="shop.html" className="category__item swiper-slide">
            <img
              src={require("../../../assets/img/category-4.jpg")}
              alt=""
              className="category__img"
            />

            <h3 className="category__title">Scarf Cap</h3>
          </a>

          <a href="shop.html" className="category__item swiper-slide">
            <img
              src={require("../../../assets/img/category-5.jpg")}
              alt=""
              className="category__img"
            />

            <h3 className="category__title">Shoes</h3>
          </a>

          <a href="shop.html" className="category__item swiper-slide">
            <img
              src={require("../../../assets/img/category-6.jpg")}
              alt=""
              className="category__img"
            />

            <h3 className="category__title">Pillowcase</h3>
          </a>

          <a href="shop.html" className="category__item swiper-slide">
            <img
              src={require("../../../assets/img/category-7.jpg")}
              alt=""
              className="category__img"
            />

            <h3 className="category__title">Jumpsuit</h3>
          </a>

          <a href="shop.html" className="category__item swiper-slide">
            <img
              src={require("../../../assets/img/category-8.jpg")}
              alt=""
              className="category__img"
            />

            <h3 className="category__title">Hats</h3>
          </a>
        </div>

        <div className="swiper-button-next">
          <i className="fi fi-rs-angle-right"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="fi fi-rs-angle-left"></i>
        </div>
      </div>
    </section>
  );
};

