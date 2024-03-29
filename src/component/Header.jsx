import React from 'react'

const Header = () => {
  return (
    <>
  {/* Topbar Start */}
  <div className="container-fluid bg-primary py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <a className="text-white pr-3" href="">
              FAQs
            </a>
            <span className="text-white">|</span>
            <a className="text-white px-3" href="">
              Help
            </a>
            <span className="text-white">|</span>
            <a className="text-white pl-3" href="">
              Support
            </a>
          </div>
        </div>
        <div className="col-md-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-white px-3" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="text-white px-3" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="text-white px-3" href="">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="text-white px-3" href="">
              <i className="fab fa-instagram" />
            </a>
            <a className="text-white pl-3" href="">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}


    </>
  )
}

export default Header