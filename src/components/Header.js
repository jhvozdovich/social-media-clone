import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <React.Fragment>
      <NavBar />
      <SearchBar />
    </React.Fragment>
  );
}
export default Header;