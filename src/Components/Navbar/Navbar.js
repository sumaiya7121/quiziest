import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-around bg-slate-900 h-10 items-center text-white'>
<div>
<h2 className='text-xl'><span className='text-blue-400 font-bold'>Qui</span>ziest</h2>
</div>

<div className='flex ml-2'>
<Link to="/home" className='ml-3 hover:bg-blue-600 px-2'>Home</Link>
<Link to="/topics" className='ml-3 hover:bg-blue-600 px-2'>Topics</Link>
<Link to='/statistics' className='ml-3  hover:bg-blue-600 px-2' >Statistics</Link>
<Link to='/blogs' className='ml-3  hover:bg-blue-600 px-2'>Blog</Link>

</div>



        </nav>

    );
};

export default Navbar;