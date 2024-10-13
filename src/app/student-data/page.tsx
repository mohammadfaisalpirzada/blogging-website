'use client'; // Required for handling client-side state in Next.js

import React, { useState } from 'react';

const StudentDataPage = () => {
  const [formData, setFormData] = useState({
    grNumber: '',
    studentName: '',
    fathersName: '',
    gender: '',
    religion: '',
    contactNumber: '',
    cnicBForm: '',
    dateOfBirth: '',
    fatherMotherCnic: '',
    guardianName: '',
    guardianCnic: '',
    guardianRelation: '',
    studentClass: '',
    classSection: '',
    dateOfAdmission: '',
  });

  // Function to handle changes in the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page refresh

    try {
      const response = await fetch('/api/save-student-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data saved successfully!');
      } else {
        console.error('Failed to save data:', await response.json());
        alert('Failed to save data.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div>
      <h1>Student Data Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          GR#:
          <input type="text" name="grNumber" value={formData.grNumber} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Student Name:
          <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Father's Name:
          <input type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Religion:
          <input type="text" name="religion" value={formData.religion} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Contact Number:
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </label>
        <br />
        <label>
          CNIC / B-Form:
          <input type="text" name="cnicBForm" value={formData.cnicBForm} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Father/Mother's CNIC:
          <input type="text" name="fatherMotherCnic" value={formData.fatherMotherCnic} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Guardian Name:
          <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Guardian CNIC:
          <input type="text" name="guardianCnic" value={formData.guardianCnic} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Guardian Relation:
          <input type="text" name="guardianRelation" value={formData.guardianRelation} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Student Class:
          <input type="text" name="studentClass" value={formData.studentClass} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Class Section:
          <input type="text" name="classSection" value={formData.classSection} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Date of Admission:
          <input type="date" name="dateOfAdmission" value={formData.dateOfAdmission} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentDataPage;
