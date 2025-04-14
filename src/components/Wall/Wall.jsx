import React from "react";
import PropTypes from "prop-types";
import "./Wall.scss";

const Wall = ({ x, y }) => {
  return <div className="wall" data-y={y} data-x={x} />;
};

Wall.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};
export default Wall;
