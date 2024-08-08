import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
        <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
