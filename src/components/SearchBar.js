import React from "react";

function SearchBar() {
  return (
    <React.Fragment>
      <div class="search-container">
        <form action="/action_page.php">
          <input class="search-box" type="text" placeholder="Search" name="search"></input>
          <input class="search-box tweet" type="text" placeholder="Tweet" name="search"></input>
        </form>
      </div>
      <br />
      <br />
      <br />
      <hr />
    </React.Fragment>
  );
}

export default SearchBar;