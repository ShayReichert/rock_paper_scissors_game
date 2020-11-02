import React from "react";

const Attributions = ({ name }) => {
  return (
    <div className="attribution">
      Challenge by&nbsp;
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="shayreichert.com">{name}</a>.
    </div>
  );
};

export default Attributions;
