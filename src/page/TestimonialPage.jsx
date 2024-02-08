import React from 'react'

const Testimonial = () => {
  return (
    <>
  {/* Testimonial Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
        Testimonial
      </h6>
      <h1 className="display-4 text-center mb-5">Our Clients Say</h1>
      <div className="owl-carousel testimonial-carousel">
        <div className="testimonial-item">
          <img
            className="position-relative rounded-circle bg-white shadow mx-auto"
            src="img/testimonial-1.jpg"
            style={{
              width: 100,
              height: 100,
              padding: 12,
              marginBottom: "-50px",
              zIndex: 1
            }}
            alt=""
          />
          <div className="bg-light text-center p-4 pt-0">
            <h5 className="font-weight-medium mt-5">Client Name</h5>
            <p className="text-muted font-italic">Profession</p>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor ipsum clita
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <img
            className="position-relative rounded-circle bg-white shadow mx-auto"
            src="img/testimonial-2.jpg"
            style={{
              width: 100,
              height: 100,
              padding: 12,
              marginBottom: "-50px",
              zIndex: 1
            }}
            alt=""
          />
          <div className="bg-light text-center p-4 pt-0">
            <h5 className="font-weight-medium mt-5">Client Name</h5>
            <p className="text-muted font-italic">Profession</p>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor ipsum clita
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <img
            className="position-relative rounded-circle bg-white shadow mx-auto"
            src="img/testimonial-3.jpg"
            style={{
              width: 100,
              height: 100,
              padding: 12,
              marginBottom: "-50px",
              zIndex: 1
            }}
            alt=""
          />
          <div className="bg-light text-center p-4 pt-0">
            <h5 className="font-weight-medium mt-5">Client Name</h5>
            <p className="text-muted font-italic">Profession</p>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor ipsum clita
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <img
            className="position-relative rounded-circle bg-white shadow mx-auto"
            src="img/testimonial-4.jpg"
            style={{
              width: 100,
              height: 100,
              padding: 12,
              marginBottom: "-50px",
              zIndex: 1
            }}
            alt=""
          />
          <div className="bg-light text-center p-4 pt-0">
            <h5 className="font-weight-medium mt-5">Client Name</h5>
            <p className="text-muted font-italic">Profession</p>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor ipsum clita
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}

    </>
  )
}

export default Testimonial