import React, { useEffect, useState } from "react";
import TableData from './TableData';
import '../Css/Register.css'

const Register = () => {
    const formatData = {
        name: '',
        moblie: '',
        email: '',
        pass: ''
    }
    const [form, setForm] = useState(formatData)
    const [formData, setFormData] = useState([])
    const [editIndex, setEditIndex] = useState(null);
    // console.log(formData);
    const formChange = (event) => {
        const { value, name } = event.target;
        setForm(preVal => ({
            ...preVal,
            [name]: value
        }))
    };
    const storeDaata = (event) => {
        event.preventDefault();
        if (!form) {
            alert('Please fill up remaining field')
        } else {
            if (editIndex !== null) {
                const updatedData = [...formData];
                updatedData[editIndex] = form;
                setFormData(updatedData);
                setEditIndex(null)
                console.log('updated data', updatedData);
            } else {
                const reForm = { ...form };
                setFormData([...formData, reForm]);
                console.log('register data', reForm);
            }
            setForm(formatData);
        }
    }
    const handleEdit = (index) => {
        const editData = formData[index];
        setForm({ ...editData });
        setEditIndex(index);
    };
    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(formData))
    }, [formData])
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Register Form</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input onChange={formChange} value={form.name} name="name" placeholder="Enter Your name" type="text" />
                <label htmlFor="email123">Email</label>
                <input onChange={formChange} value={form.email} name="email" placeholder="Enter email" type="email" />
                <label htmlFor="moblie">Mobile No.</label>
                <input onChange={formChange} value={form.moblie} name="moblie" placeholder="Enter number" type="tel" maxLength='10' />
                <label htmlFor="password">Password</label>
                <input onChange={formChange} value={form.pass} type="password" name="pass" placeholder="Enter your password" autoComplete='name' />
                <button type="submit" onClick={storeDaata}>Submit</button >
            </form >
            <TableData formData={formData} handleEdit={handleEdit} />
        </>
    )
}
export default Register;