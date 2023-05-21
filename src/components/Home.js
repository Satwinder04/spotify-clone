import { useContext } from "react";
import MusicLists from "../pages/MusicLists";
import SearchPage from "../pages/SearchPage";
import SearchResult from "../pages/SearchResult";
import CardHeading from "./CardHeading";
import Footer from "./Footer";
import MusicCard from "./MusicCard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import VerticalCard from "./VerticalCard";
import { StateContext } from "../context/context";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { showSearch, showHome } = useContext(StateContext);
  return (
    <>
      <div className="main">
        <div className="top">
          <Sidebar />
          <div className="right">
            <div className="r-nav">
              <Navbar />
            </div>

            {showSearch ? (
              <SearchPage />
            ) : (
              <div className="r-body ">
                <div className="r-body-box pt-5">
                  <MusicCard />
                  <div
                    className="card-box d-flex flex-column justify-content-start vertical-box py-5 px-3"
                    style={{ overflowX: "auto" }}
                  >
                    <VerticalCard />
                  </div>

                  {/* <MusicLists /> */}

                  {/* <SearchResult /> */}
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
export default Home;
