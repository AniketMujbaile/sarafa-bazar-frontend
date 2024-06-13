import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SearchPage from './components/SearchPage/SearchPage';
import CompanyPage from './components/CompanyPage/CompanyPage';
import LoginPage from './components/LoginSignup/LoginPage';
 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/company-page" element={<CompanyPage />} />
        <Route path="/login" element={<LoginPage />} />
       </Routes>
    </Router>
  );
};

export default App;


 