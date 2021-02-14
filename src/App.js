import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Background from './img/background-img.png'



function App() {
  return (
      <Router>
        <div className="App background-img" style={{ backgroundImage: `url(${Background})` }}>
          <Nav />
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>


  );
}

export default App;
