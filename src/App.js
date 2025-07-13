import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    education: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resume Submitted:", formData);
    alert("Resume submitted! ATS Check coming soon...");
  };

  return (
    <div className="container">
      <h1>AI Resume Builder with ATS Check</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <textarea name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
        <textarea name="experience" placeholder="Work Experience" onChange={handleChange} />
        <textarea name="education" placeholder="Education" onChange={handleChange} />
        <button type="submit">Submit Resume</button>
      </form>

      <div className="preview">
        <h2>Resume Preview</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Skills:</strong> {formData.skills}</p>
        <p><strong>Experience:</strong> {formData.experience}</p>
        <p><strong>Education:</strong> {formData.education}</p>
      </div>
    </div>
  );
}
