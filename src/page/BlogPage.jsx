import React from 'react'
import video from "../img/production_id_4169284 (1080p).mp4"

const Blog = () => {
  return (
    <>
      {/* Blog Start */}
      <div className="container-fluid mt-5 pb-2">
        <div className="container">
          <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
            Our Blog
          </h6>
          <h1 className="display-4 text-center mb-5">Latest From Blog</h1>
          <div className="row">
            <div className="col-lg-4 mb-2">
              <div className="shadow mb-4">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
                  <a
                    href=""
                    className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                    style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                  >
                    <h4 className="text-center text-white font-weight-medium mb-3">
                      Dolor site amet clita kasd sanct ipsum
                    </h4>
                    <div className="d-flex text-light">
                      <small className="mr-2">
                        <i className="fa fa-user text-secondary" /> Admin
                      </small>
                      <small className="mr-2">
                        <i className="fa fa-folder text-secondary" /> Web Design
                      </small>
                      <small className="mr-2">
                        <i className="fa fa-comments text-secondary" /> 15
                      </small>
                    </div>
                  </a>
                </div>
                <p className="m-0 p-4">
                  Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                  ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                  labore. Lorem et lorem amet sed sed kasd ipsum rebum
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div className="shadow mb-4">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                  <a
                    href=""
                    className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                    style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                  >
                    <h4 className="text-center text-white font-weight-medium mb-3">
                      Dolor site amet clita kasd sanct ipsum
                    </h4>
                    <div className="d-flex text-light">
                      <small className="mr-2">
                        <i className="fa fa-user text-secondary" /> Admin
                      </small>
                      <small className="mr-2">
                        <i className="fa fa-folder text-secondary" /> Web Design
                      </small>
                      <small className="mr-2">
                        <i className="fa fa-comments text-secondary" /> 15
                      </small>
                    </div>
                  </a>
                </div>
                <p className="m-0 p-4">
                  Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                  ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                  labore. Lorem et lorem amet sed sed kasd ipsum rebum
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-2">
              <div className="shadow mb-4">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-3.jpg" alt="" />

                  <a
                    href=""
                    className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                    style={{ top: 0, left: 0, background: "rgba(0, 0, 0, .4)" }}
                  >

                    <h4 className="text-center text-white font-weight-medium mb-3">
                      Dolor site amet clita kasd sanct ipsum
                    </h4>

                    <div className="d-flex text-light">
                      <small className="mr-2">
                        <i className="fa fa-user text-secondary" /> Admin
                      </small>
                      <small className="mr-2">
                        <i className="fa fa-folder text-secondary" /> Web Design
                      </small>
                      <small className="mr-2">
                        <i className="fa fa-comments text-secondary" /> 15
                      </small>
                    </div>

                  </a>
                </div>
                <p className="m-0 p-4">
                  Amet dolores labore magna et amet tempor dolor et dolor. Et sit
                  ipsum et eos rebum labore ea labore sea. Et sed elitr labore sed
                  labore. Lorem et lorem amet sed sed kasd ipsum rebum
                </p>
              </div>
            </div>
          </div>
          <div>
            <video src={video} width="100%" height="400px" controls="controls" autoPlay="true"  />
          </div>
        </div>
      </div>
      {/* Blog End */}


    </>
  )
}

export default Blog