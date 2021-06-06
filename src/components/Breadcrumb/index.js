import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Breadcrumb({ list }) {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {list?.map?.((item, index) => {
            const arias =
              index === list?.length ? { "aria-label": "current-page" } : {};
            return (
              <li key={item.url}>
                <Link to={item.url} {...arias}>
                  {item.name}
                </Link>
              </li>
            );
          })}

          <li>
            <Link to="/">Office Room</Link>
          </li>
          <li>
            <Link to="/" aria-label="current-page">
              Details
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Breadcrumb;

Breadcrumb.propTypes = {
  list: propTypes.array.isRequired,
};
