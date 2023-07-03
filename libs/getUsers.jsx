import axios from 'axios';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  if (!response.status === 200) {
    throw new Error('Failed to fetch users');
  }
  return response.data;
}

export default getUsers;
