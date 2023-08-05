import React, { useEffect, useState } from "react";
import {

  fetchSkills,

} from "../data/sanity";
import TypingEffect from '../components/TypingEffect';

export const HomePage = ({ profileImage, profile }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const skillsData = await fetchSkills();

      setSkills(skillsData);
    };

    fetchData();
  }, []);

  const mapListItems = (items) => {
    return items.map((item, index) => <li key={index}>{item.title}</li>);
  };

  const skillsList = skills.map((skill, index) => {
    return (
      <div key={index}>
        <h4>{skill.title}</h4>
        <ul>{mapListItems(skill.skills)}</ul>
      </div>
    );
  });

  return (
    <main className='home page container'>
      {profileImage && <img src={profileImage} alt="Profile" />}
      {profile && <TypingEffect text={profile.bio} />}
      {skillsList}
    </main>
  );
};

export default HomePage;
