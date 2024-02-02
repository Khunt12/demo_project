import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Password = ({ register, formChange, form, errors }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // password validation using if-else
    const handlePassword = (event) => {
        const new_pass = event.target.value;

        const lowerCase = /[a-z]/g;
        const upperCase = /[A-Z]/g;
        const speCharacter = /[!@#$%^&*]/g;
        const numbers = /[0-9]/g;

        if (!new_pass.match(lowerCase)) {
            setErrorMessage("Password should contain lowercase letters!");
        } else if (!new_pass.match(upperCase)) {
            setErrorMessage("Password should contain uppercase letters!");
        } else if (!new_pass.match(speCharacter)) {
            setErrorMessage("Password should contain one special character also!");
        } else if (!new_pass.match(numbers)) {
            setErrorMessage("Password should contain numbers also!");
        } else if (new_pass.length < 10) {
            setErrorMessage("Password length should be more than 10.");
        } else {
            setErrorMessage("");
        }
        formChange(event);
    };

    const eyeButton = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div>
            <label htmlFor="pass">Password </label>
            <input
                {...register("pass", { required: 'Password is required', })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="name"
                value={form.pass}
                onChange={handlePassword}
            />
            <button
                type="button"
                onClick={eyeButton}
                style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "5px",
                }}
            >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
            {errors && <span>{errors?.pass?.message}</span>}
            <div style={{ color: "red", fontSize: '10px', paddingLeft: '80px' }}>{errorMessage}</div>
        </div>
    );
};

export default Password;
