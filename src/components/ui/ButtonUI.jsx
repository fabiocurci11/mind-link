import React from 'react';

const ButtonUI = ({
  textProp,                // Testo del bottone
  type = "button",         // Tipo di bottone (submit, button, reset)
  paddingProp = "py-2 px-6",
  bgColorProp = "bg-yellow-500",
  textColorProp = "text-white",
  borderProp,
  roundedProp = "rounded",
  shadowProp,
  hoverProp = "hover:bg-yellow-600",
  focusRingProp = "focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500",
  fontSizeProp = "text-lg",
  fontWeightProp = "font-medium",
  cursorPointerProp = "cursor-pointer",
  widthProp
}) => {

  const cssClasses = [
    paddingProp,
    bgColorProp,
    textColorProp,
    borderProp,
    roundedProp,
    shadowProp,
    hoverProp,
    focusRingProp,
    fontSizeProp,
    fontWeightProp,
    cursorPointerProp,
    widthProp
  ]
    .filter(cls => cls !== undefined)
    .join(" ");

  return (
    <button
      type={type}           // ← aggiunto qui!
      className={cssClasses}
    
    >
      {textProp}
    </button>
  );
};

export default ButtonUI;
