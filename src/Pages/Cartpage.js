import React from 'react';

const Cartpage = ({ cart }) => {
  const isEmpty = true;

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

  return <div>{isEmpty ? <EmptyCart /> : <FilledCart />}</div>;
};

export default Cartpage;

