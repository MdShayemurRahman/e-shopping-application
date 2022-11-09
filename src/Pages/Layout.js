import { Outlet, Link } from 'react-router-dom';

import Category from '../components/Category';

const Layout = () => {
  return (
    <>
      <nav className='p-6 shadow-lg flex items-center space-x-96'>
        <h2 className='text-5xl font-bold'>Shopping</h2>

        <div className='space-x-9 text-xl text-slate-500'>
          <Link to='/'>Home</Link>
          <Link to='/carts'>Cart</Link>
        </div>

        <div className='space-x-9 text-xl text-slate-500'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link to='/login'>Login</Link>
          </button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link to='/logout'>Log Out</Link>
          </button>
        </div>
      </nav>

      <Category />

      <Outlet />
    </>
  );
};

export default Layout;
