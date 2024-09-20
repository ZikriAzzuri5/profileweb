import React from "react";
import project1 from "../../assets/project-1.png";
import star from "../../assets/star.svg";
import person1 from "../../assets/person-1.jpg";

export const Project = () => {
  return (
    <div id="projects" className="container">
      <div className="py-5">
        <h1 className="text-title fw-bold text-dark mb-4">Our Projects</h1>
        <div className="card border-0 mb-5">
          <div className="row g-0">
            <div className="col-md-7">
              <img
                src={project1}
                className="img-fluid object-fit-cover thumbnail"
                alt="..."
                style={{ width: "100%", height: "100%", maxHeight: "533px" }}
              />
            </div>
            <div className="col-md-5">
              <div className="d-flex flex-column px-5 mt-4">
                <h1 className="fw-bold text-dark mt-lg-4">ServBIX</h1>
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
