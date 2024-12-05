import React, { useState } from 'react';
import image from './image.png';
import admin from './admin.jpg';
import camera from './camera.png';

function Profile() {
  const initialUserData = {
    // profilePhoto: 'profile-photo-url',
    username: 'Pranayini',
    phoneNumber: '1234567890',
    bandId: '123456',
    email: 'hello123@gmail.com',
    address: '123 Main St, City, Country',
    age: '25'
  };

  const [formData, setFormData] = useState(initialUserData);
  const [editMode, setEditMode] = useState({
    username: false,
    phoneNumber: false,
    bandId: false,
    email: false,
    address: false,
    profilePhoto: false,
    age: false // Adding age field to edit mode state
  });

  const handleEdit = (fieldName) => {
    setEditMode({
      ...editMode,
      [fieldName]: true
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = (fieldName) => {
    setEditMode({
      ...editMode,
      [fieldName]: false
    });
    // You can handle saving the data to the server here
    console.log('Saving data:', formData);
  };

  const handleCameraClick = () => {
    // Trigger file input click
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (e) => {
    // Handle file change
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilePhoto: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="background">
      <div className='logo'>
        <img src={image} alt='logo' height={90}/>
      </div><br/>
      <div className='Profile'>
        <form>
          <div className="logo1">
            <img src={formData.profilePhoto || admin} alt='admin' height={90}/>
            <span className="camera-icon" onClick={handleCameraClick}>
              <img src={camera} alt="Camera" height={24} />
            </span>
            {/* Hidden file input */}
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
          {/* Remaining code for form fields */}
          <div className="form-group logo2">
            <div className="input-with-icon">
              {editMode.username ? (
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              ) : (
                <span>{formData.username}</span>
              )}
              {editMode.username ? (
                <button type="button" onClick={() => handleSave('username')}>Save</button>
              ) : (
                <span onClick={() => handleEdit('username')} className="edit-icon">&#9998;</span>
              )}
            </div>
          </div><br/>
          {/* Phone Number */}
          <div className="form-group">
            <div className="input-with-icon">
              <span><strong>Phone Number:</strong> </span>
              {editMode.phoneNumber ? (
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              ) : (
                <span>{formData.phoneNumber}</span>
              )}
              {editMode.phoneNumber ? (
                <button type="button" onClick={() => handleSave('phoneNumber')}>Save</button>
              ) : (
                <span onClick={() => handleEdit('phoneNumber')} className="edit-icon">&#9998;</span>
              )}
            </div>
          </div><br/>
          {/* Age */}
          <div className="form-group">
            <div className="input-with-icon">
              <span><strong>Age:</strong> </span>
              {editMode.age ? (
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              ) : (
                <span>{formData.age}</span>
              )}
              {editMode.age ? (
                <button type="button" onClick={() => handleSave('age')}>Save</button>
              ) : (
                <span onClick={() => handleEdit('age')} className="edit-icon">&#9998;</span>
              )}
            </div>
          </div><br/>
          {/* Band ID */}
          <div className="form-group">
            <div className="input-with-icon">
              <span><strong>Band ID:</strong> </span>
              {editMode.bandId ? (
                <input
                  type="text"
                  name="bandId"
                  value={formData.bandId}
                  onChange={handleChange}
                />
              ) : (
                <span>{formData.bandId}</span>
              )}
              {editMode.bandId ? (
                <button type="button" onClick={() => handleSave('bandId')}>Save</button>
              ) : (
                <span onClick={() => handleEdit('bandId')} className="edit-icon">&#9998;</span>
              )}
            </div>
          </div><br/>
          {/* Email */}
          <div className="form-group">
            <div className="input-with-icon">
              <span><strong>Email:</strong> </span>
              {editMode.email ? (
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              ) : (
                <span>{formData.email}</span>
              )}
              {editMode.email ? (
                <button type="button" onClick={() => handleSave('email')}>Save</button>
              ) : (
                <span onClick={() => handleEdit('email')} className="edit-icon">&#9998;</span>
              )}
            </div>
          </div><br/>
          {/* Address */}
          <div className="form-group">
            <div className="input-with-icon">
              <span><strong>Address:</strong> </span>
              {editMode.address ? (
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              ) : (
                <span>{formData.address}</span>
              )}
              {editMode.address ? (
                <button type="button" onClick={() => handleSave('address')}>Save</button>
              ) : (
                <span onClick={() => handleEdit('address')} className="edit-icon">&#9998;</span>
              )}
            </div>
          </div><br/>
        </form>
      </div>
    </div>
  );
}

export default Profile;
