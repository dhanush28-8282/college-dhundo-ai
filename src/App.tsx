import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      {/* Global styles and theme provider would go here if using styled-components */}
      <GlobalStyles />
      
      {/* Main app container with theme-based background */}
      <div style={{
        background: theme.colors.background,
        minHeight: '100vh',
        color: theme.colors.text
      }}>
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <Layout>
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              </Layout>
            } />
            
            <Route path="/chat" element={
              <Layout>
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Chat />
                </motion.div>
              </Layout>
            } />
            
            <Route path="/features" element={
              <Layout>
                <motion.div
                  key="features"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Features />
                </motion.div>
              </Layout>
            } />
            
            <Route path="/about" element={
              <Layout>
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <About />
                </motion.div>
              </Layout>
            } />
            
            <Route path="/contact" element={
              <Layout>
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Contact />
                </motion.div>
              </Layout>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;