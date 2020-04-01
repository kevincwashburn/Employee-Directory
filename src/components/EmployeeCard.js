import React from "react";
import "../styles/body.css";
// import users from "../utils/users.json"

function EmployeeCard(props) {
    return (
        <tr>
            <td>
                <img src={props.picture} alt="" />
            </td>
            <td>{props.first} {props.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    )
}

export default EmployeeCard;