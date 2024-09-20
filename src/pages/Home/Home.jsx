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
                <span className="d-inline-block text-dark text-hightlight">Innovation,</span>{" "}
                Powering{" "}
                <span className="d-inline-block text-dark text-hightlight">Your Digital.</span>
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
              <p className="mb-3 fw-semibold fs-5"><span className="my-text">Showcase</span></p>
              <h1 className="text-title fw-bold text-dark my-heading-1">Our Best <br /> Projects</h1>
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
                      How do we work?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <b>1. Understanding Your Needs</b> <br />
                      We begin by thoroughly understanding your business goals
                      and project requirements to tailor a solution that fits
                      perfectly.
                      <br />
                      <br />
                      <b>2. Planning and Design</b> <br />
                      Our team crafts a detailed plan and designs user-friendly
                      interfaces to align with your vision and functionality
                      needs.
                      <br />
                      <br />
                      <b>3. Development and Testing</b> <br />
                      Utilizing cutting-edge technology, we develop robust
                      solutions while continuously testing to ensure seamless
                      performance.
                      <br />
                      <br />
                      <b>4. Deployment and Support</b> <br />
                      After rigorous testing, we deploy the solution and provide
                      ongoing support to ensure smooth operations post-launch.
                      <br />
                      <br />
                      This approach allows us to deliver tailored software
                      solutions that drive growth and efficiency for your
                      business.
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
                      What does the client need to prepare?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Before starting a project, clients should prepare a
                      Project Requirements Document. This document will contain
                      details of the desired features, estimated costs, and
                      estimated construction time. This information will be very
                      helpful in preparing project plans that are more precise
                      and according to needs, so that the final results can
                      satisfy all parties.
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
                      Do you accept long-term projects?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, we are happy to accept long-term projects. As a
                      software house, we want to build long-term relationships
                      with our clients by providing customized, high-quality
                      software solutions. We focus on understanding your needs
                      and ensuring consistent communication throughout our team
                      is committed to meeting deadlines and adapting to evolving
                      requirements, ensuring the long-term success of your
                      initiatives.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Can you work in an office?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      I can work in the office, but in the context of a software
                      house, I am very supportive of working, including remote
                      options. With today's technology and collaboration tools,
                      work can be done well from anywhere, as long as
                      communication remains smooth and targets are met. If
                      necessary, I am also available to work from the office to
                      support the team more effectively.
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
                      Reasons why you have recruit me?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      You should hire us because we want to contribute to the
                      growth of the software house by bringing my expertise in
                      software development, problem solving skills and
                      adaptability to new technologies. While your company is
                      still in its early stages, I can help build a strong
                      technical foundation, collaborate effectively with the
                      team, and ensure that we deliver high-quality solutions.
                      My passion for innovation and commitment to excellence
                      will support your vision as we face the challenges of a
                      competitive marketplace.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-dark bg-wave">
        <div className="container">
          <div className="max-w-md mx-auto py-5 text-center">
            <h1 className="verybig-title fw-bold lh-base mt-4 mb-4">
              Build Something Impactful Today, Better.
            </h1>
            <p className="text-light fs-5 lh-base mb-5">
              We’re offer services that deliver exceptional results. With years
              of experience, strong work ethics, and attention to detail,
              Developeight is the freelancer you can trust to exceed your
              expectations.
            </p>
            <a href="#" className="btn btn-light btn-lg fw-semibold mb-5">
              Hire Us!
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
};
