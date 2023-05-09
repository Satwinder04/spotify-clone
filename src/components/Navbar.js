import React from "react";

function Navbar(props) {
  return (
    <>
      <div className="s-navbar my-auto d-flex align-item-center justify-content-between">
        <div className="s-nav-button d-flex my-3 mx-2">
          <img src="../img/l-arw.jpg" />
          <img src="../img/r-arw.jpg" />
        </div>
        <div className="d-flex my-3 mx-0 ">

        <button type="button" class="upgrade btn btn-outline-light fw-bold rounded-pill px-3">
          Upgrade</button>



          <div class="dropdown mx-4">
            <button
              class="btn btn-secondary  border-0 rounded-pill p-1 d-flex align-item-center justify-content-between dropbtn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ><img className="dp" src="../img/sattu.jpg"/>
              <span className="mx-2">Sattu</span> 
              <img className="d-arrow" src="../img/downward-arrow.png"/>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Account
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Upgrade to Premium
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Private Session
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Setting
                </a>
              </li>
              <hr/>
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
