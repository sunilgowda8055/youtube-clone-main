import React from "react";
import img from "../../assets/shouts/navshort.svg";
import {
  HouseDoorFill,
  CollectionPlay,
  CollectionPlayFill,
} from "react-bootstrap-icons";
import IconSection from "./IconSection";
import { useState } from "react";

function VideoSection({ open }) {
  // const [show, setShow] = useState(true);

  return (
    <>
      <div
        id="lest-section"
        className="d-flex justify-content-arounds align-items-center align-items-center text-white list-item"
      >
        <li>All</li>
        <li>Storytelling</li>
        <li>Practice</li>
        <li>JavaScript</li>
        <li>Thought</li>
        <li>Viocal language</li>
        <li>Prodacast</li>
        <li>Music</li>
        <li>Lectures</li>
        <li>Live</li>
        <li>Prodacast</li>
        <li>Practice</li>
        <li>JavaScript</li>
        <li>Thought</li>
      </div>
      <div id="card-section" className="d-flex  flex-row">
        <div id="video-list" className="d-flex  flex-wrap">
          <div className="row g-0">
            <div className="col-sm-4">
              <div className="card">
                <div style={{ position: "relative", display: "inline-block" }}>
                  <img
                    src="https://i.ytimg.com/vi/oE4g4P41KLM/maxresdefault.jpg"
                    alt="img2"
                    width={"100%"}
                    height={"224px"}
                    style={{ display: "block" }}
                  />
                  <span
                    class="time-duration"
                    style={{
                      position: "absolute",
                      top: "190px",
                      right: "10px",
                    }}
                  >
                    20:45
                  </span>
                </div>
                <div className="d-flex flex-row p-2">
                  <img
                    src="https://yt3.googleusercontent.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s900-c-k-c0x00ffffff-no-rj"
                    alt="somthing"
                    className="rounded-circle img-icon mx-2"
                  />
                  <div className="text-light title-section px-2">
                    <p className="fw-bold">
                      Don't waste your Time- by sandeep maheshwari Hindi
                    </p>
                    <p className="name-text">sandeep maheshwari</p>
                    <p className="name-text">4.35m Views. 5month ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div style={{ position: "relative", display: "inline-block" }}>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1358/1*awyUrAIbGWZfxRzOXR8qFw.jpeg"
                    alt="somthin"
                    width={"100%"}
                    height={"224px"}
                    style={{ objectFit: "cover" }}
                  />
                  <span
                    class="time-duration d-flex  align-items-center"
                    style={{
                      position: "absolute",
                      top: "190px",
                      right: "10px",
                    }}
                  >
                    1:00:45
                  </span>
                </div>
                <div className="d-flex flex-row py-2">
                  <img
                    src="https://yt3.googleusercontent.com/ytc/AIdro_kNj3WcuCpZpIwPdHhKPOWhxh9gUiTD0BG0dnOgGg=s900-c-k-c0x00ffffff-no-rj"
                    alt="somthing"
                    className="rounded-circle img-icon"
                  />
                  <div className="text-light title-section px-2">
                    <p className="fw-bold">
                      First 20 hours how to learn anything
                    </p>
                    <p className="name-text">Josh Kaufman</p>
                    <p className="name-text">
                      3.35m Views<span className="fs-1 m-0">.</span> 7 month ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div style={{ position: "relative", display: "inline-block" }}>
                  <img
                    src="https://i.ytimg.com/vi/DU3ihbSbA8c/sddefault.jpg"
                    alt="img2"
                    width={"100%"}
                    height={"224px"}
                  />
                  <span
                    class="time-duration"
                    style={{
                      position: "absolute",
                      top: "170px",
                      right: "10px",
                    }}
                  >
                    10:45
                  </span>
                </div>
                <div className="d-flex flex-row p-2">
                  <img
                    src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxwZXJzb24lMjBwcm9maWwlMjBpbWd8ZW58MHx8MHx8fDA%3D"
                    alt="somthing"
                    className="rounded-circle img-icon"
                  />
                  <div className="text-light title-section px-2">
                    <p className="fw-bold">Red 7 books must change your life</p>
                    <p className="name-text">Ravi G motwani</p>
                    <p className="name-text">1.1m Views. 2days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-sm-4">
              <div className="card">
                <img
                  src="https://i.ytimg.com/vi/PGUdWfB8nLg/maxresdefault.jpg"
                  alt="img2"
                  width={"100%"}
                  height={"224px"}
                />
                <div className="d-flex flex-row p-3">
                  <img
                    src="https://i.guim.co.uk/img/media/00748f0157bf4006869147d3ce7dd34852f1ec5b/0_221_2651_1591/master/2651.jpg?width=1200&height=12196pxality=85&auto=format&fit=crop&s=e5e1c37ec435827c1337f3035332de5a"
                    alt="somthing"
                    className="rounded-circle img-icon"
                  />
                  <div className="text-light title-section px-3">
                    <p className="fw-bold">
                      Barack Obama's Inspirational Speech One of the best
                      leadership.
                    </p>
                    <p className="name-text">Barack Obama's</p>
                    <p className="name-text">2.35m Views. 1month ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img
                  src="https://i.ytimg.com/vi/PReWdfg2cM8/maxresdefault.jpg"
                  alt="img2"
                  width={"100%"}
                  height={"224px"}
                />
                <div className="d-flex flex-row p-3">
                  <img
                    src="https://jaipurliteraturefestival.org/uploads_jaipurlitfest/speakers/4291-gaur-gopal-das.jpg"
                    alt="somthing"
                    className="rounded-circle img-icon"
                  />
                  <div className="text-light title-section px-3">
                    <p className="fw-bold">
                      The secret of health for both mind and body guru gopal
                    </p>
                    <p className="name-text">guru gopal</p>
                    <p className="name-text">2.3m Views. 4month ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img
                  src="https://i.ytimg.com/vi/CVis-T9ZEM4/maxresdefault.jpg"
                  alt="img2"
                  width={"100%"}
                  height={"224px"}
                />
                <div className="d-flex flex-row p-3">
                  <img
                    src="https://yt3.googleusercontent.com/ytc/AIdro_kEkulZGxJmZvRE2Bx0UYQBS6jb3jUdTLxDSOxLFA=s900-c-k-c0x00ffffff-no-rj"
                    alt="somthing"
                    className="rounded-circle img-icon"
                  />
                  <div className="text-light title-section px-3">
                    <p className="fw-bold">
                      Watch with family personal finance masterclass sharan
                      review
                    </p>
                    <p className="name-text">Ranveer</p>
                    <p className="name-text">1.35m Views. 1month ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {open ? null : <IconSection />} */}
    </>
  );
}

export default VideoSection;
