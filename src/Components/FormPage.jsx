
import React, { useState } from 'react';
import './Form.css'; 

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
  });
  const [submittedData, setSubmittedData] = useState(null); 
  const [showForm, setShowForm] = useState(true); 

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); 
    setShowForm(false); 
  };

  
  const handleNewForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      gender: '',
    });
    setShowForm(true); 
    setSubmittedData(null); 
  };

  return (
    <div className="form-page">
      <h2>Form</h2>

      {submittedData && !showForm && (
        <div>
          <h3>Submitted Information</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>

          {/* Button to show another form */}
          <button onClick={handleNewForm}>Fill Another Form</button>
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div>
            <label>Phone:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div>
            <label>Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>

          <div>
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default FormPage;
