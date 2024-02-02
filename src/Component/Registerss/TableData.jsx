import React, { useEffect, useState } from "react";
import { Educations, Genders } from "./test";
import { shallowEqual, useSelector } from "react-redux";
import UpDown from "./UpDown";
import Search from "./Search";
import ToFromDate from "./ToFromDate";
import moment from "moment";
import CheckHobby from "./CheckHobby";

const TableData = ({ setForm, setEditIndex, setAllData }) => {
    const [sortOrders, setSortOrders] = useState({
        fname: "",
        lname: "",
        email: "",
        city: "",
        state: "",
    });
    const Pppp = useSelector(
        (state) => state.formData,
        shallowEqual
    );
    const { AllformData } = Pppp || [];
    const [newFormData, setNewFormData] = useState([...AllformData]);
    const [activeField, setActiveField] = useState("");
    const [search, setSearch] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [checkHobby, setCheckHobby] = useState([]);

    //for data search
    const handleSearchChange = (event) => {
        const values = event.target.value;
        setSearch(values);
        handleSearch(checkHobby, fromDate, toDate, values)
    };

    // sorting in date using from and to
    const handleFormDateChange = (event) => {
        setFromDate(event.target.value);
    };
    const handleToDateChange = (event) => {
        setToDate(event.target.value);
    };
    const handleSubmit = (checkHobby, fromDate, toDate, search) => {
        handleSearch(checkHobby, fromDate, toDate, search)
    };

    //sorting in hooby using dropdown
    const handleCheck = (event) => {
        const vals = Array.from(event.target.selectedOptions, (option) => option.value.toLowerCase());
        setCheckHobby(vals);
        handleSearch(vals, fromDate, toDate, search)
    };

    //common function for text,  date and hobby search perform method 
    const handleSearch = (checkHobby, fromDate, toDate, search) => {
        // debugger
        let filteredData = [...AllformData];
        if (search) {
            filteredData = filteredData.filter((data) => {
                return search.toLowerCase() === '' ?
                    true :
                    Object.values(data).some((value) =>
                        value && typeof value === 'string' && value.toLowerCase().includes(search))
            })
            setNewFormData([...filteredData])
        }
        if (fromDate && toDate) {
            filteredData = filteredData.filter((data) =>
                moment(data.dob).isBetween(moment(fromDate), moment(toDate))
            );
            setNewFormData(filteredData);
        }
        if (checkHobby.length > 0) {
            filteredData = filteredData.filter((data) =>
                checkHobby.some((value) =>
                    Object.keys(data.hobby).includes(value)
                )
            );
            setNewFormData([...filteredData]);
        }
        if (!search && !fromDate && !toDate && !checkHobby.length) setNewFormData(AllformData)
    }

    // using edit button
    const handleEdit = (index) => {
        const editData = newFormData[index];
        setForm({ ...editData });
        setEditIndex(index);
        setAllData(newFormData);
    }

    //for sorting decending and asecening order
    const sortform = (vals, option) => {
        if (sortOrders[vals] === option) return;
        setSortOrders((prevSortOrders) => {
            return { ...prevSortOrders, [vals]: option };
        });
        setActiveField(vals);
        const updatedData = [...newFormData].sort((a, b) => {
            const nameA = a[vals].toUpperCase();
            const nameB = b[vals].toUpperCase();
            return option === "desc"
                ? nameA.localeCompare(nameB)
                : nameB.localeCompare(nameA);
        });
        setNewFormData(updatedData);
    };

    // reset serach, hobby, and date field
    const handleReset = () => {
        setSearch('')
        setFromDate('')
        setToDate('')
        setCheckHobby('')
        setSortOrders('')
        setNewFormData(AllformData)
    }

    // add data in current state
    useEffect(() => {
        setNewFormData([...AllformData])
    }, [AllformData]);

    return (
        <>
            <h2>Search Data</h2>
            <button onClick={handleReset}>🔁</button>
            <Search handleSearchChange={handleSearchChange} search={search} />
            <ToFromDate fromDate={fromDate} handleToDateChange={handleToDateChange} handleFormDateChange={handleFormDateChange} toDate={toDate} handleSubmit={handleSubmit} search={search} checkHobby={checkHobby}
            />
            <CheckHobby handleCheck={handleCheck} checkHobby={checkHobby} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th >FirstName <br /><span ><UpDown title='fname' activeField={activeField} sortOrders={sortOrders} sortform={sortform} /></span></th>
                        <th >LastName<br /><span><UpDown title='lname' activeField={activeField} sortOrders={sortOrders} sortform={sortform} /></span></th>
                        <th >Email <br /><span><UpDown title='email' activeField={activeField} sortOrders={sortOrders} sortform={sortform} /></span></th>
                        <th>Mobile Number</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th >City<br /><span><UpDown title='city' activeField={activeField} sortOrders={sortOrders} sortform={sortform} /></span></th>
                        <th>Pin-Code</th>
                        <th >State<br /><span><UpDown title='state' activeField={activeField} sortOrders={sortOrders} sortform={sortform} /></span></th>
                        <th>Education</th>
                        <th>Hobby</th>
                        <th>Password</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {newFormData.map((data, index) => (
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
                            <td>
                                <input type={'password'} value={data.pass} style={{ background: "#E9FFFF", borderStyle: 'none', textAlign: 'center' }} />
                            </td>
                            <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
export default TableData