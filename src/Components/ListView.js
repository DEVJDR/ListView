import React, { useState, useEffect } from 'react';
import './ListView.css';

const ListView = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setEmployees(data.data));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by First Name"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="employee-list">
        {filteredEmployees.map(employee => (
          <div key={employee.id}>
            <div className="employee-card">
              <div className="image-container">
                <img src={employee.avatar} alt="Avatar" />
              </div>
              <div className="circle">{employee.id}</div>
            </div>
            <div className="first-name">{employee.first_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;
