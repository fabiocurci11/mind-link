import React from 'react';

const InputUI = ({
  type = "text",
  id,
  name,
  placeholder = "",
  value,
  onChange,
  paddingProp = "px-3 py-2",
  bgColorProp = "bg-gray-700",
  borderProp = "border border-gray-600",
  shadowProp,
  widthProp = "w-full",
  textColorProp = "text-gray-100",
  roundedProp = "rounded",
  focusRingProp = "focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500",
}) => {

  const cssClasses = [
    widthProp,
    paddingProp,
    bgColorProp,
    textColorProp,
    borderProp,
    roundedProp,
    shadowProp,
    focusRingProp
  ]
    .filter(cls => cls !== undefined)
    .join(" ");

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cssClasses}
    />
  );
};

export default InputUI;
