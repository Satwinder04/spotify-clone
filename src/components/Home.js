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
                <div className="card-box">
                  <div>
                    <table className="table-1 my-4 ">
                      <thead >
                        <tr >
                          <th className=" px-2 pb-4 fw-normal ">#</th>
                          <th className=" px-2 pb-4 fw-normal ">TITLE</th>
                          <th className=" px-2 pb-4 fw-normal ">ALBUM</th>
                          <th className=" px-2 pb-4 fw-normal ">DATE ADDED</th>
                          <th className=" px-2 pb-4 fw-normal "><img className="table1-icon" src="../img/time.png" /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="col-md-12 "> 
                          <td className="px-2 py-2 align-middle">1</td>
                          <td className="px-2 py-2 align-middle d-flex  ">
                           
                              <img className="song-img" src="../img/Ishq.jpg" />
                            
                            <div className="align-middle d-flex flex-column">
                              <p className=" text-light song-title">Ishq</p>
                              <p className="">Nirvair Pannu Nirvair Pannu </p>
                            </div>

                          </td>
                          <td className="px-2 py-2 align-middle">Ishq</td>
                          <td className="px-2 py-2 align-middle">20 days ago</td>
                          <td className="px-2 py-2 align-middle">7:11</td>
                        </tr>
                        <tr className="col-md-12 "> 
                          <td className="px-2 py-2 align-middle">1</td>
                          <td className="px-2 py-2 align-middle d-flex  ">
                           
                              <img className="song-img" src="../img/Ishq.jpg" />
                            
                            <div className="align-middle d-flex flex-column">
                              <p className=" text-light song-title">Ishq</p>
                              <p className="">Nirvair Pannu Nirvair Pannu </p>
                            </div>

                          </td>
                          <td className="px-2 py-2 align-middle">Ishq</td>
                          <td className="px-2 py-2 align-middle">20 days ago</td>
                          <td className="px-2 py-2 align-middle">7:11</td>
                        </tr>
                        <tr className="col-md-12 "> 
                          <td className="px-2 py-2 align-middle">1</td>
                          <td className="px-2 py-2 align-middle d-flex  ">
                           
                              <img className="song-img" src="../img/Ishq.jpg" />
                            
                            <div className="align-middle d-flex flex-column">
                              <p className=" text-light song-title">Ishq</p>
                              <p className="">Nirvair Pannu Nirvair Pannu </p>
                            </div>

                          </td>
                          <td className="px-2 py-2 align-middle">Ishq</td>
                          <td className="px-2 py-2 align-middle">20 days ago</td>
                          <td className="px-2 py-2 align-middle">7:11</td>
                        </tr>
                        <tr className="col-md-12 "> 
                          <td className="px-2 py-2 align-middle">1</td>
                          <td className="px-2 py-2 align-middle d-flex  ">
                           
                              <img className="song-img" src="../img/Ishq.jpg" />
                            
                            <div className="align-middle d-flex flex-column">
                              <p className=" text-light song-title">Ishq</p>
                              <p className="">Nirvair Pannu Nirvair Pannu </p>
                            </div>

                          </td>
                          <td className="px-2 py-2 align-middle">Ishq</td>
                          <td className="px-2 py-2 align-middle">20 days ago</td>
                          <td className="px-2 py-2 align-middle">7:11</td>
                        </tr>
                        <tr className="col-md-12 "> 
                          <td className="px-2 py-2 align-middle">1</td>
                          <td className="px-2 py-2 align-middle d-flex  ">
                           
                              <img className="song-img" src="../img/Ishq.jpg" />
                            
                            <div className="align-middle d-flex flex-column">
                              <p className=" text-light song-title">Ishq</p>
                              <p className="">Nirvair Pannu Nirvair Pannu </p>
                            </div>

                          </td>
                          <td className="px-2 py-2 align-middle">Ishq</td>
                          <td className="px-2 py-2 align-middle">20 days ago</td>
                          <td className="px-2 py-2 align-middle">7:11</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
            <div className="my-auto w-5 mx-0 px-1">
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
      </div>
    </>
  );
}
export default Home;
