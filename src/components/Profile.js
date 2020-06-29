import React from "react";

function Profile() {
  return (
    <React.Fragment>
      <div class="profile-section">
        <div class="cover-photo">

        </div>
        <div class="profile-text">
          <p><em>Kellie A. Corrigan</em></p>
          <a href="/tweets">TWEETS</a>
          <a href="/following">FOLLOWING</a>
          <a href="/followers">FOLLOWERS</a>
        </div>
        <img alt="profile-pic"></img>

      </div>
    </React.Fragment>
  )
}

export default Profile;