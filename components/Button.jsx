"use client";
import { useState } from "react";

const CustomButton = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: "4rem",
    paddingBlock: "1rem",
    borderRadius: "5rem",
    border: isHovered ? "2px solid #f7bcf3" : "2px solid #0b0b0b",
    backgroundColor: isHovered ? "#f7bcf3" : "transparent",
    transition: "background-color 1s ease-in",
    color: isHovered ? "white" : "black",
    transition: "transform 0.3s ease-in-out",
    transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
};

export default CustomButton;
