import React from "react";
import { Link } from "react-router-dom";
import UserLayout from "../../Layouts/UserLayout";

const Error = () => {
  return (
    <UserLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            Oops! Page not found.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We can’t seem to find the page you’re looking for.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Go back home
          </Link>
        </div>
      </div>
    </UserLayout>
  );
};

export default Error;
