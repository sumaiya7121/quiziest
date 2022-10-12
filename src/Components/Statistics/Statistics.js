import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis,
  YAxis
} from "recharts";


export default function Statistics() {
    const data=useLoaderData();
    console.log(data.data)
    
  return (
<div className='flex justify-center mt-20 flex-col items-center'>
    <div><h1 className='font-bold text-blue-500 text-3xl p-5 mb-8'>Line chart of total number of each quizes</h1></div>


    <div className='px-10 mx-10'>   
        
        
         <LineChart 
      width={500}
      height={300}
      data={data.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="total"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="total" stroke="#82ca9d" />
    </LineChart></div>
</div>
  );
}