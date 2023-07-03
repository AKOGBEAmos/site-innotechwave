import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from "./home/Home";
import Contact from "./contact/Contact";
function App(){
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/contact"  element={<Contact />}/>
            </Routes>
          </Router>
        </header>
      </div>
    );
  }

export default App;