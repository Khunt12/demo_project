import React from "react";

const Email = ({ register, form, formChange, errors }) => {

    return (
        <>
            <label htmlFor="email">Email</label>
            <input
                {...register("email", {
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address',
                    },
                })}
                value={form.email}
                placeholder="Enter E-mail"
                onChange={formChange}
                type="email"
            />
            {errors && <span>{errors?.email?.message}</span>}<br />
        </>
    )

}
export default Email