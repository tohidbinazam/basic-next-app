import getUsers from '@/libs/getUsers';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Users page',
  description: 'This is the users page`',
};

async function User() {
  const data = await getUsers();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link href={`/user/${user.username}`}>
              <h3>{user.name}</h3>
            </Link>
            <h4>{user.email}</h4>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}

export default User;
