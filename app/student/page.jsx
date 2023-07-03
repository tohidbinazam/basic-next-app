'use client';

import axios from 'axios';
import { useState } from 'react';

function Student() {
  const [input, setInput] = useState({
    name: '',
    age: '',
    skill: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      'http://localhost:3000/api/student',
      input
    );
    console.log(response.data);
  };

  return (
    <>
      <h3>Student Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          onChange={handleInput}
        />
        <input
          type='number'
          placeholder='Age'
          name='age'
          onChange={handleInput}
        />
        <input
          type='text'
          placeholder='Skill'
          name='skill'
          onChange={handleInput}
        />

        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default Student;
