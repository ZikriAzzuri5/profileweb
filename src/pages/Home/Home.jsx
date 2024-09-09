import React from "react";
import heroImage from "../../assets/hero-image.svg";
import checked from "../../assets/checked.svg";
import project1 from "../../assets/project-1.png";
import star from "../../assets/star.svg";
import illust1 from "../../assets/illust-1.svg";
import person1 from "../../assets/person-1.jpg";

export const Home = () => {
  return (
    <>
      <section className="hero d-flex align-items-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="fw-bold lh-base my-heading1">
                Menyederhanakan{" "}
                <span className="d-inline-block text-dark">Inovasi,</span>
                Menguatkan{" "}
                <span className="d-inline-block text-dark">Digital Anda.</span>
              </h1>
              <p className="text-body-secondary lh-lg my-text">
                Layanan pengembangan aplikasi dan web yang disesuaikan untuk
                individu dan perusahaan, siap membantu mewujudkan visi digital
                Anda.
              </p>
              <button className="btn btn-dark btn-lg fw-medium my-text">
                Hire Us!
              </button>
            </div>
            <div className="d-none d-lg-block col-lg-6 text-center">
              <img src={heroImage} alt="Studio" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <img src={illust1} alt="Studio" className="img-fluid" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <span className="fw-medium text-dark fs-5 lh-base mt-3 my-text">
                Reasons why
              </span>
              <h1 className="fw-bold text-dark mb-4 lh-base my-heading1">
                Our Company Might Great For Your Business
              </h1>
              <div className="flex-column mb-4 my-text">
                <div className="d-flex gap-2 mb-4 align-items-center fw-medium">
                  <img src={checked} alt="Icon" /> Developeight adalah
                  perusahaan pengembang software.
                </div>
                <div className="d-flex gap-2 mb-4 align-items-center fw-medium">
                  <img src={checked} alt="Icon" /> Memiliki pengalaman lebih
                  dari 3 tahun di industri.
                </div>
                <div className="d-flex gap-2 mb-4 align-items-center fw-medium">
                  <img src={checked} alt="Icon" /> Spesialisasi dalam
                  pengembangan software, aplikasi web, dan mobile.
                </div>
                <div className="d-flex gap-2 mb-4 align-items-center fw-medium">
                  <img src={checked} alt="Icon" /> Fokus pada solusi yang
                  disesuaikan dengan kebutuhan bisnis.
                </div>
                <div className="d-flex gap-2 align-items-center fw-medium">
                  <img src={checked} alt="Icon" /> Didukung oleh tim ahli di
                  bidang teknologi.
                </div>
              </div>
              <a
                href="#"
                className="btn btn-dark btn-lg fw-medium align-self-start mb-3 my-text"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="py-5">
          <div className="d-flex mb-5 justify-content-between align-items-center">
            <div>
              <p className="mb-3 fw-semibold my-text">Showcase</p>
              <h1 className="fw-bold text-dark my-heading1">Our Best Projects</h1>
            </div>
            <a href="#" className="fw-semibold text-dark my-text">
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
                {/* Need Media Query For Image Rounded Side Responsive */}
                <img
                  src={project1}
                  className="img-fluid object-fit-cover rounded-start"
                  alt="..."
                  style={{ width: "100%", height: "100%", maxHeight: "533px" }}
                />
              </div>
              <div className="col-md-5">
                <div className="d-flex flex-column px-5 mt-4">
                  <h1 className="fw-bold text-dark mt-lg-4 my-heading1">ServBIX</h1>
                  <p className="text-secondary mb-3 my-text">Web Development</p>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                  </div>
                  <p className="fw-semibold text-dark lh-base mb-3 mb-lg-5 my-text">
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
                      <div className="fw-semibold my-text">Roger</div>
                      <div className="text-secondary">CEO ServBIX</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="fw-medium mb-2 my-text">Get To Know About Our Team</div>
              <h1 className="fw-bold text-dark lh-base mb-sm-3 my-heading1">
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
                      <span className="my-text">How do we work?</span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the first item's accordion body.
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
                      <span className="my-text">What does the client need to prepare?</span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Before starting the project, it is better to send a
                      Project Requirements document which will later contain
                      details of the features, prices, and processing time.
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
                      <span className="my-text">Do you accept long-term projects?</span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
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
                      <span className="my-text">Can you work in an office?</span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
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
                      <span className="my-text">Reasons why you have recruit me?</span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
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
