import MusicLists from "../pages/MusicLists";
import CardHeading from "./CardHeading";
import Footer from "./Footer";
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

                  <VerticalCard />
                </div>
<<<<<<< HEAD
                {/* <MusicLists /> */}
=======
                <div className="card-box ">
                  <div className="col-md-12 m-auto d-flex">
                    <div className="col-md-2 mx-5">
                      <img className=" banner-img" src="../img/like.jpg" />
                    </div>
                    <div
                      className=" text-light d-flex flex-column justify-content-between py-3 "
                      style={{ height: "30vh" }}
                    >
                      <p className="banner-head mt-4">Play List</p>
                      <p className="banner-title h1">Liked Songs</p>
                      <p className="banner-details d-flex align-item-center">
                        <button
                          class="btn btn-secondary  border-0 rounded-pill p-1 d-flex align-item-center justify-content-between "
                          type="button"
                          
                        >
                          <img className="dp" src="../img/sattu.jpg" />
                          <span className="mx-3">Sattu</span>
                         
                        </button>
                        <span className="my-auto mx-1">341 Songs</span>
                      </p>
                    </div>
                  </div>
                </div>
                <MusicLists />

                <div className="card-box">
                  <div className="d-flex flex-column w-full px-2 m-4">
                    <div className="">
                      <p className="h3 text-start text-light">Browse all</p>
                    </div>
                    <div className="col-md-12 my-4 d-flex flex-wrap">
                      <div className="card3 col-md-4"  style={{ background: "rgb(225, 51, 0)" }}>
                        <p className="h4 p-3 text-light">Podcast</p>
                        <img className="col-md-7 mx-auto " src="../img/podcast.jpg" />
                      </div>
                      <div className="card3 col-md-4"  style={{ background: "rgb(225, 51, 0)" }}>
                        <p className="h4 p-3 text-light">Podcast</p>
                        <img className="col-md-7 mx-auto " src="../img/podcast.jpg" />
                      </div>
                      <div className="card3 col-md-4"  style={{ background: "rgb(225, 51, 0)" }}>
                        <p className="h4 p-3 text-light">Podcast</p>
                        <img className="col-md-7 mx-auto " src="../img/podcast.jpg" />
                      </div>
                      <div className="card3 col-md-4"  style={{ background: "rgb(225, 51, 0)" }}>
                        <p className="h4 p-3 text-light">Podcast</p>
                        <img className="col-md-7 mx-auto " src="../img/podcast.jpg" />
                      </div>
                      <div className="card3 col-md-4"  style={{ background: "rgb(225, 51, 0)" }}>
                        <p className="h4 p-3 text-light">Podcast</p>
                        <img className="col-md-7 mx-auto " src="../img/podcast.jpg" />
                      </div>
                      <div className="card3 col-md-4"  style={{ background: "rgb(225, 51, 0)" }}>
                        <p className="h4 p-3 text-light">Podcast</p>
                        <img className="col-md-7 mx-auto " src="../img/podcast.jpg" />
                      </div>
                      <div className="card3 col-md-4"  style={{ background: "rgb(225, 51, 0)" }}>
                        <p className="h4 p-3 text-light">Podcast</p>
                        <img className="col-md-7 mx-auto " src="../img/podcast.jpg" />
                      </div>
                      <div className="card3 col-md-4"  style={{ background: "rgb(225, 51, 0)" }}>
                        <p className="h4 p-3 text-light">Podcast</p>
                        <img className="col-md-7 mx-auto " src="../img/podcast.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
>>>>>>> 4eba80aa4e180373c05b003b351e5c09cc1fd69e
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
export default Home;
