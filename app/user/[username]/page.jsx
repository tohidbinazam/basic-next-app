import getSingleUser from '@/libs/getSingleUser';
import getUserPost from '@/libs/getUserPost';
import Link from 'next/link';
import React, { Suspense } from 'react';
import UserPost from './components/UserPost';

export async function generateMetadata({ params }) {
  const user = await getSingleUser(params.username);

  return {
    title: user.name,
    description: `This is the page for ${user.name}`,
  };
}
async function Username({ params }) {
  const user = await getSingleUser(params.username);
  // const posts = await getUserPost(user.id);

  // const [user, posts] = await Promise.all([
  //   getSingleUser(params.username),
  //   getUserPost(2),
  // ]);

  return (
    <>
      <h1>Name:{user.name} </h1>
      <h3>Name:{user.email} </h3>
      <h3>Name:{user.phone} </h3>
      <h3>Name:{user.website} </h3>
      <Link href='/user'> Back </Link>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <UserPost promise={getUserPost(user.id)} />
      </Suspense>
    </>
  );
}

export default Username;
