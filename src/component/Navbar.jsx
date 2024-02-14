import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  {/* Navbar Start */}
  <div className="container-fluid position-relative nav-bar p-0">
    <div
      className="container-lg position-relative p-0 px-lg-3"
      style={{ zIndex: 9 }}
    >
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 pl-3 pl-lg-5">
        <Link to="" className="navbar-brand">
          <h1 className="m-0 text-secondary">
            <span className="text-primary">DRY</span>ME
          </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              Services
            </Link>
            <Link to="/pricing" className="nav-item nav-link">
              Pricing
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu border-0 rounded-0 m-0">
                <Link to="/blog" className="dropdown-item">
                  Blog Grid
                </Link>
                <Link to="/single" className="dropdown-item">
                  Blog Detail
                </Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
            <Link to="/login" className="nav-item nav-link">
              Login
            </Link>
            <Link to="/registration" className="nav-item nav-link">
             Registration
            </Link>
            
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
</>
  )
}

export default Navbar