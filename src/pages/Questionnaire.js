import React from 'react'
import EmployeeList from '../components/EmployeeList'
import QuizList from '../components/QuizList'
import { useNavigate, useParams } from "react-router-dom";
import "./Dashboard.css"
const Questionnaire = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center">Questionnaire</h1>
      <QuizList/>
      <button className='btn' onClick={() => navigate("/")} >Submit</button>
      </div>
  )
}

export default Questionnaire