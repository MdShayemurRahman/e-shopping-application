import React from 'react';

const Items = (props) => {
  const { id, image, name, price, description, onAddToCart } = props;
  const removeTags = (str) => {
    if (str === null || str === '') return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, '');
  };

  return (
    <div className='m-4 w-72 max-w-sm rounded overflow-hidden shadow-lg bg-slate-400'>
      <img className='w-full h-60' src={image} alt='product' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-gray-700 text-base'>{price} €</p>
        <p>{removeTags(description)}</p>

        <button
          onClick={() => onAddToCart(id, 1)}
          className='my-2 p-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Items;
