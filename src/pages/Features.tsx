import React from 'react';
import './Page.css';

const Features: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Key Features</h1>
      <ul>
        <li>🎯 <strong>AI-Powered Recommendations</strong>: Get personalized college suggestions based on your interests, scores, and preferences.</li>
        <li>💬 <strong>Real-Time Chat Support</strong>: Interact with our chatbot to instantly receive answers and guidance.</li>
        <li>📊 <strong>Data-Driven Insights</strong>: Access insights like placement rates, fees, courses, and reviews to make informed decisions.</li>
        <li>📍 <strong>Location & Budget Filters</strong>: Filter colleges based on your location, budget, and stream of interest.</li>
        <li>🔍 <strong>Smart Search</strong>: Use advanced natural language search to find colleges in your own words.</li>
        <li>🎓 <strong>Trusted Information</strong>: Built on verified, up-to-date data from reliable sources.</li>
        <li>🧠 <strong>Continuously Learning</strong>: Our AI improves with time to deliver even better matches.</li>
      </ul>
    </div>
  );
};

export default Features;
