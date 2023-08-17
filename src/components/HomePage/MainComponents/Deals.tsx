import React from 'react';

export const Deals: React.FC = () => {
  return (
    <section className="deals section">
      <div className="deals__container container grid">
        <div className="deals__item">
          <div className="deals__group">
            <h3 className="deals__brand">Deal of the Day</h3>
            <span className="deals__category">Limited quantities.</span>
          </div>

          <h4 className="deals__title">Summer Collection New Morden Design</h4>

          <div className="deals__price flex">
            <span className="new__price">$139.00</span>
            <span className="old__price">$160.99</span>
          </div>

          <div className="deals__group">
            <p className="deals__countdown-text">Hurry Up! Offer End In:</p>

            <div className="countdown">
              <div className="countdown__amount">
                <p className="countdown__period">02</p>
                <span className="unit">Days</span>
              </div>
              <div className="countdown__amount">
                <p className="countdown__period">22</p>
                <span className="unit">Hours</span>
              </div>
              <div className="countdown__amount">
                <p className="countdown__period">57</p>
                <span className="unit">Mins</span>
              </div>
              <div className="countdown__amount">
                <p className="countdown__period">24</p>
                <span className="unit">Sec</span>
              </div>
            </div>
          </div>

          <div className="deals__btn">
            <a href="details.html" className="btn btn--md">Shop Now</a>
          </div>
        </div>

        <div className="deals__item">
          <div className="deals__group">
            <h3 className="deals__brand">Women Clothing</h3>
            <span className="deals__category">Limited quantities.</span>
          </div>

          <h4 className="deals__title">Try something new on vacation</h4>

          <div className="deals__price flex">
            <span className="new__price">$139.00</span>
            <span className="old__price">$160.99</span>
          </div>

          <div className="deals__group">
            <p className="deals__countdown-text">Hurry Up! Offer End In:</p>

            <div className="countdown">
              <div className="countdown__amount">
                <p className="countdown__period">02</p>
                <span className="unit">Days</span>
              </div>
              <div className="countdown__amount">
                <p className="countdown__period">22</p>
                <span className="unit">Hours</span>
              </div>
              <div className="countdown__amount">
                <p className="countdown__period">57</p>
                <span className="unit">Mins</span>
              </div>
              <div className="countdown__amount">
                <p className="countdown__period">24</p>
                <span className="unit">Sec</span>
              </div>
            </div>
          </div>

          <div className="deals__btn">
            <a href="details.html" className="btn btn--md">Shop Now</a>
          </div>
        </div>
      </div>
    </section>

  );
};

