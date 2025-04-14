import React from "react";
import PropTypes from "prop-types";
import "./Space.scss";

const Space = ({ x, y }) => {
  return <div className="space" data-y={y} data-x={x} />;
};

Space.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};
export default Space;
