import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

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
            </Switch>
          </Container>
        </div>

        <Row>
          <Footer />
        </Row>
      </main>
    </Router>
  );
}

export default App;
