import React, { useEffect, useState } from "react";
import {
  getImageUrl,
  fetchProfile,
  fetchGlobal
} from "./data/sanity";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/index.jsx";

import "./assets/styles/main.css";



function App() {
  // Todo set to global store
  const [profile, setProfile] = useState(null);
  const [global, setGlobal] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const profileData = await fetchProfile();
      const globalData = await fetchGlobal();

      setProfile(profileData);
      setGlobal(globalData);

      if (profileData?.image) {
        setProfileImage(getImageUrl(profileData.image).size(300, 300).url());
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <HomePage profileImage={profileImage} profile={profile} />
      <Footer />
    </>
  );
}

export default App;
