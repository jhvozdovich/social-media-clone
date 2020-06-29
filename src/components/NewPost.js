import React from 'react';

function NewPost() {
  return (
    <React.Fragment>
      <div class="new-post">
        <div id="red-box"></div>
        <form action="/action_page.php">
          <input class="post-box" type="text" placeholder="WTF is happening?!" name="search"></input>
        </form>
      </div>
    </React.Fragment>
  )
}

export default NewPost;