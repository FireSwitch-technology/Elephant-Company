import React from "react";

const Navlistitems = (nav) => {
  return (
    <div>
      {/* navitems */}
      <ul>
        <li>
          <a
            href={nav.link}
            className=" text-white hover:text-blue-100 text-base font-display font-normal"
          >
            {" "}
            {nav.name}{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navlistitems;
