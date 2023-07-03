import axios from 'axios';

async function getUserPost(userId) {
  const posts = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (posts.status !== 200) {
    throw new Error('Failed to fetch user Post');
  }
  return posts.data;
}

export default getUserPost;
