import React from "react";

function MusicLists(props) {
  return (
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
  );
}

export default MusicLists;
