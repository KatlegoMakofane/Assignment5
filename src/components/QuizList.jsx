import React from 'react'
import QuizItem from './QuizItem';
import { useEffect, useState } from 'react';
import { getListEmployees } from '../service/localStorage';
import { useNavigate } from 'react-router-dom';

const QuizList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setEmployees(getListEmployees());
    }, []);
  return (
    <div>
         {
                employees.length > 0 ? (
                    <div className="card">
                      
                                { 
                                    employees.map(employee => <QuizItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                    
                                }
                       
                           
                    </div>
                ) : (
                    <div className="card">
                       <div  className='Member__container'>
                          <h3 className="text-center">No Questions</h3>
                       </div>
                    </div>
                )
            }
    </div>
  )
}

export default QuizList