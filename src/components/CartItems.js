import React from 'react';

const CartItems = ({ item }) => {
  return (
    <>
      <div className='container mx-auto mt-10'>
        <div className='flex shadow-md'>
          <div className='w-3/4 px-10 py-10'>
            <div className='flex items-center justify-between'>
              <img className='h-28 w-28' src={item.image.url} alt='' />
              <div>
                <h1 className='text-3xl'>{item.name}</h1>
                <h3 className='text-xl'>{item.price.formatted_with_symbol}</h3>
              </div>
              <div>
                <div className='flex'>
                  <button>+</button>
                  <p>{item.quantity}</p>
                  <button>-</button>
                </div>
                <div>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
