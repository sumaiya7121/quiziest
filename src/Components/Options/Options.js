import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Option from '../Option/Option';

const Options = () => {
    const options= useLoaderData();
 
    return (
          <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-2 lg:row-gap-8'>
{options.data.map((newOption)=>{
    const{id,name,logo}=newOption;
return <Option 
key={id}
newOption={newOption}

>

  <div className='bg-gray-100 p-6 rounded shadow-lg'>
      <img
        className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={logo}
        alt=''
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>

      <Link to={name}
      
        className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
      >
        Start Quiz
      </Link>
    </div>

</Option>


})}
        
        </div>
   </div> );
};

export default Options;