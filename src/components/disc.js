import React from "react";
import shalap from "../images/clint.jpg"
function Disc(props) {
  const{title1,title2,paraAll}=props
  return (
    <>
      <div className="card m-5 disc-card border-0">
        <div className="card-body">
        <h5 className="card-title">{title1} <span className="card-color">{title2}</span></h5>
        <hr/>
          <div className="cardimages">
          <img src={shalap} className="card-img-top" alt="shd" />
          </div>
          <p className="card-text text-start">
            {paraAll}
          </p>
          <div className="d-flex justify-content-end">
          <a href="#" className="btn btn-light">
            Read more
          </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Disc;
