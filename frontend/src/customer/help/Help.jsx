import React, { useState } from 'react';
import axios from 'axios';
import './Help.css';

function Help() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/help/submit', form);
      alert('Help request submitted successfully ✅');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error in submitting help request:', err);
      alert('Help request submission failed ❌');
    }
  };

  return (
    <div className="help-container">
      <div className="help-info">Help & Support</div>
      <div className="line"></div>

      <div className="help-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="help-input"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="help-input"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="help-input"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="help-btn">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Help;
