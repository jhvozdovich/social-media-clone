import React from 'react';
import Friend from "./Friends";
import PeachIcon from "../img/PeachIcon.png";
import TealIcon from "../img/TealIcon.png";
import BrownIcon from "../img/BrownIcon.png";
import LightGreenIcon from "../img/LightGreenIcon.png";

const masterFriendList = [
  {
    userName: 'Lorem ipsum',
    icon: <img class="post-profile-pic" src={PeachIcon} alt="post profile pic" />,
  },
  {
    userName: 'Lorem ipsum',
    icon: <img class="post-profile-pic" src={TealIcon} alt="post profile pic" />,
  },
  {
    userName: 'Lorem ipsum',
    icon: <img class="post-profile-pic" src={BrownIcon} alt="post profile pic" />,
  },
  {
    userName: 'Lorem ipsum',
    icon: <img class="post-profile-pic" src={LightGreenIcon} alt="post profile pic" />,
  },
]

function FriendList() {
  return (
    <React.Fragment>
      <p class="friend-title">Zombie Lorem ipsum</p>
      {masterFriendList.map((post, index) =>
        <Friend userName={post.userName}
          icon={post.icon}
          key={index} />
      )}
    </React.Fragment >
  )
}

export default FriendList;