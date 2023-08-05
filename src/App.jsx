import React, { useEffect, useState } from "react";

import {
  getImageUrl,
  fetchProfile,
  fetchGlobal,
  fetchSkills,
  fetchFeaturedProjects,
} from "./lib/api";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/index.jsx";

import "./assets/styles/main.css";

function App() {
  // Todo set to global store
  const [profile, setProfile] = useState(null);
  const [global, setGlobal] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await fetchProfile();
        const globalData = await fetchGlobal();
        const skillsData = await fetchSkills();
        const projectsData = await fetchFeaturedProjects();

        setSkills(skillsData);
        setProfile(profileData);
        setGlobal(globalData[0]);
        setProjects(projectsData);

        if (profileData?.image) {
          setProfileImage(getImageUrl(profileData.image).size(300, 300).url());
        }
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching data.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <NavBar developer={profile?.name} title={global?.title} />
      <HomePage profileImage={profileImage} profile={profile} skills={skills} projects={projects} />
      <Footer />
    </>
  );
}

export default App;