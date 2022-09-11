import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage';


const App = () => {
    return (
        <div className="app">
            <Router >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
                {/*home: with the search on */}


                {/*search page: the results page */}
            </Router>
        </div>
    )
};


export default App;