import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="mb-0">PYQ Hub</h1>
            <p className="mb-0">National Institute of Technology Mizoram</p>
          </div>
          <div className="col-md-4 text-end">
            <img 
              src="/logo.png" 
              alt="NIT Mizoram" 
              className="img-fluid"
              style={{ maxHeight: '60px' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
