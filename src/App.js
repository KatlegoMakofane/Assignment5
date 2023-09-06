
import './App.css';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Questionnaire from './pages/Questionnaire';
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import EmployeeItem from './components/EmployeeItem';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
      <Router>
        <Sidebar>
           <Routes>
                 <Route exact path='/'                element={<Dashboard/>} />
                 <Route exact path='/Create'          element={<Create/>}/>
                 <Route exact path='/Questionnaire'   element={<Questionnaire/>} />
                 <Route path='/'                     element={<EmployeeList/>}/>
                 <Route path="/create-employee"       element={<EmployeeForm/>}  />
                 <Route path="/edit-employee/:id"   element={<EmployeeForm/>}/>
                
           </Routes>
          </Sidebar>
      </Router>
  );
}

export default App;
