import React from 'react';

export const Arrivals: React.FC = () => {
  return (
    <section className="new__arrivals container section">
      <h3 className="section__title"><span>New</span> Arrivals</h3>

      <div className="new__container swiper">
        <div className="swiper-wrapper">
          <div className="product__item swiper-slide">
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

                <a href="#" className="action__btn" aria-label="Add To Wishlist">
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

          <div className="product__item swiper-slide">
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

                <a href="#" className="action__btn" aria-label="Add To Wishlist">
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

          <div className="product__item swiper-slide">
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

                <a href="#" className="action__btn" aria-label="Add To Wishlist">
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

          <div className="product__item swiper-slide">
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

                <a href="#" className="action__btn" aria-label="Add To Wishlist">
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

          <div className="product__item swiper-slide">
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

                <a href="#" className="action__btn" aria-label="Add To Wishlist">
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

          <div className="product__item swiper-slide">
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

                <a href="#" className="action__btn" aria-label="Add To Wishlist">
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

          <div className="product__item swiper-slide">
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

                <a href="#" className="action__btn" aria-label="Add To Wishlist">
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

