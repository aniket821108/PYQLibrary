import React, { useState } from 'react';

const PYQHub = () => {
  const [departments] = useState([
    { id: 1, name: 'Computer Science Engineering' },
    { id: 2, name: 'Electronics and Communication' },
    { id: 3, name: 'Electrical Engineering' },
    { id: 4, name: 'Civil Engineering' },
    { id: 5, name: 'Mechanical Engineering' }
  ]);

  return (
    <div className="container py-4">
      <h1>Department-wise PYQ</h1>
      
      {departments.map(dept => (
        <div key={dept.id} className="department mb-4">
          <h2 className="text-primary">{dept.name}</h2>
          
          <div className="semesters">
            {[1,2,3,4,5,6,7,8].map(sem => (
              <div key={sem} className="semester mb-3 ms-3">
                <h3>Semester {sem} PYQ</h3>
                <div className="dropdown d-inline-block">
                  <button 
                    className="btn btn-warning dropdown-toggle" 
                    type="button" 
                    data-bs-toggle="dropdown"
                  >
                    Years
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#2024">2024</a></li>
                    <li><a className="dropdown-item" href="#2023">2023</a></li>
                    <li><a className="dropdown-item" href="#2022">2022</a></li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PYQHub;
