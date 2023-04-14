import React from "react";
import { fetchProfile } from "../data/sanity";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css";

// Todo move this to global state (redux)
const profile = await fetchProfile();

export const Contacts = () => {
  return (
    <section className="contacts-section">
      <Container>
        <Row>
          <Col>
            <div className="card contact-card text-dark bg-light mb-3">
              <div className="card-body">
                <h5 className="card-title">E-Mail </h5>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card contact-card text-dark bg-light mb-3">
              <div className="card-body">
                <h5 className="card-title">Github </h5>
                <a href={profile.github} target="_blank">
                  {profile.github_user}
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="card contact-card text-dark bg-light mb-3">
              <div className="card-body">
                <h5 className="card-title">Linkedin </h5>
                <a href={profile.linkedin} target="_blank">
                  {profile.linkedin_user}
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card contact-card text-dark bg-light mb-3">
              <div className="card-body">
                <h5 className="card-title">Website</h5>
                <a href={profile.website} target="_blank">
                  {profile.website_name}
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
