import React from 'react';
import './UserPage.css';

const UserPage = () => {
  
  const userData = [
    {
      name: 'Ranjitgouda',
      email: 'ranjitgoudaranju@gmail.com',
      phone: '8197192825',
      address: '123 Main St, nagarbvi',
      gender: 'Male',
      dateOfBirth: '2002-03-27',
    },
    {
      name: 'swastik',
      email: 'swastiksnair@gmail.com',
      phone: '9876543210',
      address: '456 Oak St,malagala',
      gender: 'male',
      dateOfBirth: '2002-05-10',
    },
    {
      name: 'preethesh',
      email: 'preethesh@gmail.com',
      phone: '5556667777',
      address: '789 Pine St,rajajinagar',
      gender: 'male',
      dateOfBirth: '2002-07-22',
    },
    {
      name: 'harish S',
      email: 'harishs@gmail.com',
      phone: '3334445555',
      address: '101 Maple St, vijaynagar',
      gender: 'Male',
      dateOfBirth: '2002-11-14',
    },
    {
      name: 'sanath',
      email: 'sanath@gmail.com',
      phone: '2223334444',
      address: '202 Cedar St, electronic city',
      gender: 'Male',
      dateOfBirth: '2002-03-30',
    },
  ];

  return (
    <div className="user-page">
      <h2>User Information</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.gender}</td>
              <td>{user.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
