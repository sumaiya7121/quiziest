import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-blue-200 p-8 mt-3 hover:bg-blue-600 hover:text-white'>
                 <h1 className='font-bold text-3xl p-3'> What is the purpose of react router?</h1>
                 <p className='p-3'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>


                <div className='bg-blue-200 p-8 mt-3 hover:bg-blue-600 hover:text-white'>
                 <h1 className='font-bold text-3xl p-3'> How does context Api works?</h1>
                 <p className='p-3'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>


                        <div className='bg-blue-200 p-8 mt-3 hover:bg-blue-600 hover:text-white'>
                 <h1 className='font-bold text-3xl p-3'> Why we use useRef hook?</h1>
                 <p className='p-3'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object</p>
            </div>
            
        </div>
    );
};

export default Blog;