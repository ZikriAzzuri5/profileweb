import React from "react";

export const Footer = () => {
  return (
    <section className="bg-dark bg-wave">
      <div className="container">
        <div className="max-w-md mx-auto py-5 text-center">
          <h1 className="verybig-title fw-bold lh-base mt-4 mb-4 my-heading1">
            Build Something Impactful Today, Better.
          </h1>
          <p className="text-light fs-5 lh-base mb-5">
            <span className="my-text">
              We’re offer services that deliver exceptional results. With years
              of experience, strong work ethics, and attention to detail,
              Developeight is the freelancer you can trust to exceed your
              expectations.
            </span>
          </p>
          <a
            href="/contact"
            className="btn btn-light btn-lg my-text fw-semibold mb-5"
          >
            Hire Us!
          </a>
        </div>
      </div>
      <div className="bg-dark">
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <div className="col-md-4">
              <span className="text-light">© 2024 Developeight</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="text-light"
                  href="https://www.instagram.com/developeight.bdg/"
                  target="_blank"
                >
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </section>
  );
};
