import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuizes from '../AllQuizes/AllQuizes';


const Quiz = () => {
    const allQuiz= useLoaderData();
    // console.log(allQuiz);

    const {data} =allQuiz;
    const{questions} =data;

    // console.log(questions);
    

       
  
return <div>
      
    <div className='card w-9/12 mx-auto bg-base-100 shadow=xl'>
        <div className='card-body'>
            <h2 className='text-center text-blue-500 mt-5 text-3xl font-bold'>
                Questions of {data.name}
                
            </h2>
        
            {questions.map((questionOne)=>(
                <AllQuizes key={questionOne.id} 
                questionOne={questionOne}></AllQuizes>
            ))}
        </div>
    </div>

</div>;

}
export default Quiz;