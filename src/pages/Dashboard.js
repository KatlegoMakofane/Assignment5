import React from 'react'
import "./Dashboard.css"
const Dashboard = () => {

    let totalAgreeCount = JSON.parse(localStorage.getItem('totalAgreeCount')) || 0;
    let totalNeutralCount = JSON.parse(localStorage.getItem('totalNeutralCount')) || 0;
    let totalDisagreeCount = JSON.parse(localStorage.getItem('totalDisagreeCount')) || 0;
    const questionnaires = JSON.parse(localStorage.getItem('employees')) || [];
    let totalQuestions = questionnaires.length;
  return (
    <div>
      
      <div className='containers'>
           <div  className='container1'>
              <h1>Number of Questions</h1>
              <p>{totalQuestions}</p>
           </div>
           <div  className='container1'>
             <h1>Agreements</h1>
              <p>{totalAgreeCount}</p>
           </div>
           <div  className='container1'>
                <h1>Disadgreements</h1>
               <p>{totalDisagreeCount}</p>
           </div>
           <div  className='container1'> 
           <h1>Neutral</h1>
              <p>{totalNeutralCount}</p></div>
           
      </div>
    </div>
  )
}

export default Dashboard