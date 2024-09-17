import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="mb-4 text-muted">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back to Home
      </Link>
    </div>
  );
};
