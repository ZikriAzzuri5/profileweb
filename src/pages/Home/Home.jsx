import React from "react";
import heroImage from "../../assets/hero-image.svg";
import checked from "../../assets/checked.svg";
import project1 from "../../assets/project-1.png";
import star from "../../assets/star.svg";
import illust1 from "../../assets/illust-1.svg";
import person1 from "../../assets/person-1.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section id="home" className="hero d-flex align-items-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="fw-bold lh-base">
                Simplifying{" "}
                <span className="d-inline-block text-dark text-hightlight">
                  Innovation,
                </span>{" "}
                Powering{" "}
                <span className="d-inline-block text-dark text-hightlight">
                  Your Digital.
                </span>
              </h1>
              <p className="text-body-secondary lh-lg">
                Customized web and app development services for individuals and
                companies, ready to help realize the digital vision You.
              </p>
              <Link to="/contact" className="btn btn-dark btn-lg fw-medium">
                Hire Us!
              </Link>
            </div>
            <div className="d-none d-lg-block col-lg-6 text-center">
              <img src={heroImage} alt="Studio" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="bg-secondary">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <img src={illust1} alt="Studio" className="img-fluid" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <span className="fw-medium text-dark fs-5 lh-base mt-3">
                Reasons why
              </span>
              <h1 className="fw-bold text-dark mb-4 lh-base">
                Our Company Might Great For Your Business
              </h1>
              <div className="flex-column mb-4">
                <div className="d-flex gap-2 mb-4 align-items-center fw-medium fs-5">
                  <img src={checked} alt="Icon" /> Developeight is a software
                  development company.
                </div>
                <div className="d-flex gap-2 mb-4 align-items-center fw-medium fs-5">
                  <img src={checked} alt="Icon" /> Has more than 3 years
                  experience in the industry.
                </div>
                <div className="d-flex gap-2 mb-4 align-items-center fw-medium fs-5">
                  <img src={checked} alt="Icon" /> Specialization in software
                  development, web and mobile applications.
                </div>
                <div className="d-flex gap-2 mb-4 align-items-center fw-medium fs-5">
                  <img src={checked} alt="Icon" /> Focus on solutions tailored
                  to business needs.
                </div>
                <div className="d-flex gap-2 align-items-center fw-medium fs-5">
                  <img src={checked} alt="Icon" /> Supported by a team of
                  experts in the field of technology.
                </div>
              </div>
              <a
                href="#"
                className="btn btn-dark btn-lg fw-medium align-self-start mb-3"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="container">
        <div className="py-5">
          <div className="d-flex mb-5 justify-content-between align-items-center">
            <div>
              <p className="mb-3 fw-semibold fs-5">
                <span className="my-text">Showcase</span>
              </p>
              <h1 className="text-title fw-bold text-dark my-heading-1">
                Our Best <br /> Projects
              </h1>
            </div>
            <a href="/projects" className="fw-semibold text-dark my-text">
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 7l-10 10" />
                <path d="M8 7l9 0l0 9" />
              </svg>
            </a>
          </div>
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
      </section>
      <section id="faq" className="container">
        <div className="py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="fw-medium mb-2">Get To Know About Our Team</div>
              <h1 className="fw-bold text-dark lh-base mb-sm-3">
                Frequently Asked Questions
              </h1>
            </div>
            <div className="col-lg-8">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      What is DevelopEight?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Developeight is a company that offers website, mobile, and
                      desktop application development services, along with IT
                      consulting to help businesses undergo digital
                      transformation.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <b>1. Website Development</b> <br />
                      Custom websites, e-commerce solutions, and web
                      applications.
                      <br />
                      <br />
                      <b>2. Mobile & Desktop App Development</b> <br />
                      Applications for Android, iOS, and desktop platforms.
                      <br />
                      <br />
                      <b>3. IT Consulting</b> <br />
                      Digital strategy and technology solutions.
                      <br />
                      <br />
                      <b>4. Maintenance & Support</b> <br />
                      Ensuring your applications run smoothly.
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      How can I start a project?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Contact us via email or fill out the form on our website.
                      We’ll discuss your needs and provide tailored solutions.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      Does DevelopEight offer custom solutions?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, we design solutions to meet the unique needs of each
                      client, supporting their business goals.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
