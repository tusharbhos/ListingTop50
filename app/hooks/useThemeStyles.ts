"use client";

import { useTheme } from "../context/ThemeContext";

export function useThemeStyles() {
  const theme = useTheme();

  const getHeadingClass = (level: "h1" | "h2" | "h3") => {
    return theme.heading[level];
  };

  const getButtonClass = (variant: "primary" | "secondary" = "primary") => {
    if (variant === "primary") {
      return `bg-[--primary] hover:bg-[--hover-primary] text-white transition`;
    }
    return `border border-[--primary] text-[--primary] hover:bg-[--bg-light] transition`;
  };

  const getTextClass = (type: "primary" | "secondary" = "primary") => {
    if (type === "primary") {
      return "text-[--primary]";
    }
    return "text-[--text-light]";
  };

  const getBorderClass = (type: "primary" | "light" = "primary") => {
    if (type === "primary") {
      return "border-[--primary]";
    }
    return "border-[--border]";
  };

  const getBgClass = (type: "primary" | "light" = "primary") => {
    if (type === "primary") {
      return "bg-[--primary]";
    }
    return "bg-[--bg-light]";
  };

  const getGradientClass = () => {
    return "bg-gradient-to-r from-[--gradient-from] to-[--gradient-to]";
  };

  const getFocusClass = () => {
    return "focus:ring-[--focus] focus:border-[--focus]";
  };

  return {
    theme,
    getHeadingClass,
    getButtonClass,
    getTextClass,
    getBorderClass,
    getBgClass,
    getGradientClass,
    getFocusClass,
  };
}