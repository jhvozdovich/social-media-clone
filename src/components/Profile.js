import React from "react";
import ProfilePic from "../img/ProfilePic.png";

function Profile() {
  return (
    <React.Fragment>
      <div class="profile-section">
        <div class="cover-photo">
          <img id="profile-pic" alt="profile-pic" src={ProfilePic}></img>

        </div>
        <div class="profile-text">
          <p id="userName">Kellie A. Corrigan</p>
          <a href="/tweets" class="profile-links">TWEETS</a>
          <a href="/following" class="profile-links">FOLLOWING</a>
          <a href="/followers" class="profile-links">FOLLOWERS</a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile;