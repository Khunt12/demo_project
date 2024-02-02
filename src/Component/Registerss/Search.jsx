import React from "react";

const Search = ({ search, handleSearchChange }) => {

    return (
        <>
            <input
                name="search"
                type="text"
                placeholder="Search.."
                value={search}
                onChange={handleSearchChange}
            ></input>
        </>
    )
};
export default Search;




