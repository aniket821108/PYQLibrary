import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import PYQHub from './pages/PYQHub';
import 'bootstrap/dist/css/bootstrap.min.css';
import Departments from './pages/Departments'; 
import './styles/Departments.css';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <Navigation />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pyq-hub" element={<PYQHub />} />
            <Route path="/departments" element={<Departments />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
