import { Outlet, Link } from 'react-router-dom';

const Layout = ({ totalItems }) => {
  
  return (
    <>
      <nav className='p-6 shadow-lg flex flex-wrap items-center justify-between'>
        <h2 className='text-5xl font-bold'>Shopping</h2>

        <div className='space-x-9 text-xl text-slate-500'>
          <Link to='/'>Home</Link>
          <Link to='/carts'>
            Cart
            <span className='inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full'>
              {totalItems?.length}
            </span>
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
