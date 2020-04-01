import React from "react";
import "../styles/body.css";
import users from "../../utils/user.json"

const EmployeeDisplay = (props) => {
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
    )
};

export default EmployeeDisplay;