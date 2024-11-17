import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: (forcedRedirect: boolean) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
  
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (email: string, password: string) => {
        // Reset value
        localStorage.removeItem("user_access_token");
        
        fetch("http://localhost:8080/api/users/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(async response => {
            const result = await response.json();

            if (response.ok) {
                localStorage.setItem("user_access_token", result.token)
                setIsAuthenticated(true);
                navigate('/profile');
                return;
            }

            const error = result || "Unknown error"

            return Promise.reject(error)
        })
        .catch(error => {
            alert(error.message)
        });
    }

    const logout = (forcedRedirect: boolean) => {
        setIsAuthenticated(false);
        localStorage.removeItem("user_access_token");
        navigate('/home', { state: { forcedRedirect: forcedRedirect } });
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}