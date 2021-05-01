import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import SocialButterfly from '../images/social-butterfly.png';
import recipeBook from '../images/recipe-book.png';
import madLibz from '../images/madlibz.png';

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
                title='Recipe Book'
                text='The messaging app of the future.'
                imgSrc={recipeBook}
              />
            </Col>
            <Col>
              <ProjectCard
                title='MadLibz!'
                text='The messaging app of the future.'
                imgSrc={madLibz}
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
