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
        
        <Footer />
      </div>
    </>
  );
}
export default Home;
