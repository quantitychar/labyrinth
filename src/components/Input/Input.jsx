import React from "react";
import "./Input.scss";
import PropTypes from "prop-types";

const Input = (props) => {
  const { type = "text", name, label, ...restProps } = props;

  return (
    <label className="input-wrapper">
      <span className="label">{label}</span>
      <input type={type} name={name} {...restProps} />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  restProps: PropTypes.object,
};

export default Input;
