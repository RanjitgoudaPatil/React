import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import sconti from './Components/sconti.jpg';
import HomePage from './Components/HomePage';
import UserPage from './Components/UserPage';
import DataPage from './Components/DataPage';
import FormPage from './Components/FormPage';
import ConditionalPage from './Components/ConditionalPage';
import MapPage from './Components/MapPage';
import NoPage from './Components/NoPage';

const App = () => {
  
   return (
    <Router>
      <div>
        <header>
        <nav style={{ backgroundColor: '#282c34',padding:'0',height:'60px',display:'flex'}}>
        <div className="logo-container">
            <img src={sconti} alt="App Logo" className="logo" />
          </div>
          <ul>
            <li><Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Link></li>
            <li><Link to="/user" style={{ color: '#fff', marginRight: '15px' }}>User Info</Link></li>
            <li><Link to="/data" style={{ color: '#fff', marginRight: '15px' }}>Data Page</Link></li>
            <li><Link to="/form" style={{ color: '#fff', marginRight: '15px' }}>Form</Link></li>
            <li><Link to="/conditional" style={{ color: '#fff', marginRight: '15px' }}>Conditional</Link></li>
            <li><Link to="/map" style={{ color: '#fff',marginRight:'15px' }}>Map</Link></li>
            <li><Link to="/nopage" style={{ color:'fff', marginRight:'15px',textDecoration:'blue underline'}}>NoPage</Link> </li>
          </ul>
        </nav>
      </header>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/data" element={<DataPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/conditional" element={<ConditionalPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
     

  );
};


export default App;
