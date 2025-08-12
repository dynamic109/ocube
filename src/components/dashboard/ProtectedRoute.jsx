import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const userData = JSON.parse(localStorage.getItem("user data"));
  const token = localStorage.getItem("token");
  const isAuthenticated = Boolean(userData || token);
  const location = useLocation();
  console.log(isAuthenticated, location.pathname);

  if (
    isAuthenticated &&
    (location.pathname === "/dashlogin" || location.pathname === "/signin")
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/Dashlogin" replace />;
  }
}
