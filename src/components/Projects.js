import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import SocialButterfly from '../images/screenshot.png';

export const Projects = () => {
  return (
    <Container>
      <div className='projects-section'>
        <Row>
          <Col>
            <ProjectCard
              title='Social Butterfly'
              text='The messaging app of the future.'
              imgSrc={SocialButterfly}
            />
          </Col>
          <Col>
            <ProjectCard
              title='Social Butterfly'
              text='The messaging app of the future.'
              imgSrc='../images/screenshot.png'
            />
          </Col>
          <Col>
            <ProjectCard
              title='Social Butterfly'
              text='The messaging app of the future.'
              imgSrc='../images/screenshot.png'
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Projects;
