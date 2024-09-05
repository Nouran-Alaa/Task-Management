import Header from "./Header";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-white">
      <Header />
      <div className="flex h-24 w-full flex-col items-center justify-between md:h-16 md:flex-row md:border md:px-5">
        <NavLinks />
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;
