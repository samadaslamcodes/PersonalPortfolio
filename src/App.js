import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import SaltAndPepper from './pages/SaltAndPepper';
import HrAssistant from './pages/HrAssistant';
import Khareedo from './pages/Khareedo';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/salt-n-pepper" element={<SaltAndPepper />} />
        <Route path="/projects/hr-assistant" element={<HrAssistant />} />
        <Route path="/projects/khareedo" element={<Khareedo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;