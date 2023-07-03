import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.nextUrl);
  const name = searchParams.get('name');
  const age = searchParams.get('age');
  const data = Object.fromEntries(searchParams.entries());
  console.log(data);
  return NextResponse.json({ meg: 'OK' });
}
export async function POST(request) {
  const data = await request.json();
  return NextResponse.json(data);
}
export async function PATCH() {
  return new Response('Hello World!');
}
export async function PUT() {
  return new Response('Hello World!');
}
export async function DELETE() {
  return new Response('Hello World!');
}
