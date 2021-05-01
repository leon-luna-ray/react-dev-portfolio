import React from 'react';
import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import ProfileImg from '../images/ray-sq.jpg';
import '../style.css';

export const About = () => {
  return (
    <section className='about-section'>
      <Card>
        <Container className='card-container'>
          <Row>
            <Col className='card-title'>
              <h2 className='text-center'>About Me</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Image src={ProfileImg} thumbnail fluid />
            </Col>

            <Col>
              <Row>
                <Col>
                  <p>
                    Hello world! I'm Ray. I'm a full-stack web developer and
                    currently a student with University of Oregon's Coding Boot
                    Camp. The reason I got into coding is because find it allows
                    me to constantly challenge myself. I love to learn and I'm
                    always looking for something new to expand my knowledge. I
                    have an interest in both front-end and back-end development
                    and learning new languages and technologies. Originally from
                    Mexicali, Mexico and currently living in the Portland,
                    Oregon metro area. My hobbies are cooking, language, travel
                    and photography.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Skills</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Jquery</li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li>Node.js</li>
                    <li>Express JS</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li>Handlebars</li>
                    <li>React</li>
                    <li>MERN Stack</li>
                    <li>Firebase</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </section>
  );
};

export default About;
