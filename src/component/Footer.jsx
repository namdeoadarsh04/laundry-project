import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
  {/* Footer Start */}
  <div className="container-fluid bg-primary text-white mt-5 pt-5 px-sm-3 px-md-5">
    <div className="row pt-5">
      <div className="col-lg-3 col-md-6 mb-5">
        <a href="">
          <h1 className="text-secondary mb-3">
            <span className="text-white">DRY</span>ME
          </h1>
        </a>
        <p>
          Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem
          sit sed elitr sit no, sed kasd et ipsum dolor duo dolor
        </p>
        <div className="d-flex justify-content-start mt-4">
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 38, height: 38 }}
            href="#"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 38, height: 38 }}
            href="#"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 38, height: 38 }}
            href="#"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
            style={{ width: 38, height: 38 }}
            href="#"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-white mb-4">Get In Touch</h4>
        <p>Dolor clita stet nonumy clita diam vero, et et ipsum diam labore</p>
        <p>
          <i className="fa fa-map-marker-alt mr-2" />
          123 Street, New York, USA
        </p>
        <p>
          <i className="fa fa-phone-alt mr-2" />
           9098039600
        </p>
        <p>
          <i className="fa fa-envelope mr-2" />
          adarshnamdevkte@gmail.com
        </p>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-white mb-4">Quick Links</h4>
        <div className="d-flex flex-column justify-content-start">
          <Link to= "/Home" className="text-white mb-2" >
            <i className="fa fa-angle-right mr-2" />
            Home
          </Link>
          <Link to="/about" className="text-white mb-2" >
            <i className="fa fa-angle-right mr-2" />
            About Us
          </Link>
          <Link to="/Service" className="text-white mb-2" >
            <i className="fa fa-angle-right mr-2" />
            Services
          </Link>
          <Link to="/Pricing" className="text-white mb-2" >
            <i className="fa fa-angle-right mr-2" />
            Pricing
          </Link>
          <Link to="/Contact us" className="text-white mb-2">
            <i className="fa fa-angle-right mr-2" />
            Contact Us
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-white mb-4">Newsletter</h4>
        <form action="">
          <div className="form-group">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Your Name"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control border-0"
              placeholder="Your Email"
              required="required"
            />
          </div>
          <div>
            <button
              className="btn btn-lg btn-secondary btn-block border-0"
              type="submit"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark text-white py-4 px-sm-3 px-md-5">
    <p className="m-0 text-center text-white">
      ©{" "}
      <a className="text-white font-weight-medium" href="#">
        GOOD BOY FOR TEAM
      </a>
      . All Rights Reserved. Designed by
      <a className="text-white font-weight-medium" href="https://htmlcodex.com">
        HTML Codex
      </a>
    </p>
  </div>
  {/* Footer End */}
</>

  )
}

export default Footer