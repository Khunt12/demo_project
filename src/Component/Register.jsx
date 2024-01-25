
import React, { useState } from "react";
import '../Css/Register.css'
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import TableData from './Registerss/TableData';
import FormFormat from "./Registerss/FormFormat";
import { useDispatch } from "react-redux";
import { formatData } from "./Registerss/test";

const Register = () => {


    const [_form, setForm] = useState(formatData)
    const [formData, setFormData] = useState([])
    const [editIndex, setEditIndex] = useState(null);
    const [allData, setAllData] = useState([]);
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
        if (editIndex !== null) {
            const updatedData = [...allData];

            updatedData[editIndex] = _form;
            setFormData(updatedData);
            setEditIndex(null);
            dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: updatedData,
            });
            console.log('updated data', _form);
        } else {
            const reForm = { ..._form };
            setFormData([...formData, reForm]);
            dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: [...formData, reForm],
            });
            console.log('register data', reForm);
        }
        setForm(formatData);
        newCheck(false);
    };

    const test = (e) => {
        let testData = { ..._form };
        const { value, name, checked } = e.target;
        if (name === "hobby") {
            testData[name] = {
                ...testData[name],
                [value]: checked,
            };
        } else if (name === 'gender') {
            testData[name] = value;
        } else {
            testData[name] = value;
        }
        setForm(testData);
        newCheck(false);
    };


    const { register, control, handleSubmit, formState: { errors }, setValue } = useForm();
    return (
        <>
            <FormFormat formChange={formChange} form={_form} storeDaata={storeDaata} test={test} register={register}
                handleSubmit={handleSubmit} errors={errors} setValue={setValue} />
            <DevTool control={control} />
            <TableData formData={formData} setEditIndex={setEditIndex} setForm={setForm} setAllData={setAllData} />
        </>
    )
}

export default Register;



