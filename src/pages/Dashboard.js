import React from 'react'
import "./Dashboard.css"
const Dashboard = () => {
  return (
    <div>Dashboard Page
      <div className='containers'>
           <div  className='container1'>
              <h1>Number of Questions</h1>
              <p>458</p>
           </div>
           <div  className='container1'>
             <h1>Agreements</h1>
              <p>48</p>
           </div>
           <div  className='container1'>
                <h1>Disadgreements</h1>
               <p>148</p>
           </div>
           <div  className='container1'> 
           <h1>Neutral</h1>
              <p>350</p></div>
           
      </div>
    </div>
  )
}

export default Dashboard