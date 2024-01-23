import React from "react";

const Address = ({ register, formChange, form, errors }) => {
    return (
        <>
            <label htmlFor="address">Address</label>
            <textarea

                {...register("address", { required: 'Address is required' })}
                value={form?.address}
                cols="25"
                rows="3"
                onChange={formChange}
                placeholder="Enter Your Address"
            />
            {errors && <span>{errors?.address?.message}</span>}<br />
        </>
    )
}
export default Address;


