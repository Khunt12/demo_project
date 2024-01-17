import React, { useState } from "react";
import '../Css/Contact.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState([]);

    const updateValue = (event) => {
        event.preventDefault();

        const newFormData = {
            name: name,
            email: email,
            message: message
        };

        // Update the state with the new data
        setFormData([...formData, newFormData]);

        // Clear the input fields
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="contact">
            <div className="rightSide">
                <form>
                    <label htmlFor="name">Full Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} name="fullName" placeholder="Enter full name..." type="text" />
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} name="email" placeholder="Enter email..." type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        onChange={(e) => setMessage(e.target.value)} value={message}
                        required
                    ></textarea>
                    <button type="submit" onClick={updateValue}> Send Message</button>
                </form>

                <div>
                    {/* Display form data with index */}
                    {formData.map((data, index) => (
                        <div key={index}>
                            <p>Index: {index}</p>
                            <p>Name: {data.name}</p>
                            <p>Email: {data.email}</p>
                            <p>Message: {data.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;