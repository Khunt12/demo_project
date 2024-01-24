import React, { useState } from "react";
import '../Css/Register.css'
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import TableData from './Registerss/TableData';
import FormFormat from "./Registerss/FormFormat";
import { useDispatch } from "react-redux";

const Register = () => {
    const formatData = {
        fname: '',
        lname: '',
        moblie: '',
        email: '',
        gender: '',
        dob: '',
        address: '',
        city: '',
        pin: '',
        state: '',
        education: '',
        hobby: {},
        pass: '',
    }

    const [_form, setForm] = useState(formatData)
    const [formData, setFormData] = useState([])
    const [editIndex, setEditIndex] = useState(null);
    const dispatch = useDispatch()

    // console.log(formData);
    const formChange = (event) => {
        const { value, name, checked } = event.target;
        setForm((prevForm) => {
            if (name === 'hobby') {
                return {
                    ...prevForm,
                    hobby: {
                        ...prevForm.hobby,
                        [value]: checked,
                    },
                };
            } else {
                return {
                    ...prevForm,
                    [name]: value,
                };
            }
        });
    };

    const newCheck = (para) => {
        const forms = document.getElementById('myForm');
        const elements = forms.elements;
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.type === 'radio' || element.type === 'checkbox') {
                element.checked = para;
            }
        }
    }
    const storeDaata = () => {
        let finalUpdate = []
        if (editIndex !== null) {
            const updatedData = [...formData];
            updatedData[editIndex] = _form;
            setFormData(updatedData);
            finalUpdate = updatedData
            setEditIndex(null)
            console.log('updated data', _form);
        } else {
            const reForm = { ..._form };
            setFormData([...formData, reForm]);
            finalUpdate = [...formData, reForm]
            console.log('register data', reForm);
        }
        setForm(formatData);
        newCheck(false)

        dispatch({
            type: 'UPDATE_FORM_DATA',
            payload: finalUpdate
        })
    }

    const handleEdit = (index) => {
        const editData = formData[index];
        setForm({ ...editData });
        setEditIndex(index);

    };

    const test = (e) => {
        let testData = { ..._form }
        const { value, name, checked } = e.target;
        if (name === "hobby") testData[name][value] = checked;
        if (name === 'gender') testData[name] = value
        setForm(testData)
    }
    const { register, control, handleSubmit, formState: { errors }, setValue } = useForm();
    return (
        <>
            <FormFormat formChange={formChange} form={_form} storeDaata={storeDaata} test={test} register={register}
                handleSubmit={handleSubmit} errors={errors} setValue={setValue} />
            <DevTool control={control} />
            <TableData formData={formData} handleEdit={handleEdit} />
        </>
    )
}

export default Register;



