import React from "react";
import { getImageUrl, fetchProfile, fetchSkills } from "../data/sanity";
import { Card, Image, Container, Row, Col } from "react-bootstrap";


// Refactor to pull on lifecycle hook and set to state
const profile = await fetchProfile();
const skills = await fetchSkills();

export const HomePage = () => {
  const profileImage = getImageUrl(profile.image).size(300, 300).url();

  const mapListItems = (items) => {
    return items.map((item) => <li>{item.title}</li>);
  };

  const skillsList = skills.map((skill) => {
    return (
      <Col>
        <h4>{skill.title}</h4>
        <ul>{mapListItems(skill.skills)}</ul>
      </Col>
    );
  });

  return (
    <main className='home page'>
      <Card>
        <Container className="card-container">
          <Row>
            <Col className="card-title">
              <h2 className="text-center">About Me</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Image src={profileImage} thumbnail fluid />
            </Col>
            <Col>
              <Row>
                <Col>
                  <p>{profile.bio}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Skills</h3>
                </Col>
              </Row>
              <Row>{skillsList}</Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </main>
  );
};

export default HomePage;
