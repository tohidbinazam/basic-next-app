import React from 'react';

async function UserPost({ promise }) {
  const posts = await promise;
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default UserPost;
