import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Form() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault(e);
        setSubmittedData(formData);
        setFormData({
            username: '',
            email: '',
            password: ''
        });
        console.log(formData);
    };

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleInputChange}/>
                <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange}/>
                <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange}/>
                <Button type="submit" variant="secondary">Submit</Button>
            </form>

            {submittedData && (
                <div>
                    <h2>Submitted Data:</h2>
                    <p><strong>Username:</strong> {submittedData.username} </p>
                    <p><strong>Email:</strong> {submittedData.email} </p>
                    <p><strong>Password:</strong> {submittedData.password} </p>
                </div>
            )}
        </div>
    );
};

export default Form