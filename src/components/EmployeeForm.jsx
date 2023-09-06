import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import uuid from "react-uuid";

import { useForm } from "./../hooks/useForm";
import { addEmployee, getEmployeeById } from "../service/localStorage";
import { editEmployee } from "../service/localStorage";
import "./EmployeeForm.css";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setshowAlert] = useState(false);
 

  
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    
    question: ""
   
  })

  useEffect(() => {
    if (id) {
      const employee = getEmployeeById(id);
      setForm(employee);
      
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id
      ? editEmployee(id, inputValues) 
      : addEmployee({ id: uuid(), ...inputValues });
    resetForm();
    setshowAlert(true);
  
    setTimeout(() => {
        window.location.reload();
      setshowAlert(false);
    }, 2000);
    
  };

  return (
    <div>
      <div className="d-flex my-5 justify-content-between">
       
        <h1 className="text-center">Creating a Questionnaire </h1>
        <div />
      </div>

      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            
            <input
              name="question"
              type="text"
              value={inputValues.question}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              placeholder="Enter Your Question?"
            />
          </div>

          

          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn1 ">
              {id ? "Edit" : "Add"} 
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div className="px-5">
          <div className="alert alert-success">
            <strong>Well done!</strong> {id ? "edited" : "added a new"} Question.
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;
