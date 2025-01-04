//example usage in React project

/* Button component reusable */

import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";

const CustomButton = forwardRef(
  (
    {
      children,
      onClick,
      variant = "primary",
      size = "medium",
      disabled = false,
      className,
      style,
      ...otherProps
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const buttonStyles = {
      padding: size === "small" ? "8px 12px" : "10px 20px",
      borderRadius: "4px",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background-color 0.2s ease-in-out",
      ...style,
    };

    const variantStyles = {
      primary: {
        backgroundColor: isHovered ? "#007bff" : "#0069d9",
        color: "white",
      },
      secondary: {
        backgroundColor: isHovered ? "#6c757d" : "#6c757d",
        color: "white",
      },
      tertiary: {
        backgroundColor: "transparent",
        color: "#007bff",
        border: "1px solid #007bff",
      },
    };

    return (
      <button
        ref={ref}
        className={`custom-button ${className}`}
        style={{ ...buttonStyles, ...variantStyles[variant] }}
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["small", "medium"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default CustomButton;

/* ************* USAGE *************** */

//Usage  Part

import CustomButton from "./CustomButton";

function MyComponent() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <CustomButton onClick={handleClick}>Primary Button</CustomButton>
      <CustomButton variant="secondary">Secondary Button</CustomButton>
      <CustomButton variant="tertiary">Tertiary Button</CustomButton>
    </div>
  );
}
