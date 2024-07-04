import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './Pages/Home';
import AboutMe from './Pages/AbooutMe';
import './App.css';
import './Layout';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout/>}> 
          <Route path="/" element={<Home />} /> {/* Route for Home page/Home */}
            <Route path="/AboutMe" element={<AboutMe />} /> {/* Route for AboutMe */}
          </Route>
        </Routes>
      </Router>
      <br></br>
      <br></br>
      <footer>© Nightmare Panthera 2024</footer>
    </div>
  );
};

export default App;