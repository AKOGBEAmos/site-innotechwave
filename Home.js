import React from "react";
import Menu from './Menu';
import Intro from "./Intro";
import Main from "./Main";
import Footer from "./Footer";
import Contact from "./Contact";
import '../site-css/menu.css';
import '../site-css/header.css';
import '../site-css/main.css';
import '../site-css/contact.css';
import '../site-css/footer.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Intro /> 
      </header>
      <body>
        <Main />
        <Contact />
        <Footer />
      </body>
    </div>
  );
}

export default Home;
