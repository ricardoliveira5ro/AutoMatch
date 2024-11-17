import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const ProtectedRoute = () => {

    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} state={{ forcedRedirect: false }} replace />
};