import React from "react";
import project1 from "../../assets/p1.webp";
import project2 from "../../assets/p2.webp";
import project3 from "../../assets/p3.webp";
import project4 from "../../assets/p4.webp";
import project5 from "../../assets/p5.webp";
import project6 from "../../assets/p6.webp";
import project7 from "../../assets/p7.webp";

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
                  <div className="carousel-item active">
                    <img
                      src={project1}
                      className="d-block w-100 object-fit-cover"
                      alt="Slide 1"
                      style={{ height: "533px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={project2}
                      className="d-block w-100 object-fit-cover"
                      alt="Slide 2"
                      style={{ height: "533px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={project3}
                      className="d-block w-100 object-fit-cover"
                      alt="Slide 3"
                      style={{ height: "533px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={project4}
                      className="d-block w-100 object-fit-cover"
                      alt="Slide 4"
                      style={{ height: "533px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={project5}
                      className="d-block w-100 object-fit-cover"
                      alt="Slide 5"
                      style={{ height: "533px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={project6}
                      className="d-block w-100 object-fit-cover"
                      alt="Slide 6"
                      style={{ height: "533px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={project7}
                      className="d-block w-100 object-fit-cover"
                      alt="Slide 7"
                      style={{ height: "533px", objectFit: "cover" }}
                    />
                  </div>
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
                <div className="d-flex gap-2 align-items-center mb-3">
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                </div>
                <p className="fw-semibold text-dark lh-base mb-3 mb-lg-5">
                  The freelance application has been a game-changer for my
                  career. It's user-friendly, offers great job opportunities,
                  and allows me to work from anywhere. Highly recommend it!
                </p>
                <div className="d-flex gap-3 align-items-center mb-4">
                  <img
                    src={person1}
                    className="rounded-circle object-fit-cover"
                    width="75"
                    height="75"
                    alt="Person"
                  />
                  <div className="flex-column">
                    <div className="fw-semibold fs-5">Roger</div>
                    <div className="text-secondary">CEO ServBIX</div>
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
