import React, { useState } from "react";

const Dob = ({ register, formChange, form, errors }) => {
    const [errorMsg, setErrorMsg] = useState("");
    const newDate = new Date().toISOString().split('T')[0];


    //for validation in Date of Birth
    const handleDate = (event) => {
        const oldDate = event.target.value;
        if (newDate < oldDate) {
            setErrorMsg('Date is invalide')
        } else {
            setErrorMsg('')
        }
        formChange(event)
    }
    return (
        <>
            <label htmlFor="dob">Date of Birth</label>
            <input
                type="date"
                name="dob"
                {...register("dob", { required: 'Date of Birth is required' })}
                onChange={handleDate}
                value={form.dob}
            />
            <div style={{ color: "red", fontSize: '12px', paddingLeft: '80px' }}>{errorMsg}</div>
            {errors && <span>{errors?.dob?.message}</span>}

        </>
    )
}
export default Dob