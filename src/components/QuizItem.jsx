import React, { useState, useEffect } from 'react';
import { getQuestionnaire,addquestionnaire} from '../service/localStorage';
import Dashboard from '../pages/Dashboard.css';

const QuizItem = ({ employee, }) => {
  const { id, question } = employee;
  
  const [selectedValue, setSelectedValue] = useState('');
  const questionnaires = JSON.parse(localStorage.getItem('employees')) || [];
  useEffect(() => {
    // Retrieve selected value from localStorage for this question
    const storedSelectedValue = localStorage.getItem(`selectedValue-${id}`) || '';
    setSelectedValue(storedSelectedValue);
   
    
  }, [id]);

  const handleRadioChange = (event) => {
    event.preventDefault();
    const newValue = event.target.value;
    setSelectedValue(newValue);

    //Save the selected value for this question to localStorage
    const QuestionnaireObj=[{ "id":id,
    "question": question,
    "option":newValue}]
      
  
    addquestionnaire(...QuestionnaireObj );
       
    

    
    localStorage.setItem(`selectedValue-${id}`, newValue);
 
    // Update the counts based on the new selected value
    updateCounts(newValue);
  };

  const updateCounts = (newValue) => {
    // Retrieve the current counts from localStorage

    let totalAgreeCount = JSON.parse(localStorage.getItem('totalAgreeCount')) || 0;
    let totalNeutralCount = JSON.parse(localStorage.getItem('totalNeutralCount')) || 0;
    let totalDisagreeCount = JSON.parse(localStorage.getItem('totalDisagreeCount')) || 0;
    let totalQuestions = questionnaires.length;
    // Update the counts based on the new value
    switch (newValue) {
      case 'agree':
        totalAgreeCount++;
        break;
      case 'neutral':
        totalNeutralCount++;
        break;
      case 'disagree':
        totalDisagreeCount++;
        break;
      default:
        break;
    }

    // Update local storage with the new counts
    localStorage.setItem('totalAgreeCount', totalAgreeCount.toString());
    localStorage.setItem('totalNeutralCount', totalNeutralCount.toString());
    localStorage.setItem('totalDisagreeCount', totalDisagreeCount.toString());
    localStorage.setItem('totalQuestions', totalQuestions);
    
  };

  return (
    <div className='Member__container'>
      <div className='leftside'>
        <div className='text__container'>
          <p>{question}</p>
        </div>
      </div>

      <div className='rightside'>
        <div className='create-container'>
          <div className='elements'></div>

         

          <div className='radio'>
            <label htmlFor={`agree-${id}`}>
              <input
                name={`question-${id}`}
                type='radio'
                id={`agree-${id}`}
                value='agree'
                checked={selectedValue === 'agree'}
                onChange={handleRadioChange}
              />
              Agree
            </label>
            <label htmlFor={`neutral-${id}`}>
              <input
                name={`question-${id}`}
                type='radio'
                id={`neutral-${id}`}
                value='neutral'
                checked={selectedValue === 'neutral'}
                onChange={handleRadioChange}
              />
              Neutral
            </label>
            <label htmlFor={`disagree-${id}`}>
              <input
                name={`question-${id}`}
                type='radio'
                id={`disagree-${id}`}
                value='disagree'
                checked={selectedValue === 'disagree'}
                onChange={handleRadioChange}
              />
              Disagree
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
