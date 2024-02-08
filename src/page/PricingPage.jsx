import React from 'react'

const Pricing = () => {
  return (

<>
  {/* Pricing Plan Start */}
  <div className="container-fluid pt-5 pb-3">
    <div className="container">
      <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-7">
        Our Pricing Plan
      </h6>
      <h1 className="display-1 text-center mb-3">The Best Price</h1>
      <div className="row">
        <div className="col-lg-3 mb-3">
          <div className="bg-light text-center mb-1 pt-3">
            <div
              className="d-inline-flex flex-column align-items-center justify-content-center bg-secondary rounded-circle shadow mt-2 mb-4"
              style={{ width: 160, height: 140, border: "15px solid #ffffff" }}
            >
              <h2 className="text-dark-black">Basic</h2>
              <h1 className="display-3 text-black mb-0">
                <small
                  className="align-bottom"
                  style={{ fontSize: 22, lineHeight: 40}}
                >
                  $ 49
                </small>
                
                <small
                  className="align-bottom"
                  style={{ fontSize: 22, lineHeight: 35 }}
                >
                </small>
              </h1>
            </div>
            <div className="d-flex flex-column align-items-center py-3">
              <p>HTML5 &amp; CSS3</p>
              <p>Bootstrap 4</p>
              <p>Responsive Layout</p>
              <p>Compatible With All Browsers</p>
            </div>
            <a href="" className="btn btn-secondary py-2 px-4">
              Signup Now
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="bg-light text-center mb-2 pt-4">
            <div
              className="d-inline-flex flex-column align-items-center justify-content-center bg-primary rounded-circle shadow mt-2 mb-4"
              style={{ width: 120, height: 130, border: "15px solid #ffffff" }}
            >
              <h3 className="text-black">Standard</h3>
              <h1 className="display-4 text-black mb-0">
                <small
                  className="align-top text-white"
                  style={{ fontSize: 22, lineHeight: 45 }}
                >
                  $ 99
                </small>
                <small
                  className="align-bottom"
                  style={{ fontSize: 16, lineHeight: 40 }}
                >
                </small>
              </h1>
            </div>
            <div className="d-flex flex-column align-items-center py-3">
              <p>HTML5 &amp; CSS3</p>
              <p>Bootstrap 4</p>
              <p>Responsive Layout</p>
              <p>Compatible With All Browsers</p>
            </div>
            <a href="" className="btn btn-primary py-2 px-4">
              Signup Now
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="bg-light text-center mb-2 pt-4">
            <div
              className="d-inline-flex flex-column align-items-center justify-content-center bg-secondary rounded-circle shadow mt-2 mb-4"
              style={{ width: 160, height: 140, border: "15px solid #ffffff" }}
            >
              <h3 className="text-black">Premium</h3>
              <h1 className="display-4 text-black mb-0">
                <small
                  className="align-centre"
                  style={{ fontSize: 15, lineHeight: 55 }}
                >
                  $ 149
                </small>
                
                <small
                  className="align-centre"
                  style={{ fontSize: 16, lineHeight: 40 }}
                >
                </small>
              </h1>
            </div>
            <div className="d-flex flex-column align-items-center py-3">
              <p>HTML5 &amp; CSS3</p>
              <p>Bootstrap 4</p>
              <p>Responsive Layout</p>
              <p>Compatible With All Browsers</p>
            </div>
            <a href="" className="btn btn-secondary py-2 px-4">
              Signup Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Pricing Plan End */}

    </>
  )
}

export default Pricing