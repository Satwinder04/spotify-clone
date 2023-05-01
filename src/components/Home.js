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
            <div className="r-body">
              <div className="r-body-box">
                <MusicCard />
                <div className="card-box">
                  <VerticalCard />
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
