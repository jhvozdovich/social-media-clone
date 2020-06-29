import React from 'react';
import NewPost from './NewPost';
import PostList from './PostList';

function Feed() {
  return (
    <React.Fragment>
      <div class="feed-section">
        <NewPost />
        <PostList />
      </div>
    </React.Fragment>
  )
}

export default Feed;