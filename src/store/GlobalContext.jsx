import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import {
    getImageUrl,
    fetchHomePage,
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
                const data = await fetchHomePage();
                
                setSkills(data?.skillsGroups);
                setProfile(data?.profile);
                setGlobal(data?.global);
                setProjects(data?.projects.projects);

                if (data?.profile.image) {
                    setProfileImage(getImageUrl(data?.profile.image).size(300, 300).url());
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
