import React from "react";
import {
  HouseDoorFill,
  CollectionPlay,
  CollectionPlayFill,
} from "react-bootstrap-icons";
import img from "../../assets/shouts/navshort.svg";
import you from "../../assets/shouts/you.svg";
function IconSection() {
  return (
    <>
      {/* <div id="icons">
        <div className="side-icon-bar d-flex flex-column bg-dark">
          <div className="icons-section d-flex flex-column ">
            <HouseDoorFill size={20} color="#fff" />
            <span className=" text-light">Home</span>
          </div>
          <div className="icons-section  d-flex flex-column ">
            <img src={img} alt="som" width={20} height={20} color="#fff" />
            <span className=" text-light">Shorts</span>
          </div>
          <div className="icons-section  d-flex flex-column ">
            <CollectionPlay size={20} color="#fff" />
            <span className=" text-light">Subscriptions</span>
          </div>
          <div className="icons-section  d-flex flex-column ">
            <img src={you} alt="sa" width={20} height={20} />
            <span className="text-light">You</span>
          </div>
        </div>
      </div> */}
      <div id="icons" className="g-0">
        <div className="side-icon-bar active d-flex flex-column">
          <div className="icons-section d-flex flex-column ">
            <HouseDoorFill size={20} color="#fff" />
            <span className=" text-light ">Home</span>
          </div>
          <div className="icons-section  d-flex flex-column ">
            <img src={img} alt="som" width={20} height={20} color="#fff" />
            <span className=" text-light">Shorts</span>
          </div>
          <div className="icons-section  d-flex flex-column ">
            <CollectionPlay size={20} color="#fff" />
            <span className=" text-light">Subscriptions</span>
          </div>
          <div className="icons-section  d-flex flex-column ">
            <CollectionPlayFill size={20} color="#fff" />
            <span className="text-light">You</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconSection;
