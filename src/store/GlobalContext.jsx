import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import {
    fetchProfile,
    fetchGlobal,
    fetchSkills,
    fetchFeaturedProjects,
} from "../lib/api";

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
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

    const contextValue = {
        profile,
        global,
        profileImage,
        skills,
        projects,
        error,
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
}
