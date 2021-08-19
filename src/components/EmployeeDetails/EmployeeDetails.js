import './EmployeeDetails.css';
import logo from './../../logo.svg';
import React from 'react';
function EmployeeDetailsComponent() {
  const [employeeData, setEmployeeData] = React.useState(null);

  React.useEffect(()=>{
    fetch('/getEmployee')
    .then(res => res.json())
    .then(result => {
      setEmployeeData(result.data)});
  })
  
  
    return  (
      <div className="EmployeeDetail">
        <div className="EmployeeContainer">
          <div className="EmployeeInfo">
            <div className="Employee">
              <label>Employee Id</label>
              <input></input>
             
              <label>Employee Name</label>
              {employeeData &&  <label id="EmployeeName">{employeeData.name}</label>}
            
              <label>Company Name</label>
              <label id="CompanyName">Company</label>
            </div>
            </div>
          <div className="EmployeeImage">
              <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
  
  export default EmployeeDetailsComponent;