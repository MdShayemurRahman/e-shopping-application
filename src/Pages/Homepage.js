import React, { useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';
import ListItems from '../components/ListItems';
import Cartpage from '../Pages/Cartpage';
// import Category from '../components/Category';
// import Search from '../components/Search';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div className='flex justify-between'>
      {/* <Category /> */}

      <section>
        <ListItems products={products} onAddToCart={handleAddToCart} />
      </section>
      {/* <section>
        <Cartpage cart={cart} />
      </section> */}

      {/* <Search /> */}
    </div>
  );
};

export default Homepage;
