import React from 'react';

export const Products: React.FC = () => {
  return (
    <section className="products section container">
      <div className="tab__btns">
        <span className="tab__btn active-tab" data-target="#featured"
          >Featured</span
        >
        <span className="tab__btn" data-target="#popular">Popular</span>
        <span className="tab__btn" data-target="#new-added">New added</span>
      </div>

      <div className="tab__items">
        <div className="tab__item active-tab" id="featured">
          <div className="products__container grid">
            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-1-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-1-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-pink">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-2-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-2-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-green">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-3-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-3-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-orange">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-4-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-4-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-blue">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-5-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-5-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-pink">-30%</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-6-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-6-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-pink">-22%</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-7-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-7-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-green">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-8-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-8-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="tab__item" id="popular">
          <div className="products__container grid">
            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-9-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-9-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-pink">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-2-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-2-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-green">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-10-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-10-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-orange">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-4-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-4-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-blue">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-5-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-5-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-pink">-30%</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-11-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-11-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-pink">-22%</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src="assets/img/product-7-1.jpg"
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src="assets/img/product-7-2.jpg"
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-green">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-8-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-8-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="tab__item" id="new-added">
          <div className="products__container grid">
            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-1-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-1-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-pink">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-12-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-12-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-green">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-3-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-3-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-orange">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-13-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-13-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-blue">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-10-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-10-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-pink">-30%</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-6-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-6-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-pink">-22%</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-9-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-9-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>

                <div className="product__badge light-green">Hot</div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>

            <div className="product__item">
              <div className="product__banner">
                <a href="details.html" className="product__images">
                  <img
                    src={require("../../../assets/img/product-8-1.jpg")}
                    alt=""
                    className="product__img default"
                  />

                  <img
                    src={require("../../../assets/img/product-8-2.jpg")}
                    alt=""
                    className="product__img hover"
                  />
                </a>

                <div className="product__actions">
                  <a href="#" className="action__btn" aria-label="Quick View">
                    <i className="fi fi-rs-eye"></i>
                  </a>

                  <a
                    href="#"
                    className="action__btn"
                    aria-label="Add To Wishlist"
                  >
                    <i className="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" className="action__btn" aria-label="Compare">
                    <i className="fi fi-rs-shuffle"></i>
                  </a>
                </div>
              </div>

              <div className="product__content">
                <span className="product__category">Clothing</span>
                <a href="details.html">
                  <h3 className="product__title">Colorful Pattern Shirts</h3>
                </a>
                <div className="product__rating">
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                  <i className="fi fi-rs-star"></i>
                </div>
                <div className="product__price flex">
                  <span className="new__price">$238.85</span>
                  <span className="old__price">$245.8</span>
                </div>

                <a
                  href="#"
                  className="action__btn cart__btn"
                  aria-label="Add To Cart"
                >
                  <i className="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

