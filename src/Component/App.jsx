import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from './Navbar';
import Register from './Register';
import Contact from './Contact';



const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </>
    )

}
export default App;