import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./BirthdayForm.css";
import PawPatrol from './paw-patrol.jpeg'

export default function BirthdayForm() {
    const [ attendeeCount, setAttendeeCount ] = useState(0);

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        dish: '',
        message: ''
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
            name: '',
            age: '',
            dish: '',
            message: ''
        });
        console.log(formData);

        setAttendeeCount(attendeeCount + 1);
    };


  return (
    <>
        <div style= {{
        backgroundImage: `url(${PawPatrol})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '1550px',
        height: '950px'
        }}>
            <h1>AUGUST'S 4TH BIRTHDAY</h1>
            <h3> # of Attendees: {attendeeCount} </h3>
            <form onSubmit = {handleSubmit}>
                <label>
                    <input placeholder="Name:" type="text" name="name" value={formData.name} onChange={handleInputChange} required/>
                </label>
                <label>
                    <input placeholder="Age:" type="number" name="age" value={formData.age} onChange={handleInputChange} required/>
                </label>
                <label>
                    <input placeholder="Potluck Dish:" type="text" name="dish" value={formData.dish} onChange={handleInputChange} required/>
                </label>
                <label>
                    <textarea type="text" placeholder="Enter your birthday message to August!" name="message" value={formData.message} onChange={handleInputChange} />
                </label>
                <div>
                    <Button type="submit" variant="secondary">Submit</Button>
                </div>
            </form>
        </div>
    </>
  )
}
