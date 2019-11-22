import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="text-center m-3 text0primary">Loading..........</h2>;
  }
  return (
    <ul className="lost-group">
      {posts.map(post => (
        <li key={post.id} className="list-group-item text-center">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
