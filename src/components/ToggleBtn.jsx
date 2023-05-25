import React, { useState } from "react";
import classNames from "classnames";

export default function ToggleBtn() {
  const [isSelected, setIsSelected] = useState(false);

  
  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={classNames(
        "flex w-20 h-10 bg-gray-600 m-10 rounded-full transition-all duration-500",
        {
          "#26c360": isSelected,
        }
      )}
    >
      <span
        className={classNames(
          "h-10 w-10 bg-white rounded-full transition-all duration-500 shadow-lg",
          {
            "ml-10": isSelected,
          }
        )}
      />
    </div>
  );
}
