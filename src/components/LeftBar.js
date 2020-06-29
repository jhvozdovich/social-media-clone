import React from "react";
import Profile from "./Profile";
import Description from "./Description";

function LeftBar() {
  return (
    <React.Fragment>
      <div class="left-bar">
        <Profile />
        <Description />
      </div>
    </React.Fragment>
  )
}

export default LeftBar;