import React from 'react'
import SportsHomepage from './container/SportsHomepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sports from './components/navbar-tabs/sports/Sports';
import InPlay from './components/navbar-tabs/in-play/InPlay';
import IPL from './components/navbar-tabs/ipl/IPL';
import IndianCasino from './components/navbar-tabs/indianCasino/IndianCasino';


function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<SportsHomepage />} />
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/in-play" element={<InPlay />} />
                    <Route path="/ipl-cup" element={<IPL />} />
                    <Route path="/indian-casino" element={<IndianCasino />} />
                </Routes>
            </Router>

        </div>
    )
}

export default App