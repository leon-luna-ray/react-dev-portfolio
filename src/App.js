import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from "react-bootstrap";
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Projects from '../src/components/Projects';
import Contact from './components/Contact.js';

function App() {
  return (
    <Router>
      <main>
        <NavBar />
        <div className='page-content'>
          <Container>
            <Switch>
              <Route exact path='/'>
                <About />
              </Route>
              <Route exact path='/projects'>
                <Projects />
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
              <Footer />
            </Switch>
          </Container>
        </div>
      </main>
    </Router>
  );
}

export default App;
