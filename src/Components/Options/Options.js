import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cover from '../Cover/Cover';
import Option from '../Option/Option';

const Options = () => {
    const options= useLoaderData();
 
    return (
        <div>
            <div>
                <Cover></Cover>
            </div>
                   <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-2 lg:row-gap-8'>
{options.data.map((newOption)=>{
    
return <Option 
key={newOption.id}
newOption={newOption}

>


</Option>


})}
        
        </div>
   </div> 
        </div>

   );
};

export default Options;