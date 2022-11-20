import React from 'react';
import ListItems from '../components/ListItems';

const Homepage = ({products, onAddToCart}) => {
  return (
    <div className='flex justify-between'>
      <section>
        <ListItems products={products} onAddToCart={onAddToCart}  />
      </section>
    </div>
  );
};

export default Homepage;
