import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import Feed from "./Feed";
import Friends from "./Friends";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div class="section">
        <LeftBar />
        <Feed />
        <Friends />
      </div>
    </React.Fragment>
  )
}

export default App;