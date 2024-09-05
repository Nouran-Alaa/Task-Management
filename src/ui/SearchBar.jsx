import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/kanban/kanbanSlice";

function SearchBar() {
  const dispatch = useDispatch();

  return (
    <div className="flex h-3/6 w-full items-center justify-between gap-3 border px-2 md:w-[230px] md:border-0">
      <div className="relative flex h-4/5 grow items-center">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute right-2 text-sm text-gray-500"
        />
        <input
          placeholder="Search cards"
          className="h-full grow rounded-full bg-gray-200 pl-8 text-xs hover:outline-blue-400 focus:outline-blue-400 md:h-8 md:text-sm"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>
    </div>
  );
}

export default SearchBar;
