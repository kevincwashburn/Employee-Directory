import React from "react";
import "../styles/body.css";

function Employee(props) {
    return (
        <tr>
            <td>
                <img src={props.picture} alt="" />
            </td>
            <td>{props.first}</td>
            <td>{props.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    )
}

export default Employee;