import React from "react";

const Footer = () => (
  <div className="mt-24">
    <p className="py-7 text-center text-sm text-gray-400 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Shoppy. All rights reserved.
    </p>
  </div>
);

export default Footer;
