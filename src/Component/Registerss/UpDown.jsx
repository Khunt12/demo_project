import React from "react"

const UpDown = ({ title, sortOrders, sortform, activeField }) => {
    const isActive = activeField === title;

    return (<>
        <button className={`buttonsss ${isActive && sortOrders[title] === "desc" ? "active" : ""}`} onClick={() => sortform(`${title}`, 'desc')}>⬆️</button>
        <button className={`buttonsss ${isActive && sortOrders[title] === "asc" ? "active" : ""}`} onClick={() => sortform(`${title}`, 'asc')}>⬇️</button>
    </>
    )
}
export default UpDown;


