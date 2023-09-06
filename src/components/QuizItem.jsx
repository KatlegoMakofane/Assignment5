import React, { useState } from 'react'
import { removeEmployee } from '../service/localStorage';
import { getListEmployees } from '../service/localStorage';
import { useNavigate } from 'react-router-dom';


const QuizItem = ({ employee }) => {
    const { id,question,} = employee;

    console.log(employee);
   const [array,setArray]=useState([]);
   let counter=0;

    
   function handleOnchange( value){
        // console.log(value);
    //   array[counter]=value
        setArray([counter[array], value]);
      counter++
  }
console.log(array)
const handleSubmit = (e,id,question,value) => {
    e.preventDefault();
  localStorage.setItem("The data",id,question,value)
}
  return (
  <div>
   
    <div  className='Member__container'>
        
          
        <div className='leftside'>
          
               <div className='text__container'>
                     
                    <p>{ question}</p>
               </div>
                 
              
        </div>
       
        <div className='rightside'> 
                  {/* <h1>Radiobuttons</h1> */}
                  <input 
                    type="radio"
                    name={id}
                    value="agree"
                    onChange={()=>handleOnchange("agree")}
                  />
                  <input 
                    type="radio"
                    name={id}
                    value="neutral"
                    onChange={()=>handleOnchange("neutral")}
                  />
                  <input 
                    type="radio"
                    name={id}
                    value="disagree"
                    onChange={()=>handleOnchange("disagree")}
                  />

              </div>
        
                  
     
     
    </div>
   
    
    </div>
  )
}

export default QuizItem


