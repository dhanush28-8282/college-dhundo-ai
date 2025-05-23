import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Ideal College with AI</h1>
          <p>Empowering students to make smarter choices with intelligent guidance and insights.</p>
          <button onClick={() => navigate('/chat')}>Get Started</button>
        </div>
        <div className="slanted-divider"></div>
      </section>

      <section className="features">
        <motion.h2
          className="animated-gradient-text"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>

        <motion.div
          className="features-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="feature-card">🎯 <strong>AI Recommendations</strong><br />Smart college matches based on your profile.</div>
          <div className="feature-card">💬 <strong>Real-Time Chat</strong><br />Instant help from our intelligent chatbot.</div>
          <div className="feature-card">📊 <strong>Data Insights</strong><br />Access placement rates, fees, reviews, and more.</div>
          <div className="feature-card">📍 <strong>Location & Budget</strong><br />Filter colleges to suit your needs.</div>
          <div className="feature-card">🔍 <strong>Smart Search</strong><br />Find colleges using natural language queries.</div>
          <div className="feature-card">🛡️ <strong>Trusted Info</strong><br />Verified and up-to-date data sources.</div>
          <div className="feature-card">🧠 <strong>Adaptive Learning</strong><br />AI that gets better at recommending.</div>
        </motion.div>
      </section>

      <section className="about">
        <motion.h2
          className="animated-gradient-text"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why College Dhundo AI?
        </motion.h2>
        <p>We harness the power of artificial intelligence to recommend colleges that align with your academic goals, financial situation, and personal preferences — all in one place.</p>
      </section>

      <footer className="footer">
        <p>© 2025 College Dhundo AI. Built with ❤️ for students.</p>
      </footer>
    </div>
  );
};

export default Home;
