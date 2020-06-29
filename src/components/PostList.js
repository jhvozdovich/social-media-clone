import React from 'react';
import Post from "./Post";
import PeachIcon from "../img/PeachIcon.png";
import TealIcon from "../img/TealIcon.png";
import BrownIcon from "../img/BrownIcon.png";
import MultipleIcon from "../img/MultipleIcon.png";

const masterPostList = [
  {
    userName: 'Lorem ipsum',
    icon: <img class="post-profile-pic" src={PeachIcon} alt="post profile pic" />,
    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
  },
  {
    userName: 'Lorem ipsum',
    icon: <img class="post-profile-pic" src={PeachIcon} alt="post profile pic" />,
    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.",
    moreText: "Lorem ipsum"
  },
  {
    userName: 'Lorem ipsum',
    icon: <img class="post-profile-pic" src={TealIcon} alt="post profile pic" />,
    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
  },
  {
    userName: 'Lorem ipsum',
    icon: <img class="post-profile-pic" src={BrownIcon} alt="post profile pic" />,
    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
  },
  {
    userName: 'Lorem ipsum',
    icon: <img class="post-profile-pic" src={MultipleIcon} alt="post profile pic" />,
    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
  }
]

function PostList() {
  return (
    <React.Fragment>
      <hr />
      {masterPostList.map((post, index) =>
        <Post userName={post.userName}
          icon={post.icon}
          text={post.text}
          moreText={post.moreText}
          key={index} />
      )}
    </React.Fragment>
  )
}

export default PostList;