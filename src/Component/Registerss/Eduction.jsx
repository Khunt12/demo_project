import React from "react";
import { Educations } from "./test";

const Education = ({ register, formChange, form, errors }) => {
    return (
        <>
            <label htmlFor="education">Education</label>
            <select
                value={form.education}
                {...register("education", { required: 'Education is required' })}
                onChange={formChange}>
                {Object.keys(Educations).map((ed) => (
                    <option value={ed}>{Educations[ed]}</option>
                ))}
            </select>
            {errors && <span>{errors?.education}</span>}<br />
        </>
    )
}
export default Education




