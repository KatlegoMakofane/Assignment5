import Questionnaire from "../pages/Questionnaire";

export const getListEmployees = () => {
    if (!localStorage["employees"]) {
      localStorage["employees"] = "[]";
    }
  
    let employees = localStorage["employees"];
    employees = JSON.parse(employees);
    return employees;
  };
  
  export const addEmployee = (employee) => {
    const employees = getListEmployees();
    employees.push(employee);
    localStorage["employees"] = JSON.stringify(employees);
  };
  
  export const removeEmployee = (id) => {
    let employees = getListEmployees();
    employees = employees.filter((employee) => employee.id !== id);
    localStorage["employees"] = JSON.stringify(employees);
  };
  
  export const getEmployeeById = (id) => {
    const employees = getListEmployees();
    const employee = employees.find((employee) => employee.id === id);
    
    return employee;
  };
  
  export const editEmployee = (id, newEmployee) => {
    let employees = getListEmployees();
    employees = employees.filter((employee) => employee.id !== id);
    
    employees.push(newEmployee);
    console.log("details",newEmployee)
    localStorage["employees"] = JSON.stringify(employees);
  };

  export const getQuestionnaire = () => {
    if (!localStorage["questionnaire"]) {
      localStorage["questionnaire"] = "[]";
    }
  
    let questionnaires = localStorage["questionnaire"];
    questionnaires= JSON.parse(questionnaires);
    return questionnaires;
  };

  export const addquestionnaire = (questionnairre ) => {
    const questionnaire  =  getQuestionnaire();
    questionnaire .push(questionnairre);
    localStorage["questionnaire"] = JSON.stringify(questionnaire );
  };