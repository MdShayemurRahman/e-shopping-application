import React from 'react';
import Items from './Items';

const ListItems = ({ products, onAddToCart }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {products.map((product) => (
        <Items
          key={product.id}
          id={product.id}
          image={product.image.url}
          name={product.name}
          price={product.price.raw}
          description={product.description}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ListItems;
