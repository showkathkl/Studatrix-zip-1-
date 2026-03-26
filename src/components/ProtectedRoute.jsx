import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ allowedRole, children }) {

  // Get role safely and normalize
  const storedRole = localStorage.getItem("role");

  const role = storedRole ? storedRole.toLowerCase() : null;
  const allowed = allowedRole ? allowedRole.toLowerCase() : null;

  // If no role → not logged in
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  // If role mismatch → redirect to home
  if (role !== allowed) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;