import React from 'react';
import './Subscription.css';

const SubscriptionCard = () => {
  return (
    <div className="subscription-wrapper">
      <div className="subscription-card">
        <div className="subscription-header">
          <span className="icon">✴️</span>
          <div>
            <h4>Subscription</h4>
            <p>Unlock advanced features</p>
          </div>
        </div>

        <h2>Get the most of the app</h2>
        <p className="subtitle">Unlock Features like:</p>

        <ul className="feature-list">
          <li><strong>No Ads</strong></li>
          <li>Set a schedule to stop social media apps from distracting you</li>
          <li>
            Group Challenge Mode:
            <button className="invite-btn">Invite your friends</button>
          </li>
        </ul>

        <button className="unlock-btn">Unlock for 59.99 EGY</button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
