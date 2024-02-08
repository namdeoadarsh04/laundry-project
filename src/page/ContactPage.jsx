import React from 'react'

const Contact = () => {
  return (
    <>
   
  {/* Contact Info Start */}
  <div className="container-fluid contact-info mt-5 mb-4">
    <div className="container" style={{ padding: "0 30px" }}>
      <div className="row">
        <div
          className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0"
          style={{ height: 100 }}
        >
          <div className="d-inline-flex">
            <i className="fa fa-2x fa-map-marker-alt text-white m-0 mr-3" />
            <div className="d-flex flex-column">
              <h5 className="text-white font-weight-medium">Our Location</h5>
              <p className="m-0 text-white">123 Street, New York, USA</p>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 d-flex align-items-center justify-content-center bg-primary mb-4 mb-lg-0"
          style={{ height: 100 }}
        >
          <div className="d-inline-flex text-left">
            <i className="fa fa-2x fa-envelope text-white m-0 mr-3" />
            <div className="d-flex flex-column">
              <h5 className="text-white font-weight-medium">Email Us</h5>
              <p className="m-0 text-white">info@example.com</p>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0"
          style={{ height: 100 }}
        >
          <div className="d-inline-flex text-left">
            <i className="fa fa-2x fa-phone-alt text-white m-0 mr-3" />
            <div className="d-flex flex-column">
              <h5 className="text-white font-weight-medium">Call Us</h5>
              <p className="m-0 text-white">+012 345 6789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact Info End */}
</>

  
  )
}

export default Contact