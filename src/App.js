import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import Layout from './Layout';
import PageNotFound from './Pages/PageNotFound';
import Homepage from './Pages/Homepage';
import Cartpage from './Pages/Cartpage';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout totalItems={cart.line_items} />}>
            <Route
              index
              element={
                <Homepage products={products} onAddToCart={handleAddToCart} />
              }
            />
            <Route
              path='carts'
              element={
                <Cartpage cart={cart} handleEmptyCart={handleEmptyCart} />
              }
            />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
