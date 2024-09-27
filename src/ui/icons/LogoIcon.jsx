import React from "react";
import { theme } from "../theme/default";
export const LogoIcon = ({ src = "Ucampus-logo.png", alt = "Ucampus Logo" }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={80}
      height="auto" // auto-adjust height to maintain aspect ratio
    />
  );
};