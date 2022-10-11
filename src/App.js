import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Error from './Components/ErrorElement/Error';
import Options from './Components/Options/Options';
import Quiz from './Components/Quiz/Quiz';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router =createBrowserRouter([

    {
      path:'/',
      element:<Main></Main> ,
      errorElement:<Error></Error> ,
      children:[  


{

path:'/',
      loader: async()=>{
return fetch('https://openapi.programming-hero.com/api/quiz');
      },
element:<Options></Options>

},

{
path:'/:id',
loader:async ({params})=>{
return fetch (`https://openapi.programming-hero.com/api/quiz/${params.id}`)
},
element:<Quiz></Quiz>

},

{
path:'/',
element:<Topics></Topics>

},
{
  path:'statistics',
  loader: async()=>{
return fetch('https://openapi.programming-hero.com/api/quiz');
      },
  element:<Statistics></Statistics>
},

{
  path:'blogs',
  element:<Blog></Blog>
}



        
      ]


      
    }




  ])
  return (
    <div className="App">
 <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
