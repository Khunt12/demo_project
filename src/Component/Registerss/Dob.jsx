import React from "react";

const Dob = ({ register, formChange, form, errors }) => {
    return (
        <>
            <label htmlFor="dob">Date of Birth</label>
            <input
                type="date"
                name="dob"
                {...register("dob", { required: 'Date of Birth is required' })}
                onChange={formChange}
                value={form.dob}
            />
            {errors && <span>{errors?.dob?.message}</span>}<br />
        </>
    )
}
export default Dob