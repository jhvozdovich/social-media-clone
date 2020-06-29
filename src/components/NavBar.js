import React from "react";

function NavBar() {
  return (
    <React.Fragment>
      <div class="navbar">
        <a class="navbar-tab" href="/">Home</a>
        <a class="navbar-tab" href="/notifications">Notifications</a>
        <a class="navbar-tab" href="/messages">Messages</a>
      </div>
    </React.Fragment>
  );
}

export default NavBar;