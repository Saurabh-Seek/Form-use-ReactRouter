import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

  
};

  return (
    <div className="max-w-md mx-auto  bg-white mt-2 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center  mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block mb-1">Subject:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required className="w-full px-4 py-2 border rounded-md"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
