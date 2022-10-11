import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuizes from '../AllQuizes/AllQuizes';


const Quiz = () => {
    const allQuiz= useLoaderData();
    console.log(allQuiz);

    const {data} =allQuiz;
    const{questions} =data;

    console.log(questions);

       
  
return <div>{questions.options.map((question) => <AllQuizes
key={question.id}
question={question}

>


</AllQuizes>
)}

</div>;

}
export default Quiz;