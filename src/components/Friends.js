import React from 'react';
import PropTypes from "prop-types";

function Friends(props) {
  return (
    <React.Fragment>
      <div class="friend-div">
        <div class="friend-icon">{props.icon}</div>
        <p class="friend-username">{props.userName}</p>
        <button class="button">Button</button>
      </div>
    </React.Fragment >
  )
}

Friends.propTypes = {
  userName: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}

export default Friends;