import React from 'react'

const Carousel = () => {
  return (
    <>
    <>
  {/* Carousel Start */}
  <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img class="w-100" src="img/carousel-1.jpg" alt="Image"/>
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 900 }}>
              <h4 className="text-white text-uppercase mb-md-3">
                Laundry &amp; Dry Cleaning
              </h4>
              <h1 className="display-3 text-white mb-md-4">
                Best For Laundry Services
              </h1>
              <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          
          <img className="w-100"  src="img/carousel-3.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 900 }}>
              <h4 className="text-white text-uppercase mb-md-3">
                Laundry &amp; Dry Cleaning
              </h4>
              <h1 className="display-3 text-white mb-md-4">
                Highly Professional Staff
              </h1>
              <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#header-carousel"
        data-slide="prev"
      >
        <div className="btn btn-secondary" style={{ width: 45, height: 45 }}>
          
          <span className="carousel-control-prev-icon mb-n2" />
        </div>
      </a>
      <a
        className="carousel-control-next"
        href="#header-carousel"
        data-slide="next"
      >
        <div className="btn btn-secondary" style={{ width: 45, height: 45 }}>
          <span className="carousel-control-next-icon mb-n2" />
        </div>
      </a>
    </div>
  </div>
  {/* Carousel End */}
</>

    </>
  )
}

export default Carousel