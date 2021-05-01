import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import SocialButterfly from '../images/screenshot.png';

export const Projects = () => {
  return (
    <section class='projects-section'>
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
                imgSrc={SocialButterfly}
              />
            </Col>
            <Col>
              <ProjectCard
                title='Social Butterfly'
                text='The messaging app of the future.'
                imgSrc={SocialButterfly}
              />
            </Col>
          </Row>
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
                imgSrc={SocialButterfly}
              />
            </Col>
            <Col>
              <ProjectCard
                title='Social Butterfly'
                text='The messaging app of the future.'
                imgSrc={SocialButterfly}
              />
            </Col>
          </Row>
    </section>
  );
};

export default Projects;
