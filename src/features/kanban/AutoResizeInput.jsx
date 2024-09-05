import { useState, useRef, useEffect } from "react";
import { colorText, colorOutline } from "../../helper/helper";

function AutoResizeInput({ value, onTitleChange, color }) {
  const [inputWidth, setInputWidth] = useState(0);
  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth + 25);
    }
  }, [value]);

  return (
    <div>
      <span
        ref={spanRef}
        className="invisible absolute whitespace-pre"
        style={{ fontSize: "inherit", fontFamily: "inherit" }}
      >
        {value || ""}
      </span>
      <input
        type="text"
        value={value}
        onChange={onTitleChange}
        style={{ width: inputWidth }}
        maxLength={15}
        className={`rounded px-2 py-1 text-base font-semibold ${colorText[color] || "text-gray-500"} ${colorOutline[color] || "text-gray-500"} h-[26px]`}
      />
    </div>
  );
}

export default AutoResizeInput;
