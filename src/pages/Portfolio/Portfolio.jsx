import React from "react";
import project1 from "../../assets/p1.webp";
import project2 from "../../assets/p2.webp";
import project3 from "../../assets/p3.webp";
import project4 from "../../assets/p4.webp";
import project5 from "../../assets/p5.webp";
import project6 from "../../assets/p6.webp";
import project7 from "../../assets/p7.webp";
import zikri from "../../assets/zikri.webp";
import pj1 from "../../assets/pj-1.webp";
import pj2 from "../../assets/pj-2.webp";
import pj3 from "../../assets/pj-3.webp";
import pj4 from "../../assets/pj-4.webp";
import pj5 from "../../assets/pj-5.webp";
import pj6 from "../../assets/pj-6.webp";
import ahmed from "../../assets/ahmed.webp";

export const Portfolio = () => {
  return (
    <div className="container">
      <div className="py-5">
        <h1 className="fw-bold text-dark mb-4">Our Portfolio</h1>
        <div className="card border-0 mb-5">
          <div className="row g-0">
            <div className="col-md-7">
              <div
                id="projectCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {[project1, project2, project3, project4, project5, project6, project7].map((imgSrc, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <img
                        src={imgSrc}
                        className="d-block w-100 object-fit-cover"
                        alt="Slide 1"
                        style={{ height: "533px", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Tombol prev/next */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#projectCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#projectCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex flex-column px-5 mt-4">
                <h1 className="fw-bold text-dark mt-lg-4">Reto IDN</h1>
                <p className="text-secondary mb-3">Web Development</p>
                <p className="fw-semibold text-dark lh-base mb-3 mb-lg-5">
                  The merchandise application features integrated payment functionality, allowing users to complete transactions seamlessly, and includes a dedicated admin page that enables efficient management of data such as products, orders, and user information within the system.
                </p>
                <div className="d-flex gap-3 align-items-center mb-4">
                  <img
                    src={zikri}
                    className="rounded-circle object-fit-cover"
                    width="75"
                    height="75"
                    alt="Person"
                  />
                  <div className="flex-column">
                    <div className="fw-semibold fs-5">Zikri Azzuri</div>
                    <div className="text-secondary">Front End Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 mb-5">
          <div className="row g-0">
            <div className="col-md-7">
              <div
                id="projectCarousel2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {[pj1, pj2, pj3, pj4, pj5, pj6].map((imgSrc, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <img
                        src={imgSrc}
                        className="d-block w-100 object-fit-cover"
                        alt="Slide 1"
                        style={{ height: "350px", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Tombol prev/next */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#projectCarousel2"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#projectCarousel2"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex flex-column px-5 mt-4">
                <h1 className="fw-bold text-dark mt-lg-4">Web Property</h1>
                <p className="text-secondary mb-3">Web Development</p>
                <p className="fw-semibold text-dark lh-base mb-3 mb-lg-5">
                  This property web application was built for property listing purposes and aims to make it easier for customers to search for and contact property sellers or renters.
                </p>
                <div className="d-flex gap-3 align-items-center mb-4">
                  <img
                    src={ahmed}
                    className="rounded-circle object-fit-cover"
                    width="75"
                    height="75"
                    alt="Person"
                  />
                  <div className="flex-column">
                    <div className="fw-semibold fs-5">Ahmad Salim A.</div>
                    <div className="text-secondary">Fullstack Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
