import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuestionLayout from '../QuestionLayout/QuestionLayout';

const AllQuizes = ({questionOne}) => {

    // console.log(questionOne);

const{correctAnswer, question ,options,id} = questionOne;
const [correct ,setCorrect] = useState(0);

const handleClick = (option) =>{

    if(option===correctAnswer)
    {
       toast.success('Wow your answer is correct!',{autoClose:500})
         setCorrect(correct+1);

    }
        else{
        toast.error('Oops your answer is incorrect!',{autoClose:500})

    }


}


	
   
    return (
        <div>
            <div className='card w-9/12 mx-auto bg-base-100 shadow-xl m-10'>
                
                <div className='card-body'>
                    <h2 className='text-center text-blue-900 p-4 font-bold text-2xl'>
                        Qusetion: {question}
                    </h2>
                    <p>
                        {options.map((option)=>(
                            <QuestionLayout key={id} option={option} 
                            correctAnswer={correctAnswer}
                            handleClick={handleClick}


                            ></QuestionLayout>
                        ))}
                    </p>
                </div>

            </div>
         
        </div>
    );
};

export default AllQuizes;