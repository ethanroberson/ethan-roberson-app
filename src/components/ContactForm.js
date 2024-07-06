import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [services, setServices] = useState({
    webDesign: false,
    webDevelopment: false,
    webManagement: false,
    seo: false,
    ppc: false,
  });

  const handleServiceChange = (service) => {
    setServices({ ...services, [service]: !services[service] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Include the selected services in the form data
    const selectedServices = Object.keys(services).filter((service) => services[service]);

    // Prepare the form data
    const formData = {
      name,
      email,
      message,
      services: selectedServices.join(', '),
    };

    // You can handle the form submission logic here
    console.log('Form submitted with data:', formData);

    // Send form data to Formspree endpoint
    fetch('https://formspree.io/f/mwkgenoa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Formspree response:', data);
        // Optionally handle the response from Formspree
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        // Handle errors if any
      });

    // Clear form fields and selected services
    setName('');
    setEmail('');
    setMessage('');
    setServices({
      webDesign: false,
      webDevelopment: false,
      webManagement: false,
      seo: false,
      ppc: false,
    });
  };

  return (
    <div className="form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} action="https://formspree.io/f/mwkgenoa" className="main-form" method="post">
        <label htmlFor="full-name">Full Name:</label>
        <input type="text" id="full-name" value={name} onChange={(event) => setName(event.target.value)} required />

        <label htmlFor="email-address">Email Address:</label>
        <input type="email" id="email-address" value={email} onChange={(event) => setEmail(event.target.value)} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>

        <label>Services:</label>
        <div>
          <div className="service-group">
            <div className="label-input">
          <input type="checkbox" id="web-design" checked={services.webDesign} onChange={() => handleServiceChange('webDesign')} />
          <label htmlFor="web-design">Web Design</label>
            </div>
            <div className="label-input">
          <input type="checkbox" id="web-development" checked={services.webDevelopment} onChange={() => handleServiceChange('webDevelopment')} />
          <label htmlFor="web-development">Web Development</label>
          </div><div className="label-input">
          <input type="checkbox" id="web-management" checked={services.webManagement} onChange={() => handleServiceChange('webManagement')} />
          <label htmlFor="web-management">Web Management</label>
          </div>
          </div>
          <div className="service-group">
          <div className="label-input">
          <input type="checkbox" id="seo" checked={services.seo} onChange={() => handleServiceChange('seo')} />
          <label htmlFor="seo">SEO</label>
          </div>
          <div className="label-input">
          <input type="checkbox" id="ppc" checked={services.ppc} onChange={() => handleServiceChange('ppc')} />
          <label htmlFor="ppc">PPC</label>
          </div><div className="label-input">
          <input type="checkbox" id="interview" checked={services.interview} onChange={() => handleServiceChange('interview')} />
          <label htmlFor="interview">Interview</label>
          </div>
          </div>
        </div>

        <input type="submit" value="Submit" className="main-form-btn"/>
      </form>
    </div>
  );
};

export default ContactForm;
