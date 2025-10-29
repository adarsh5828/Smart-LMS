import { createContext, useContext, useState } from "react";
import axios from 'axios';

const AuthContext = createContext();
const backendURL = import.meta.env.VITE_BACKEND_URL;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // login user
    const login = async (email, password) => {
        try {
            const { data } = await axios.post(backendURL + "/api/auth/login", {email, password});
            // save into state
            console.log("token", data)
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data)); // storing user info in local storage
        } catch (error) {
            console.error("Login failed: ", error);
        }
    };

    // logout
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // removing user info from local storage
    }

    return <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);