import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import SocialButterfly from '../images/social-butterfly.png';
import recipeBook from '../images/recipe-book.png';
import madLibz from '../images/madlibz.png';
import eatDaBurger from "../images/eatdaburger.png";
import budgetTracker from "../images/budget-tracker.png";
import readmeGenerator from "../images/readme-generator.png";

export const Projects = () => {
  return (
    <section class='projects-section'>
      <Row>
        <Col>
          <ProjectCard
            title='Social Butterfly'
            text='  This is a messenger app for keeping in touch with friends and family and to me new people! This app allows the user to create an account, search users by username and add new contacts. The public chat allows each user to communicate with other members of the Social Butterfly Community. This app is built on a serverless architecture using React and Firebase.'
            imgSrc={SocialButterfly}
            appLink='https://messenger-app-rsl.herokuapp.com/Login'
            repoLink='https://github.com/messenger-app-team/messenger-app'
          />
        </Col>
        <Col>
          <ProjectCard
            title='Recipe Book'
            text='An online recipe book to view sand save your favorite recipes. This is a Heroku app built using Node.js, Express, Handlebars, Sequelize, Passport and Materialize. The application allows the user to create an account, add recipes, view recipes, search stored recipes and print the recipe.'
            imgSrc={recipeBook}
            appLink='http://arcane-peak-55315.herokuapp.com/login'
            repoLink='https://github.com/kurtp23/recipe-book'
          />
        </Col>
        <Col>
          <ProjectCard
            title='MadLibz!'
            text='This is a whimsical web application which allows a user create their own MadLibz story by entering a set of words or generated randomly based on part of speech!'
            imgSrc={madLibz}
            appLink='https://teammadlibz.github.io/MadLibz/'
            repoLink='https://github.com/TeamMadLibz/MadLibz/'
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectCard
            title='EatDaBurger'
            text='A fun burger ordering app! The user can order any burger they like. The burger will be saved in their burger queue and moved to the devoured side when the user clicks eat-da-burger! This is a Heroku app build with node.js.'
            imgSrc={eatDaBurger}
            appLink='https://burger-app-rluna.herokuapp.com/'
            repoLink='https://github.com/leon-luna-ray/burgers-app'
          />
        </Col>
        <Col>
          <ProjectCard
            title='Budget Tracker'
            text='A progressive web app for tracking your budget while travelling and on the go. This app allows the user to enter and track expenses both when the app is online or offline. The offline storage is done using a service worker file and manifest. The app will automatically update the app database as soon as the connection is restored.'
            imgSrc={budgetTracker}
            appLink='https://budget-tracker-rluna.herokuapp.com/'
            repoLink='https://github.com/leon-luna-ray/budget-tracker'
          />
        </Col>
        <Col>
          <ProjectCard
            title='Readme Generator'
            text='A command line application to seamlessly create a new ReadMe file for your projects quickly! This application will ask you all the right questions to generate a professional quality readme from the command line. As a developer this app saves me a lot of time!'
            imgSrc={readmeGenerator}
            appLink='https://www.youtube.com/watch?v=XI6C2lgj540'
            repoLink='https://github.com/leon-luna-ray/hw09-readme-generator'
          />
        </Col>
      </Row>
    </section>
  );
};

export default Projects;
