import React from 'react';
import './Impact.css';

const Impact = () => {
  return (
    <div className="impact-container">
      <section className="impact-section">
        <h3>Doer-at-scale</h3>
        <ul>
          <li>HERVeg.05 itself: The organization could scale up its operations to reach more rural farming communities.</li>
          <li>Businesses: Various firms could replicate the for-profit solution of HERVeg.05.</li>
          <li>NGOs: Non-profit organizations focused on health, nutrition, and agriculture could deliver the HERVeg.05 solution.</li>
          <li>Governments: Governmental bodies at various levels could incorporate the HERVeg.05 solution into their health and agricultural programs and services.</li>
        </ul>
      </section>

      <section className="impact-section">
        <h3>Payer at Scale</h3>
        <ul>
          <li>Customers: The small-scale farmers, particularly within VSLA groups.</li>
          <li>Private Philanthropy: Philanthropic organizations might provide initial funding.</li>
          <li>Big Aid: Multilateral and bilateral funding directly to NGOs.</li>
          <li>It's important to note that while multiple payers might be involved in the initial stages, one payer will likely emerge to do the heavy lifting in the long run.</li>
        </ul>
      </section>

      <section className="impact-section">
        <h3>Big Enough?</h3>
        <ul>
          <li>The HERVeg.05 initiative is addressing a widespread issue of malnutrition in Tanzania, targeting a large group of small-scale farmers, particularly within VSLA groups, making it a BIG solution.</li>
          <li>The where-it-would work list
            <ul>
              <li>Rural Farming Communities</li>
              <li>Regions with High Malnutrition Rates</li>
              <li>VSLA Groups</li>
              <li>Areas with Mobile Network Coverage</li>
              <li>Regions with Access to Agricultural Training</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="impact-section">
        <h3>Simple Enough?</h3>
        <ul>
          <li>The initiative provides easy-to-understand solutions like nutrient-dense vegetable bundles, flexible payment methods, and agricultural training, making it SIMPLE for the farmers.</li>
        </ul>
      </section>

      <section className="impact-section">
        <h3>Cheap Enough?</h3>
        <ul>
          <li>By offering a flexible Buy Now, Pay Later system, which allows farmers to make an initial payment of no more than 10% of the total package cost, the initiative is CHEAP ENOUGH for the farmers to afford.</li>
        </ul>
      </section>
    </div>
  );
};

export default Impact;
