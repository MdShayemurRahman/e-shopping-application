import React from 'react';

const Search = () => {
  return (
    <div>
      <form className='p-5'>
        <input
          type='text'
          name='name'
          placeholder=' Search Items'
          className='font-bold py-2 px-4 rounded border mx-5'
        />

        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Search;
