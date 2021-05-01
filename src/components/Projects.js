import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import SocialButterfly from '../images/social-butterfly.png';
import recipeBook from '../images/recipe-book.png';
import madLibz from '../images/madlibz.png';

export const Projects = () => {
  return (
    <section class="projects-section">
      <Row>
        <Col>
          <ProjectCard
            title="Social Butterfly"
            text="  This is a messenger app for keeping in touch with friends and family and to me new people! This app allows the user to create an account, search users by username and add new contacts. The public chat allows each user to communicate with other members of the Social Butterfly Community. This app is built on a serverless architecture using React and Firebase."
            imgSrc={SocialButterfly}
            appLink="https://messenger-app-rsl.herokuapp.com/Login"
            repoLink="https://github.com/messenger-app-team/messenger-app"
          />
        </Col>
        <Col>
          <ProjectCard
            title="Recipe Book"
            text="An online recipe book to view sand save your favorite recipes. This is a Heroku app built using Node.js, Express, Handlebars, Sequelize, Passport and Materialize. The application allows the user to create an account, add recipes, view recipes, search stored recipes and print the recipe."
            imgSrc={recipeBook}
            appLink="http://arcane-peak-55315.herokuapp.com/login"
            repoLink="https://github.com/kurtp23/recipe-book"
          />
        </Col>
        <Col>
          <ProjectCard
            title="MadLibz!"
            text="This is a whimsical web application which allows a user create their own MadLibz story by entering a set of words or generated randomly based on part of speech!"
            imgSrc={madLibz}
            appLink="https://teammadlibz.github.io/MadLibz/"
            repoLink="https://github.com/TeamMadLibz/MadLibz/"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectCard
            title="Social Butterfly"
            text="The messaging app of the future."
            imgSrc={SocialButterfly}
            appLink=""
            repoLink=""
          />
        </Col>
        <Col>
          <ProjectCard
            title="Social Butterfly"
            text="The messaging app of the future."
            imgSrc={SocialButterfly}
            appLink=""
            repoLink=""
          />
        </Col>
        <Col>
          <ProjectCard
            title="Social Butterfly"
            text="The messaging app of the future."
            imgSrc={SocialButterfly}
            appLink=""
            repoLink=""
          />
        </Col>
      </Row>
    </section>
  );
};

export default Projects;
