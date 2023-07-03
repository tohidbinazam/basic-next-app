import axios from 'axios';

async function getSingleUser(username) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users?username=${username}`
  );
  if (!response.status === 200) {
    throw new Error('Failed to fetch users');
  }

  return response.data[0];
}

export default getSingleUser;
