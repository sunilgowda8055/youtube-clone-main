import React from "react";
import "../shorts/shorts.css";
import logo from "../../assets/shouts/logo.svg";
function ShortsSection() {
  return (
    <>
      <div id="short-section">
        <div className="d-flex p-3 align-items-center fs-2">
          <span>
            <img src={logo} alt="logo" />
          </span>
          <h4 className="text-light m-0 mx-2">Shorts</h4>
        </div>
        <div className="row g-0">
          <div className="col-sm-2 col-lg-2 col-xl-2 col-3">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1652278622955-263b8ca92523?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img1"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className="text-light title-section p-2">
              <p className="fw-bold">
                CELEBS follow this dressing rule ALL THE TIME !!
              </p>
              <p className="name-text py-1">21k Views</p>
            </div>
          </div>
          <div className="col-sm-2 col-lg-2 col-xl-2 col-3">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1709395512741-1c30c4bfe016?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D"
                alt="img1"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className="text-light title-section p-2">
              <p className="fw-bold">
                A very graceful unfolding of lotus petals.😍
              </p>
              <p className="name-text py-1">709k Views</p>
            </div>
          </div>
          <div className="col-sm-2 col-lg-2 col-xl-2 col-3">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1709038459992-f44881f89157?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img1"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className="text-light title-section p-2">
              <p className="fw-bold">THE POWER OF STYLING!</p>
              <p className="name-text py-1">370k Views</p>
            </div>
          </div>
          <div className="col-sm-2 col-lg-2 col-xl-2 col-6">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img2"
              />
            </div>
            <div className="text-light title-section p-2">
              <p className="fw-bold">Do you remember her?❤️</p>
              <p className="name-text py-1">334k Views</p>
            </div>
          </div>
          <div className="col-sm-2 col-lg-2 col-xl-2 col-6">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1490497250490-7a00e9bf1e1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img3"
              />
            </div>
            <div className="text-light title-section p-2">
              <p className="fw-bold">Meet my new polaroid camera ❤️</p>
              <p className="name-text py-1">72k Views</p>
            </div>
          </div>
          <div className="col-sm-2 col-lg-2 col-xl-2 col-6">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1613445686389-f6812535c2d4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img4"
              />
            </div>
            <div className="text-light title-section p-2">
              <p className="fw-bold">All white today 😍 </p>
              <p className="name-text py-1">334k Views</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center py-3">
          <hr className="flex-grow-1 hr-line" />
          <button className="short-btn">Show more</button>
          <hr className="flex-grow-1 hr-line" />
        </div>
        <div className="row g-0">
          <div className="col-sm-4 col-lg-4 col-xl-4 col-6 ">
            <div className="card ">
              <img
                src="https://i.ytimg.com/vi/Y9i3OIMitRQ/maxresdefault.jpg"
                alt="img2"
                width={"100%"}
                height={"200px"}
              />
              <div className="d-flex flex-row p-3">
                <img
                  src="https://assets.weforum.org/sf_account/image/rA_TF_tkRNKjxk_gzlr9UlBXMhuoPZNeRaRO7-ys_xw.jpg"
                  alt="somthing"
                  className="rounded-circle img-icon"
                />
                <div className="text-light title-section px-3">
                  <p className="fw-bold">
                    The AI War Has Begun! Every Google I/O AI Announcement
                    Supercut
                  </p>
                  <p className="name-text">Sundar Pichai</p>
                  <p className="name-text">7.35m Views. 4 month ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4 col-xl-4 col-6">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1650960247%2Feempmmnorncucc9a5rna.jpg"
                alt="img2"
                width={"100%"}
                height={"200px"}
              />
              <div className="d-flex flex-row p-3">
                <img
                  src="https://m.media-amazon.com/images/S/amzn-author-media-prod/7i4p455hk67skr4ksvj1gmui05._SY450_CR0%2C0%2C450%2C450_.jpg"
                  alt="somthing"
                  className="rounded-circle img-icon"
                />
                <div className="text-light title-section px-3">
                  <p className="fw-bold">
                    watch with family personal finance masterclass sharan review
                  </p>
                  <p className="name-text">Ankur warikoo</p>
                  <p className="name-text">1.35m Views. 1 month ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4 col-xl-4 col-6">
            <div className="card">
              <img
                src="https://i.ytimg.com/vi/6_2AkT13j6M/maxresdefault.jpg"
                alt="img2"
                width={"100%"}
                height={"200px"}
              />
              <div className="d-flex flex-row p-3">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_kEkulZGxJmZvRE2Bx0UYQBS6jb3jUdTLxDSOxLFA=s900-c-k-c0x00ffffff-no-rj"
                  alt="somthing"
                  className="rounded-circle img-icon"
                />
                <div className="text-light title-section px-3">
                  <p className="fw-bold">
                    Suresh Raina Worldcup Jeet ki Kahani Mr Cricket The Ranveer
                    Show हिंदी
                  </p>
                  <p className="name-text">Ranveer</p>
                  <p className="name-text">5.35m Views. 1 month ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-sm-4 col-lg-4 col-xl-4 col-6 ">
            <div className="card ">
              <img
                src="https://static.vecteezy.com/system/resources/previews/035/080/829/non_2x/mint-and-pink-new-year-youtube-thumbnail-social-media-design-idea-template-editor_template.jpeg"
                alt="img2"
                width={"100%"}
                height={"200px"}
              />
              <div className="d-flex flex-row p-3">
                <img
                  src="https://assets.weforum.org/sf_account/image/rA_TF_tkRNKjxk_gzlr9UlBXMhuoPZNeRaRO7-ys_xw.jpg"
                  alt="somthing"
                  className="rounded-circle img-icon"
                />
                <div className="text-light title-section px-3">
                  <p className="fw-bold">
                    The AI War Has Begun! Every Google I/O AI Announcement
                    Supercut
                  </p>
                  <p className="name-text">Sundar Pichai</p>
                  <p className="name-text">7.35m Views. 4 month ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4 col-xl-4 col-6">
            <div className="card">
              <img
                src="https://images.squarespace-cdn.com/content/v1/577e89279f74568b96604476/1698242321019-YHYT2Y2T7HFW78A1191J/Get+Real+Estate+-+Podcast+Intros+%28horizontal%29+%28YouTube+Thumbnail%29+%281%29.png"
                alt="img2"
                width={"100%"}
                height={"200px"}
              />
              <div className="d-flex flex-row p-3">
                <img
                  src="https://m.media-amazon.com/images/S/amzn-author-media-prod/7i4p455hk67skr4ksvj1gmui05._SY450_CR0%2C0%2C450%2C450_.jpg"
                  alt="somthing"
                  className="rounded-circle img-icon"
                />
                <div className="text-light title-section px-3">
                  <p className="fw-bold">
                    watch with family personal finance masterclass sharan review
                  </p>
                  <p className="name-text">Ankur warikoo</p>
                  <p className="name-text">1.35m Views. 1 month ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4 col-xl-4 col-6">
            <div className="card">
              <img
                src="https://marketplace.canva.com/EAE9DVUCJuQ/1/0/1600w/canva-purple-modern-podcast-guest-interview-episode-youtube-thumbnail-V4kZ5jwpRyk.jpg"
                alt="img2"
                width={"100%"}
                height={"200px"}
              />
              <div className="d-flex flex-row p-3">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_kEkulZGxJmZvRE2Bx0UYQBS6jb3jUdTLxDSOxLFA=s900-c-k-c0x00ffffff-no-rj"
                  alt="somthing"
                  className="rounded-circle img-icon"
                />
                <div className="text-light title-section px-3">
                  <p className="fw-bold">
                    Suresh Raina Worldcup Jeet ki Kahani Mr Cricket The Ranveer
                    Show हिंदी
                  </p>
                  <p className="name-text">Ranveer</p>
                  <p className="name-text">5.35m Views. 1 month ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShortsSection;
