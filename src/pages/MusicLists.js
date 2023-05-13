import React from "react";

function MusicLists(props) {
  return (
    <>
      <div className="card-box ">
        <div className="col-md-12 m-auto d-flex">
          <div className="col-md-2 mx-4">
            <img className=" banner-img" src="../img/like.jpg" />
          </div>
          <div
            className="col-md-10 text-light d-flex flex-column justify-content-between py-3"
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

      <div className="card-box">
        <div>
          <table className="table-1 my-4 ">
            <thead>
              <tr>
                <th className=" px-2 pb-4 fw-normal ">#</th>
                <th className=" px-2 pb-4 fw-normal ">TITLE</th>
                <th className=" px-2 pb-4 fw-normal ">ALBUM</th>
                <th className=" px-2 pb-4 fw-normal ">DATE ADDED</th>
                <th className=" px-2 pb-4 fw-normal ">
                  <img className="table1-icon" src="../img/time.png" />
                </th>
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
    </>
  );
}

export default MusicLists;
