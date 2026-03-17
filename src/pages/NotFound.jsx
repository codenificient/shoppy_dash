import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center p-8">
    <h1 className="mb-2 text-6xl font-bold text-gray-300 dark:text-gray-600">
      404
    </h1>
    <p className="mb-6 text-xl text-gray-500 dark:text-gray-400">
      Page not found
    </p>
    <Link
      to="/"
      className="rounded-lg bg-cyan-500 px-6 py-2 text-white hover:bg-cyan-600"
    >
      Back to Dashboard
    </Link>
  </div>
);

export default NotFound;
