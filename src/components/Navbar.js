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

        <button type="button" class="upgrade btn btn-outline-light fw-bold rounded-pill px-3">Upgrade</button>



          <div class="dropdown mx-4">
            <button
              class="btn btn-outline-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
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
