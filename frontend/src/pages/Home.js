import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container py-5">
      <div className="jumbotron bg-light p-5 rounded mb-5">
        <h1 className="display-4">Welcome to PYQ Hub</h1>
        <p className="lead">
          Access previous year question papers from all departments at NIT Mizoram. 
          Find papers by department, semester, and year to help with your exam preparation.
        </p>
        <Link className="btn btn-primary btn-lg" to="/departments">
          Browse by Department
        </Link>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h2 className="card-title text-primary">100+</h2>
              <p className="card-text">Total Papers Available</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h2 className="card-title text-success">5</h2>
              <p className="card-text">Departments Covered</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Browse by Department</h5>
              <p className="card-text">Find papers organized by your department</p>
              <Link to="/departments" className="btn btn-outline-primary">
                View Departments
              </Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <h5 className="card-title">All Papers</h5>
              <p className="card-text">Search and filter through all available papers</p>
              <Link to="/papers" className="btn btn-outline-primary">
                Browse All
              </Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Latest Papers</h5>
              <p className="card-text">View the most recently uploaded papers</p>
              <Link to="/papers?ordering=-uploaded_at" className="btn btn-outline-primary">
                View Latest
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
