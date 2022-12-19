import React from 'react';

const CartItems = ({ item, onUpdateCart, onRemoveFromCart }) => {
  return (
    <>
      <div className='container mx-auto my-10'>
        <div className='flex shadow-md'>
          <div className='w-3/4 px-10 py-10'>
            <div className='flex items-center justify-between'>
              <img className='h-28 w-28' src={item.image.url} alt='' />
              <div>
                <h1 className='text-3xl'>{item.name}</h1>
                <h3 className='text-xl'>{item.price.formatted_with_symbol}</h3>
              </div>
              <div>
                <div className='flex items-center justify-between'>
                  <button
                    onClick={()=>onUpdateCart(item.id, item.quantity - 1)}
                    className='px-1 mx-2 bg-purple-400'
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={()=>onUpdateCart(item.id, item.quantity + 1)}
                    className='px-1 mx-2 bg-purple-400'
                  >
                    +
                  </button>
                </div>
                <div className='mt-3'>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className='mx-1 p-1 bg-red-400 rounded'
                  >
                    Remove
                  </button>
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
