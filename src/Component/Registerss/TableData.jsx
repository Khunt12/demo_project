import React from "react";
import '../Registerss/TableData.css'

import { Educations, Genders } from "./test";

const TableData = ({ formData, handleEdit }) => {


    return (
        <>
            <h2>Register Data</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Pin-Code</th>
                        <th>State</th>
                        <th>Education</th>
                        <th>Hobby</th>
                        <th>Password</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.email}</td>
                                <td>{data.moblie}</td>
                                <td>{Genders[data.gender]}</td>
                                <td>{data.dob}</td>
                                <td>{data.address}</td>
                                <td>{data.city}</td>
                                <td>{data.pin}</td>
                                <td>{data.state}</td>
                                <td>{Educations[data.education]}</td>
                                <td>{Object.keys(data.hobby).filter(key => data.hobby[key]).join(', ')}</td>
                                {console.log('hobby data', Object.keys(data.hobby).filter(key => data.hobby[key]).join(', '))}
                                <td>{data.pass}</td>
                                <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default TableData;

