import React, { useContext } from "react";
import { StateContext } from "../context/context";

function Navbar(props) {
  const { showSearch } = useContext(StateContext);
  return (
    <>
      <div className="s-navbar my-auto d-flex align-item-center justify-content-between">
        <div className="s-nav-button d-flex my-3 mx-2">
          <div className="d-flex my-auto">
            <img src="../img/l-arw.jpg" />
            <img src="../img/r-arw.jpg" />
          </div>
          <div className="mx-3 my-auto">
            {showSearch && (
              <div className="container-input">
                <input
                  type="text"
                  placeholder="What do you want to listen to ?"
                  name="text"
                  className="input"
                />
                <svg
                  fill="#000000"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="d-flex my-3 mx-0 ">
          <button
            type="button"
            class="upgrade btn btn-outline-light fw-bold rounded-pill px-3"
          >
            Upgrade
          </button>

          <div class="dropdown mx-4">
            <button
              class="btn btn-secondary  border-0 rounded-pill p-1 d-flex align-item-center justify-content-between dropbtn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img className="dp" src="../img/sattu.jpg" />
              <span className="mx-2">Sattu</span>
              <img className="d-arrow" src="../img/downward-arrow.png" />
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <a class="dropdown-item py-2" href="#">
                  Account
                </a>
              </li>
              <li>
                <a class="dropdown-item py-2" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a class="dropdown-item py-2" href="#">
                  Upgrade to Premium
                </a>
              </li>
              <li>
                <a class="dropdown-item py-2" href="#">
                  Private Session
                </a>
              </li>
              <li>
                <a class="dropdown-item py-2" href="#">
                  Setting
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#">
                  Loh Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
