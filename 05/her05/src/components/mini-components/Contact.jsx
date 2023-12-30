import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.name.trim()) {
      setFormErrors({ ...formErrors, name: 'Name is required' });
      return;
    }

    if (!formData.email.trim()) {
      setFormErrors({ ...formErrors, email: 'Email is required' });
      return;
    }

    if (!formData.subject.trim()) {
      setFormErrors({ ...formErrors, subject: 'Subject is required' });
      return;
    }

    if (!formData.message.trim()) {
      setFormErrors({ ...formErrors, message: 'Message is required' });
      return;
    }



    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    alert('Successfully contacted us!'); 
  };

  return (
    <div className='contact-form'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {formErrors.subject && (
            <span className="error">{formErrors.subject}</span>
          )}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {formErrors.message && (
            <span className="error">{formErrors.message}</span>
          )}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
