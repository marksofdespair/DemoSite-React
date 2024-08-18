import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        /* STILL NEEDS 'USER_ID' */
        emailjs.send('service_f61oy6h', 'template_dmj966f', formData, 'USER_ID')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Failed to send the message, sorry!');
            });

        setFormData({
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send</button>
            </form>
            <div>
                <h3>Find me on:</h3>
                <a href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    );
};

export default ContactMe;
