import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Contact from './pages/Contact';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <Navbar />                  {/* ← must be inside Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;