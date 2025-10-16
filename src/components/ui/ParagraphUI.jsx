import React from 'react';

const PUI = ({
  textProp,
  textColor = "",
  fontWeight = "font-normal",
  textSize = "text-base",
  align = "",
  extraClasses = "mb-4"
}) => {

  const cssClasses = [
    textColor,
    fontWeight,
    textSize,
    align,
    extraClasses
  ]
    .filter(Boolean)
    .join(" "); // <-- importantissimo: separa le classi con SPAZIO

  return (
    <p className={cssClasses}>
      {textProp}
    </p>
  );
};

export default PUI;
