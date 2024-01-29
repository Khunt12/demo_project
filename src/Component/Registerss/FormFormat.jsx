import React from "react";
import { FullName, Location } from "./test";
import Email from "./Email";
import Mobile from "./Mobile";
import Gender from "./Gender";
import Dob from "./Dob";
import Address from "./Address";
import Education from './Eduction';
import Hobby from './Hobby'
import Password from "./Password";

const FormFormat = ({ formChange, form, storeDaata, test, handleSubmit, register, errors, setValue }) => {
    const shortCut = (valss) => {
        return (
            Object.keys(valss).map((op, key) => {
                return <>
                    <div key={key}>
                        <label htmlFor={op}>{valss[op]}</label>
                        <input
                            {...register(op, { required: `${valss[op]} is required` })}
                            placeholder={`Enter Your ${valss[op]}`}
                            onChange={formChange}
                            value={form[op]}
                            type="text"
                        />
                        {errors && <span>{errors[op]?.message}</span>}<br />
                    </div>
                </>
            }
            ))
    }
    return (
        <>
            <h1>Survey Form</h1>
            <form id="myForm" onSubmit={handleSubmit(storeDaata)}>

                {shortCut(FullName)}

                <Email register={register} form={form} formChange={formChange} errors={errors} />

                <Mobile register={register} form={form} formChange={formChange} errors={errors} />

                <Gender register={register} form={form} formChange={formChange} />

                <Dob register={register} form={form} formChange={formChange} errors={errors} />

                <Address register={register} form={form} formChange={formChange} errors={errors} />

                {shortCut(Location)}

                <Education register={register} form={form} formChange={formChange} errors={errors} />

                <Hobby form={form} test={test} />

                <Password register={register} form={form} formChange={formChange} errors={errors} />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default FormFormat;