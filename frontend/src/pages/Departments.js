import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Departments = () => {
  const [departments] = useState([
    {
      id: 1,
      name: 'Computer Science Engineering',
      shortName: 'CSE',
      description: 'Study of algorithms, programming languages, software engineering, computer systems, and artificial intelligence.',
      icon: '💻',
      totalPapers: 45,
      semesters: [1, 2, 3, 4, 5, 6, 7, 8],
      subjects: ['Data Structures', 'Algorithms', 'Database Management', 'Operating Systems', 'Computer Networks']
    },
    {
      id: 2,
      name: 'Electronics and Communication Engineering',
      shortName: 'ECE',
      description: 'Deals with electronic devices, circuits, communication equipment, and systems.',
      icon: '📡',
      totalPapers: 38,
      semesters: [1, 2, 3, 4, 5, 6, 7, 8],
      subjects: ['Digital Electronics', 'Signals and Systems', 'Communication Systems', 'VLSI Design', 'Microprocessors']
    },
    {
      id: 3,
      name: 'Electrical Engineering',
      shortName: 'EE',
      description: 'Study of electrical systems, power generation, electronics, and electromagnetic systems.',
      icon: '⚡',
      totalPapers: 42,
      semesters: [1, 2, 3, 4, 5, 6, 7, 8],
      subjects: ['Power Systems', 'Control Systems', 'Electrical Machines', 'Power Electronics', 'Circuit Analysis']
    },
    {
      id: 4,
      name: 'Mathematics and Computing',
      shortName: 'MNC',
      description: 'Combination of pure mathematics with computational methods and programming.',
      icon: '🧮',
      totalPapers: 35,
      semesters: [1, 2, 3, 4, 5, 6, 7, 8],
      subjects: ['Calculus', 'Linear Algebra', 'Discrete Mathematics', 'Numerical Methods', 'Programming']
    },
    {
      id: 5,
      name: 'Mechanical Engineering',
      shortName: 'ME',
      description: 'Design, manufacturing, and maintenance of mechanical systems and machines.',
      icon: '⚙️',
      totalPapers: 40,
      semesters: [1, 2, 3, 4, 5, 6, 7, 8],
      subjects: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Manufacturing', 'Heat Transfer']
    },
    {
      id: 6,
      name: 'Civil Engineering',
      shortName: 'CE',
      description: 'Design and construction of infrastructure like buildings, roads, bridges, and water systems.',
      icon: '🏗️',
      totalPapers: 37,
      semesters: [1, 2, 3, 4, 5, 6, 7, 8],
      subjects: ['Structural Engineering', 'Geotechnical Engineering', 'Transportation', 'Water Resources', 'Construction Management']
    }
  ]);

  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter departments based on search term
  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.shortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDepartmentClick = (dept) => {
    setSelectedDepartment(selectedDepartment?.id === dept.id ? null : dept);
  };

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="text-center mb-4">Departments at NIT Mizoram</h1>
          <p className="text-center text-muted mb-4">
            Browse previous year question papers by department
          </p>
          
          {/* Search Bar */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Department Cards */}
      <div className="row">
        {filteredDepartments.map(department => (
          <div key={department.id} className="col-md-6 col-lg-4 mb-4">
            <div 
              className={`card h-100 shadow-sm ${selectedDepartment?.id === department.id ? 'border-primary' : ''}`}
              style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
              onClick={() => handleDepartmentClick(department)}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <span className="fs-1 me-3">{department.icon}</span>
                  <div>
                    <h5 className="card-title mb-1">{department.shortName}</h5>
                    <h6 className="card-subtitle text-muted">{department.name}</h6>
                  </div>
                </div>
                
                <p className="card-text">{department.description}</p>
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <small className="text-success">
                    <strong>{department.totalPapers} papers</strong>
                  </small>
                  <small className="text-muted">
                    {department.semesters.length} semesters
                  </small>
                </div>

                {/* Expanded Content */}
                {selectedDepartment?.id === department.id && (
                  <div className="border-top pt-3 mt-3">
                    <h6 className="text-primary mb-2">Key Subjects:</h6>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {department.subjects.slice(0, 3).map((subject, index) => (
                        <span key={index} className="badge bg-light text-dark">
                          {subject}
                        </span>
                      ))}
                      {department.subjects.length > 3 && (
                        <span className="badge bg-secondary">
                          +{department.subjects.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <h6 className="text-primary mb-2">Available Semesters:</h6>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {department.semesters.map(sem => (
                        <span key={sem} className="badge bg-outline-primary">
                          Sem {sem}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="d-grid gap-2">
                  <Link 
                    to={`/papers?department=${department.id}`}
                    className="btn btn-primary"
                  >
                    View Papers
                  </Link>
                  <button 
                    className="btn btn-outline-secondary btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDepartmentClick(department);
                    }}
                  >
                    {selectedDepartment?.id === department.id ? 'Less Info' : 'More Info'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-light">
            <div className="card-body">
              <h3 className="text-center mb-4">Department Statistics</h3>
              <div className="row text-center">
                <div className="col-md-3 mb-3">
                  <h4 className="text-primary">{departments.length}</h4>
                  <p className="mb-0">Total Departments</p>
                </div>
                <div className="col-md-3 mb-3">
                  <h4 className="text-success">
                    {departments.reduce((sum, dept) => sum + dept.totalPapers, 0)}
                  </h4>
                  <p className="mb-0">Total Papers</p>
                </div>
                <div className="col-md-3 mb-3">
                  <h4 className="text-info">8</h4>
                  <p className="mb-0">Semesters Covered</p>
                </div>
                <div className="col-md-3 mb-3">
                  <h4 className="text-warning">
                    {Math.round(departments.reduce((sum, dept) => sum + dept.totalPapers, 0) / departments.length)}
                  </h4>
                  <p className="mb-0">Avg Papers/Dept</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No Results Found */}
      {filteredDepartments.length === 0 && searchTerm && (
        <div className="row">
          <div className="col-12">
            <div className="alert alert-info text-center" role="alert">
              <h5>No departments found</h5>
              <p className="mb-0">
                No departments match your search term "{searchTerm}". 
                Try searching for CSE, ECE, EE, MNC, ME, or CE.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Departments;
