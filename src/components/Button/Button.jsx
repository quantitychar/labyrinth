import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
  const { type = "button", onClick, className, children, ...restProps } = props;

  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.className,
  children: PropTypes.any,
  restProps: PropTypes.object,
};

export default Button;
