import React from "react"

const UpDown = ({ title, sortOrders, sortform }) => {
    return (<>
        <button className={`buttonsss ${sortOrders[title] === "desc" ? "active" : ""}`} onClick={() => sortform(`${title}`, 'desc')}>⬆️</button>
        <button className={`buttonsss ${sortOrders[title] === "asc" ? "active" : ""}`} onClick={() => sortform(`${title}`, 'asc')}>⬇️</button>
    </>
    )
}
export default UpDown;