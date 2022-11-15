import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className='p-6 shadow-lg flex flex-wrap items-center justify-between'>
        <h2 className='text-5xl font-bold'>Shopping</h2>

        <div className='space-x-9 text-xl text-slate-500'>
          <Link to='/'>Home</Link>
          <Link to='/carts'>Cart</Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
