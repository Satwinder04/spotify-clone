import CardHeading from "./CardHeading";
import MusicCard from "./MusicCard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import VerticalCard from "./VerticalCard";

function Home() {
  return (
    <>
      <div className="main">
        <div className="top">
          <Sidebar />
          <div className="right">
            <div className="r-nav">
              <Navbar />
            </div>
            <div className="r-body ">
              <div className="r-body-box pt-5">
                <MusicCard />
                <div
                  className="card-box d-flex flex-column justify-content-start vertical-box py-5 px-3"
                  style={{ overflowX: "auto" }}
                >
                  <div className="d-flex px-3 justify-content-between">
                    <p className="h3 text-light">Recently Played</p>
                    <p className="text-secondary fw-normal">SHOW ALL</p>
                  </div>
                  {/* <div
                    className="d-flex flex-wrap"
                    style={{ overflowX: "auto" }}
                  > */}
                  <VerticalCard />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom d-flex">
          <div className="foot-card col-md-6 d-flex align-item-center justify-content-center">
            <div className="col-md-2 my-auto p-1">
              <img src="../img/her.jpeg" />
            </div>
            <div className="col-md-9 foot-discription p-3 d-flex align-item-center flex-column justify-content-evenly">
              <h5 className="fw-bold text-light mt-2">Her</h5>
              <p className="mb-2">Shubh</p>
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
          <div className=" volume"></div>
        </div>
      </div>
    </>
  );
}
export default Home;
