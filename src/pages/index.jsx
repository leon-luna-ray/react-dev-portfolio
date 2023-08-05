import React, { useEffect, useState } from "react";
import {
  getImageUrl,
  fetchProfile,
  fetchSkills,
} from "../data/sanity";
import TypingEffect from '../components/TypingEffect';

export const HomePage = () => {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);

  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const profileData = await fetchProfile();
      const skillsData = await fetchSkills();

      setProfile(profileData);
      setSkills(skillsData);

      if (profileData?.image) {
        setProfileImage(getImageUrl(profileData.image).size(300, 300).url());
      }
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
