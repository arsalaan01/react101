import React from 'react'
import { useState } from 'react';

const Profile = () => {

  // This component is a placeholder for user profile information

    const [profile, setProfile] = useState({
        name: "",
        age: ""
        });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    }


  return (
    <div>
        <h2>User Profile</h2>
        <div>
            <label>Name:</label>
            <input
                type="text"
                name='name'
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your name"
            />
        </div>

        <div>
            <label>Age:</label>
            <input
                type="number"
                name='age'
                value={profile.age}
                onChange={handleChange}
                placeholder="Enter your age"
            />
        </div>
        <h3>Profile Details</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
    </div>
  )
}

export default Profile