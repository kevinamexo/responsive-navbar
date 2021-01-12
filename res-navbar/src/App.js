
import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}
export default App;
