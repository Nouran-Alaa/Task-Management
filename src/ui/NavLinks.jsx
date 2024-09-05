import { NavLink } from "react-router-dom";

const style = {
  base: "flex h-full w-24 items-center justify-center font-bold",
  active: "border-b-2 border-b-black",
  notActive: " text-gray-500",
};

function NavLinks() {
  return (
    <ul className="flex h-3/6 w-full items-center border-t-2 pl-2 text-sm font-medium md:h-full md:border-none md:text-sm">
      <NavLink
        to="kanban"
        className={({ isActive }) =>
          `${style.base} ${isActive ? style.active : style.notActive}`
        }
      >
        Kanban
      </NavLink>
      <NavLink
        to="list"
        className={({ isActive }) =>
          `${style.base} ${isActive ? style.active : style.notActive}`
        }
      >
        List
      </NavLink>
    </ul>
  );
}

export default NavLinks;
