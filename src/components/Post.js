import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    // const imgSrc = { props.icon };
    <React.Fragment>
      <div class="post-div">
        <div class="post-icon">{props.icon}</div>
        <p class="post-username">{props.userName}</p>
        <p class="post-text">{props.text}</p>
      </div>
    </React.Fragment >
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  moreText: PropTypes.string
}
export default Post;