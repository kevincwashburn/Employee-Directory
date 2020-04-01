import React from "react";
import "./styles/style.css";
// import users from "../../utils/users.json";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
// import axios from "axios";

class EmployeeWrapper extends Component {
    state = {
      employees: []
    }
    
    employees = event => {
      event.preventDefault();
      const newArray = this.state.employeeList.sort(this.compare);
      console.log(newArray);
      this.setState({
        employeeList: newArray
      })
    }
    render(props) {
      return(
        <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>

        {props.employees.map(employee => (
          <tr className="table-row">
            <td><img src={employee.picture.thumbnail} alt="headshot of {employee.name.first}" /></td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.dob.date}</td>
          </tr>
        ))}
      </table>
      );
    }
  }
  
  export default EmployeeWrapper;

  // ---------------------------------------------------------------------------------------

