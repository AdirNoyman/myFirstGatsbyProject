import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/blog/">
            Blog
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/products/">
            Products
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/examples/">
            Examples
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/images/">
            Images
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
