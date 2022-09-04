import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container ps-5">
          <div className="navcontainer d-flex">
            <a class="navbar-brand ms-5 px-3 bg-light text-success" href="#">
              Community
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ps-5">
                <li class="nav-item ms-5">
                  <a class="nav-link active " aria-current="page" href="#">
                    Portfolios
                  </a>
                </li>
                <li class="nav-item ms-5">
                  <a class="nav-link active ps-5" aria-current="page" href="#">
                    Insprition
                  </a>
                </li>
                <li class="nav-item ms-5">
                  <a class="nav-link active ps-5" aria-current="page" href="#">
                    News
                  </a>
                </li>
                <li class="nav-item ms-5">
                  <a class="nav-link active ps-5" aria-current="page" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item ms-5">
                  <a class="nav-link active ps-5" aria-current="page" href="#">
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
