import React from 'react';
import { Link } from 'react-router-dom';


const Option = ({newOption}) => {
const{id,name,logo,total}=newOption;
  
   
    return (


 <div>
   
     <div className='bg-blue-100 p-6 rounded shadow-lg'>
    <div className='flex items-center justify-center'>  <img
        className='w-100  h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={logo}
        alt=''
      /></div>
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl text-blue-900'>{name}</p>
      <p className='text-2xl text-blue-400'>Total Questions: {total}</p>

      <Link to={`${id}`}
        type='button'
        className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-blue-400 text-gray-800 hover:bg-cyan-400'
      >
        Start Quiz
      </Link>
    </div>
 </div>
    );
};

export default Option;