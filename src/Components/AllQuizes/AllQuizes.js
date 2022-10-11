import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuestionLayout from '../QuestionLayout/QuestionLayout';

const AllQuizes = ({questionOne}) => {

    // console.log(questionOne);

const{correctAnswer, question ,options,id} = questionOne;
const [correct ,setCorrect] = useState([]);
const [allCorrect, setAllCorrect] =useState(0);
const[wrong,setWrong]=useState(0);
const singleQuiz =questionOne.options;


const handleClick = (option) =>{

    if(option===correctAnswer)
    { 

     toast.success('Wow your answer is correct!',{autoClose:500});
       
    

    }
        else{
        toast.error('Oops your answer is incorrect!',{autoClose:500})
    

    }


}


const showCorrectAnswer=(singleQuiz)=>{
    console.log('clicked')

const quiz= singleQuiz.find(oneQuiz=>oneQuiz === correctAnswer);
console.log(quiz)
setCorrect(quiz);

toast(quiz, {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
}


    return (
        <div>

              
            <div className='card w-9/12 mx-auto bg-base-100 shadow-xl m-10'>
                
                <div className='card-body'>
                   <div className='flex justify-between'>
                     <div  className='text-center text-blue-900 p-4 font-bold text-2xl'>
                      
                        Qusetion: {question}
                   
                    </div>
                    <div>
                       <EyeIcon onClick={()=>showCorrectAnswer(singleQuiz)} className="h-6 w-6 text-blue-500" />
                    </div>
                   </div>

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