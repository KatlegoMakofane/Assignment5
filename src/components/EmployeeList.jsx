import React from 'react'
import EmployeeItem from './EmployeeItem'
import { useEffect, useState } from 'react';
import { getListEmployees } from '../service/localStorage';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
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
                                    employees.map(employee => <EmployeeItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                    
                                }
                       
                           
                    </div>
                ) : (
                    <div className="card">
                       <div  className='Member__container'>
                          <h3 className="text-center">No Members</h3>
                       </div>
                    </div>
                )
            }
    </div>
  )
}

export default EmployeeList