
import React, { useState } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    address: '',
    leadType: 'Facebook',
    phone: '',
    email: '',
    link: '',
    zillowLink: '',
    pictures: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'address') {
      const zillowQuery = `https://www.zillow.com/homes/${value.replace(/\s+/g, '-')}_rb/`;
      setFormData(prev => ({ ...prev, zillowLink: zillowQuery }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Lead submitted! Check console for data.');
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <select name="leadType" value={formData.leadType} onChange={handleChange}>
        <option value="Facebook">Facebook</option>
        <option value="DFD">DFD</option>
        <option value="Wholesaler email/SMS">Wholesaler email/SMS</option>
        <option value="Direct to owner">Direct to owner</option>
        <option value="Other">Other</option>
      </select>
      <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="url" name="link" placeholder="Link (Drive or other)" value={formData.link} onChange={handleChange} />
      <input type="text" name="zillowLink" placeholder="Zillow Link (auto)" value={formData.zillowLink} readOnly />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LeadForm;
