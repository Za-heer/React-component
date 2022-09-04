import React from "react";

function Footer() {
  return (
    <>
      <div className="mainFooter bg-dark text-light pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex">
                <div className="icon pe-2 fs-1">
                  <i class="bi bi-journal-album"></i>
                </div>
                <div className="state lh-1">
                  <h4 className="card-color">SUBSCRIBE</h4>
                  <p>GET NEWSLETTERS</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="subscribe me-2"></div>
                <p>Subscribe</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex">
                <div className="icon pe-2 fs-1">
                  <i class="bi bi-person-plus-fill"></i>
                </div>
                <div className="state lh-1">
                  <h4 className="card-color">FOLLOW US</h4>
                  <p>ON SOCIAL NETWORKS</p>
                </div>
              </div>
              <div className="container-para">
                <span className="card-color">@Lorem ipsum</span> dolor sit amet
                consectetur adipisicing elit. Et dolorem repellendus
                consequuntur minima maxime consequatur vero!
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex">
                <div className="icon pe-2 fs-1">
                  <i class="bi bi-envelope-open-fill"></i>
                </div>
                <div className="state lh-1">
                  <h4 className="card-color">EMAIL</h4>
                  <p>CONTACT US</p>
                </div>
              </div>
              <div className="container-para">
                <p>
                  <span className="card-color">Email:</span> Infomail@dot.com{" "}
                  <br />
                  <span className="card-color">Tel: </span> +92(0)xx xxx xx xx{" "}
                  <br />
                  <span className="card-color">Address: </span>phasellus
                  pallentesque 88hs 6000 Lobortis vehicula, Mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
