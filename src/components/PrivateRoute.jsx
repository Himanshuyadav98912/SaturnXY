// components/PrivateRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const isAdminRoute = location.pathname.startsWith("/admin");
  if (isAdminRoute && !user.isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
