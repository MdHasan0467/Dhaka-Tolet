import Link from "next/link";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <Link className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" href='/'>Home</Link>
      <Link className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" href='/addProperty'> + Add Property</Link>
      <Link className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" href='/about'>About</Link>
      <Link className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" href='/login'>Login</Link>
      </ul>
    </div>

    <div className="text-xl flex">
      <img className="w-12 h-12 mx-3 mt-1" src="https://i.ibb.co/N7dvq64/TD-logo-removebg-preview.png" alt="" />
      <div>
      <p className="font-semibold text-2xl">Dhaka Tolet</p>
      <p className="text-sm text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
        House Rent Solution
      </p>

      </div>
      </div>
  </div>

  <div className="navbar-center hidden lg:flex">
    <div className="flex">
    <Link className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" href='/'>Home</Link>
    <Link className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" href='/addProperty'> + Add Property</Link>
    <Link className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" href='/about'>About</Link>
    <Link className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" href='/login'>Login</Link>
    </div>
  </div>
  <div className="navbar-end">
    <a className="btn bg-blue-500 hover:bg-blue-600 text-white">Login</a>
  </div>
</div>
    );
};

export default Navbar;