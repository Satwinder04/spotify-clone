import React from "react";

function Footer(props) {
  return (
    <>
      <div className="bottom d-flex">
        <div className="px-1 foot-card col-md-6 d-flex align-item-center justify-content-center">
          <div className="col-md-2 my-auto p-1 ">
            <img src="../img/her.jpeg" />
          </div>
          <div className="col-md-9 foot-discription p-3 d-flex align-item-center  justify-content-start">
            <div className="my-auto">
              <h5 className="fw-bold text-light ">Her</h5>
              <p className="">Shubh</p>
            </div>
            <div className="my-auto mx-3">
              <label className="container">
                <input defaultChecked="checked" type="checkbox" />
                <div className="checkmark">
                  <svg viewBox="0 0 256 256">
                    <rect fill="none" height={256} width={256} />
                    <path
                      d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                      strokeWidth="20px"
                      stroke="#FFF"
                      fill="none"
                    />
                  </svg>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="py-auto controler1 d-flex flex-column align-item-center justify-content-center">
          <div className="control-buttons d-flex justify-content-center align-item-center">
            <img src="../img/shuffle.png" className="footer-icon" />
            <img src="../img/previous.png" className="footer-icon" />
            <img src="../img/play2.jpg" className="footer-play-button" />
            <img src="../img/next.png" className="footer-icon" />
            <img src="../img/repeat.png" className="footer-icon" />
          </div>
          <div className="rang1 d-flex justify-content-center align-item-center">
            <p className="duration">0:00</p>
            <div
              className="progress my-auto"
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{
                width: "80%",
                height: "5px",
                background: "rgb(94, 94, 94)",
              }}
            >
              <div
                className="progress-bar"
                style={{ width: "25%", background: "white" }}
              />
            </div>
            <p className="duration">4:00</p>
          </div>
        </div>
        <div className=" volume ">
          <div className="footer-icon-2 mx-0">
            <img src="../img/mic.png" />
          </div>
          <div className="footer-icon-2 mx-0">
            <img src="../img/queue.png" />
          </div>
          <div className="footer-icon-2 mx-0">
            <img src="../img/pc.png" />
          </div>
          <div className="footer-icon-2 mx-0">
            <img src="../img/sound.png" />
          </div>
          <div className="my-auto w-5 mx-0 px-2">
            {/* <input type="range" min={1} max={100} defaultValue={50} style={{width:"6vw", height: "5px" }}/> */}
            <div
              className="progress"
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{
                height: "4px",
                width: "7vw",
                background: "rgb(94, 94, 94)",
              }}
            >
              <div
                className="progress-bar"
                style={{ width: "25%", background: "white" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
