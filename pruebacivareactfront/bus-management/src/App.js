import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusList from './Components/BusList';
import BusDetail from './Components/BusDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <span className="navbar-brand mb-0 h1">Sistema de Gestión de Buses</span>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<BusList />} />
          <Route path="/bus/:id" element={<BusDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

