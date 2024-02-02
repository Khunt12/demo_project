import React from "react";
import Select from "react-select";
import '../Registerss/CheckHobby.css'

const CheckHobby = ({ handleCheck, checkHobby }) => {
    const optionList = [
        { value: "sport", label: "Sport" },
        { value: "dance", label: "Dance" },
        { value: "leader", label: "Leader" }
    ];
    const handleChange = (selectedOptions) => {
        const selectedValues = selectedOptions.map(option => option.value.toLowerCase());
        handleCheck({ target: { selectedOptions: selectedOptions, value: selectedValues } });
    };
    return (
        <>
            <div className="app">
                <h3>Select Hobby</h3>
                <div className="dropdown-container">
                    <Select
                        options={optionList}
                        placeholder="Select Hobby"
                        value={optionList.filter(opt => checkHobby.includes(opt.value))}
                        onChange={handleChange}
                        isSearchable={true}
                        isMulti
                    />

                </div>
            </div>
        </>
    );
};

export default CheckHobby;

