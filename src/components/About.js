import React from 'react';
import { Card, Image } from 'react-bootstrap';
import ProfileImg from '../img/ray.jpg';

export const About = () => {
  return (
    <section className='about-section'>
      <Card>
        <h2>About Section</h2>

        {/* <Image src={ProfileImg} rounded /> */}
        <p>
          Hello world! I'm Ray. I'm a full-stack web developer and currently a
          student with University of Oregon's Coding Boot Camp. The reason I got
          into coding is because find it allows me to constantly challenge
          myself. I love to learn and I'm always looking for something new to
          expand my knowledge. I have an interest in both front-end and back-end
          development and learning new languages and technologies. Originally
          from Mexicali, Mexico and currently living in the Portland, Oregon
          metro area. My hobbies are cooking, language, travel and photography.
        </p>
      </Card>
    </section>
  );
};

export default About;
