import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css';
import Resume from '../pdf/ray-luna-resume.pdf';

export const Contacts = () => {

  const email = 'mailto:leon.luna.ray@gmail.com';
  const github = 'https://github.com/leon-luna-ray';
  const linkedin = 'https://www.linkedin.com/in/ray-l-5b66181b9/';

  return (
    <section className='contacts-section'>
      <Container>
        <Row>
          <Col>
            <div class='card contact-card text-dark bg-light mb-3'>
              <div class='card-body'>
                <h5 class='card-title'>E-Mail </h5>
                <a href={email}>leon.luna.ray@gmail.com</a>
              </div>
            </div>
          </Col>
          <Col>
            <div class='card contact-card text-dark bg-light mb-3'>
              <div class='card-body'>
                <h5 class='card-title'>Github </h5>
                <a href={github} target='_blank'>
                  Profile
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class='card contact-card text-dark bg-light mb-3'>
              <div class='card-body'>
                <h5 class='card-title'>Linkedin </h5>
                <a href={linkedin} target='_blank'>
                  Profile
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div class='card contact-card text-dark bg-light mb-3'>
              <div class='card-body'>
                <h5 class='card-title'>E-Mail </h5>
                <a href={Resume} download='luna-ray-resume'>
                  Download
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacts;
