import React from "react";
import { Genders } from "./test";

const Gender = ({ register, formChange, form }) => {
    return (
        <>
            <label htmlFor="gender">Gender</label>
            <div className="col-90">
                {Object.keys(Genders).map((option) => (
                    <div key={option}>
                        <input
                            type="radio"
                            name="gender"
                            value={option}
                            {...register('gender', { required: 'Gender is required' })}
                            onChange={formChange}
                            checked={form.gender === option}
                        />
                        <label htmlFor={option}>{Genders[option]}</label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Gender





