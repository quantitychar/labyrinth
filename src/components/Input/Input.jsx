import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = (props) => {
  const { type = "text", inputRef, name, label, ...restProps } = props;

  return (
    <label className="input-wrapper">
      <span className="label">{label}</span>
      <input type={type} ref={inputRef} name={name} {...restProps} />
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
