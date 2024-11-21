import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="text-center py-16">
    <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
    <p className="mt-4 text-lg">The page you're looking for doesn't exist.</p>
    <Link to="/" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded">
      Back to Home
    </Link>
  </div>
);

export default NotFoundPage;
