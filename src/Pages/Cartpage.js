import React from 'react';
import CartItems from '../components/CartItems';

const Cartpage = ({
  cart,
  handleEmptyCart,
  handleRemoveFromCart,
  handleUpdateCartQty,
}) => {
  const EmptyCart = () => (
    <>
      <div className='container mx-auto mt-10'>
        <div className='flex shadow-md my-10'>
          <div className='w-3/4 bg-white px-10 py-10'>
            <div className='flex justify-between'>
              <h1 className='font-semibold text-2xl'>No items on the cart</h1>
              <h2 className='font-semibold text-2xl'>0 Items</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const FilledCart = () => (
    <>
      <div className='container mx-auto mt-10'>
        <div className='flex shadow-md bg-slate-200'>
          <div className='w-3/4 px-10 py-10'>
            <div className='flex justify-between'>
              <h1 className='font-semibold text-2xl'>Your Cart Items</h1>
              <h1 className='font-semibold text-2xl'>
                {cart.line_items.length}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {cart.line_items.map((item) => (
        <CartItems
          item={item}
          key={item.id}
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}

      <div className='container mx-auto mt-10'>
        <div className='flex shadow-md bg-slate-300'>
          <div className='w-3/4 px-10 py-10'>
            <div className='flex justify-between'>
              <h1 className='font-semibold text-2xl'>
                Subtotal: {cart.subtotal.formatted_with_symbol}
              </h1>

              <div>
                <button className='mx-4 p-3 bg-blue-400 rounded'>
                  Checkout
                </button>
                <button
                  className='mx-4 p-3 bg-red-400 rounded'
                  onClick={handleEmptyCart}
                >
                  Remove All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return 'Loading...';

  return <div>{!cart.line_items.length ? <EmptyCart /> : <FilledCart />}</div>;
};

export default Cartpage;
