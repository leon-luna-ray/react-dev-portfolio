import React from "react";
import { BrowserRouter as Router } from 'react';
import { Container } from "react-bootstrap";
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <Router>
      <main>
        <NavBar />
        <Container>
          <About />
          <Projects />
          <Contact />
        </Container>
      </main>
    </Router>
  );
}

export default App;
