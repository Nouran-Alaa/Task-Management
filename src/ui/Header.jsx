import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Header() {
  const [title, setTitle] = useState("Team Task Management");
  return (
    <div className="flex w-full items-center justify-between p-2 lg:p-3">
      <div className="flex items-center gap-5 lg:w-1/2">
        <img src="../images/logo.png" className="hidden w-[85px] md:block" />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-25 pl-4 text-sm font-semibold hover:outline-stone-400 focus:outline-blue-400 lg:w-1/2 lg:text-lg"
        />
      </div>
      <div className="flex w-20 items-center justify-center gap-3 lg:gap-6">
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="cursor-pointer"
        ></FontAwesomeIcon>

        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-blue-300">
          KB
        </div>
      </div>
    </div>
  );
}

export default Header;
