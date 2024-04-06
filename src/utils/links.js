import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const link = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "Chi siamo",
  },
  {
    url: "/contact",
    text: "Contattaci",
  },
];

const LinkComponent = ({ classLink }) => {
  const { closeSidebar } = useGlobalContext();
  return (
    <ul className={classLink}>
      {link.map((link) => {
        return (
          <Link
            key={link.text}
            to={link.url}
            className="nav-items"
            onClick={closeSidebar}
          >
            <div className="nav-link">
              <h5 className="nav-text">{link.text}</h5>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export { LinkComponent };
