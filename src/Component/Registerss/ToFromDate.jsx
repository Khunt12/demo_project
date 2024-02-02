import React from "react";

const ToFromDate = ({ fromDate, handleToDateChange, handleFormDateChange, toDate, handleSubmit, checkHobby, search }) => {
    return (
        <>
            <label htmlFor="from" style={{ paddingLeft: '50px', paddingRight: '5px' }}>From</label>
            <input type="date" value={fromDate} onChange={handleFormDateChange} />
            <label htmlFor="to" style={{ paddingLeft: '20px', paddingRight: '5px' }}>To</label>
            <input type="date" value={toDate} onChange={handleToDateChange} />
            <button onClick={() => { handleSubmit(checkHobby, fromDate, toDate, search) }} style={{ marginLeft: '5px' }}>Check</button>
        </>
    )
}
export default ToFromDate;