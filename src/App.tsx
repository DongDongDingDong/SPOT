import React from 'react';
import './App.css';
import {Home} from './components'

// Sample data representing deals from different businesses
const deals = [
  {
    id: 1,
    business: "Restaurant A",
    dealDescription: "50% off on selected menu items",
    validity: "Valid until August 31, 2023",
    purchases: 154, // Number of times purchased
  },
  {
    id: 2,
    business: "Spa & Wellness",
    dealDescription: "Spa package: 20% off for first-time customers",
    validity: "Valid until September 15, 2023",
    purchases: 83, // Number of times purchased
  },
  {
    id: 3,
    business: "Fitness Center",
    dealDescription: "One-week free trial membership",
    validity: "Valid for new members only",
    purchases: 215, // Number of times purchased
  },
];

// Sort deals based on the number of purchases (descending order)
const sortedDeals = deals.sort((a, b) => b.purchases - a.purchases);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          < Home />
        </div>
        <h3>SPOT</h3>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">Deals</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="deals-container">
        <h2>Featured Deals</h2>
        {sortedDeals.map((deal, index) => (
          <div className="deal-row" key={deal.id}>
            <div className="deal-ranking">{index + 1}</div>
            <div className="deal-title">{deal.business}</div>
            <div className="deal-purchases">Purchases: {deal.purchases}</div>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Deals</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-social">
            {/* Add social media icons or links here */}
          </div>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
