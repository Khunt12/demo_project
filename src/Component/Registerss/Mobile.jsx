import React from "react";

const Mobile = ({ register, formChange, form, errors }) => {

    return (
        <>
            <label htmlFor="moblie">Mobile No.</label>
            <input
                {...register("moblie", {
                    required: 'Mobile number is required',
                    pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Invalid mobile number',
                    },
                })}
                placeholder="Enter Your Contact"
                onChange={formChange}
                value={form.moblie}
                type="tel"
                maxLength="10"
            />
            {errors && <span>{errors?.moblie?.message}</span>}<br />
        </>
    )

}
export default Mobile