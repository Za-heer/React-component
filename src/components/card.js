import React from "react";

function Card(props) {
  const {title,heading,cards,para1,para2,para3,icons} = props;
  return (
    <>
      <div className="card bg-dark mainBody rounded-0">
        <div className="card-body">
          <h5 className="card-title  card-color text-center mt-3">{title}</h5>
          <div className="text-center fs-1">
          {/* <i className="bi bi-tools"></i> */}
          {icons}
          </div>
          <p className="card-text lh-1 text-center mb-3">
            <h5>{heading}</h5>
            <p>{cards}</p>
          </p>
          <div className="line"></div>
          <div className="text-center mt-4 mb-4">
            <p>{para1}<br/>{para2}<br/>{para3}</p>
          </div>
          </div>
        </div>
    </>
  );
}

export default Card;
