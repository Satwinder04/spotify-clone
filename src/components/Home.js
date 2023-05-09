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
                <div className="card-box d-flex flex-column justify-content-start vertical-box py-5 px-3" style={{overflowX: "auto"}}>
                  <div className="d-flex px-3 justify-content-between">
                    <p className="h3 text-light">Recently Played</p>
                    <p className="text-secondary fw-normal">SHOW ALL</p>
                  </div>
                  <div className="d-flex flex-wrap" style={{overflowX: "auto"}}>
                  <VerticalCard />
                  <VerticalCard />
                  <VerticalCard />
                  <VerticalCard />
                  <VerticalCard />
                  <VerticalCard />
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <footer />
        </div>
      </div>
    </>
  );
}
export default Home;
