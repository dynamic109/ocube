import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, loginRoute }) {
  const token = localStorage.getItem("token");
  if (loginRoute) {
    if (token) {
      return <Navigate to="/dashboard" replace />;
    }
    return children;
  }
  if (!token) {
    return <Navigate to="/Dashlogin" replace />;
  }
  return children;
}
