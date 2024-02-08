import React from 'react'

const WorkingProcess = () => {
  return (
    <>
  {/* Working Process Start */}
  <div className="container-fluid pt-5">
    <div className="container">
      <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
        Working Process
      </h6>
      <h1 className="display-4 text-center mb-5">How We Work</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
              style={{
                width: 150,
                height: 150,
                borderWidth: "15px !important"
              }}
            >
              <h2 className="display-2 text-secondary m-0">1</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Order Place</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
              style={{
                width: 150,
                height: 150,
                borderWidth: "15px !important"
              }}
            >
              <h2 className="display-2 text-secondary m-0">2</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Free Pick Up</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
              style={{
                width: 150,
                height: 150,
                borderWidth: "15px !important"
              }}
            >
              <h2 className="display-2 text-secondary m-0">3</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Dry Cleaning</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
              style={{
                width: 150,
                height: 150,
                borderWidth: "15px !important"
              }}
            >
              <h2 className="display-2 text-secondary m-0">4</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Free Delivery</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Working Process End */}


    </>
  )
}

export default WorkingProcess