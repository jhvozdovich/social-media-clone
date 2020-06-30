import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import Feed from "./Feed";
import FriendList from "./FriendList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div class="section">
        <LeftBar />
        <Feed />
        <div class="friend-section">
          <FriendList />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;