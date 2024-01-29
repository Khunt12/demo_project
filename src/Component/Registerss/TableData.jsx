import React, { useEffect, useState } from "react";
import { Educations, Genders } from "./test";
import { shallowEqual, useSelector } from "react-redux";
import UpDown from "./UpDown";

const TableData = ({ setForm, setEditIndex, setAllData }) => {
    const [sortOrders, setSortOrders] = useState({
        fname: "",
        lname: "",
        email: "",
        city: "",
        state: ""
    });

    const Pppp = useSelector(
        (state) => state.formData,
        shallowEqual
    );

    const { AllformData } = Pppp || [];

    const [newFormData, setNewfirmData] = useState([...AllformData])

    const handleEdit = (index) => {
        const editData = newFormData[index];
        setForm({ ...editData });
        setEditIndex(index);
        setAllData(newFormData)
    };

    const sortform = (vals, option) => {
        if (sortOrders[vals] === option) return
        setSortOrders((prevSortOrders) => {
            return { ...prevSortOrders, [vals]: option };
        });
        const updatedData = [...newFormData].sort((a, b) => {

            const nameA = a[vals].toUpperCase();
            const nameB = b[vals].toUpperCase();
            return option === "desc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });

        setNewfirmData(updatedData);
    };

    useEffect(() => {
        setNewfirmData([...AllformData])
    }, [AllformData])



    return (
        <>
            <h2>Register Data</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th >FirstName <br /><span >
                            <UpDown title={'fname'} sortOrders={sortOrders} sortform={sortform} />
                        </span></th>
                        <th >LastName<br /><span>
                            <UpDown title={'lname'} sortOrders={sortOrders} sortform={sortform} />
                        </span></th>
                        <th >Email <br /><span>
                            <UpDown title={'email'} sortOrders={sortOrders} sortform={sortform} />
                        </span></th>
                        <th>Mobile Number</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th >City<br /><span>
                            <UpDown title={'city'} sortOrders={sortOrders} sortform={sortform} />
                        </span></th>
                        <th>Pin-Code</th>
                        <th >State<br /><span>
                            <UpDown title={'state'} sortOrders={sortOrders} sortform={sortform} />
                        </span></th>
                        <th>Education</th>
                        <th>Hobby</th>
                        <th>Password</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {newFormData.map((data, index) => {
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
                                <td>{Object.keys(data.hobby).filter(() => data.hobby).join(', ')}</td>
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


