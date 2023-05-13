import React from "react";

function SearchResult(props) {
  return (
    <div>
      <div className="card-box">
        <div className="w-full d-flex my-auto">
          <div className="left-result d-flex flex-column justify-content-center mx-2">
            <p className="h5 fw-bold text-light mx-3">Top Result</p>
            <div className="l-result-b mx-3 my-3">
              <div className="">
                <img src="../img/sidhu3.jpg" className="m-3 l-result-dp" />
              </div>
              <div className="">
                <p className="h3 text-light mx-3 my-3 fw-bold">
                  Sidhu Moose Wala
                </p>
              </div>
              <div className=" d-flex mx-3 align-item-center justify-content-between">
                <p className="mx-3 text-light my-auto category">ARTIST</p>

                <img
                  src="../img/play.jpg"
                  className="restul-play-button mx-2"
                />
              </div>
            </div>
          </div>
          <div className="right-result d-flex flex-column justify-content-center ">
            <p className="h5 fw-bold text-light mx-3">Songs</p>
            <div className="r-result-b  my-3">
              <ul
                role="list"
                className="d-flex flex-column justify-content-between h-full"
              >
                <li className="song-list-item flex justify-between gap-x-6 px-3 py-2  hover:bg-gray-800">
                  <div className="flex gap-x-4">
                    <img
                      className="h-10 w-10 flex-none rounded-1 "
                      src="../img/sidhu3.jpg"
                      alt=""
                    />
                    <div className="min-w-0 flex-auto py-auto">
                      <p className="text-sm font-semibold leading-6 text-light">
                        G.O.A.T
                      </p>
                      <p className="mt-0 truncate text-xs leading-5 text-gray-400">
                        Sidhu Moose Wala
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end my-auto">
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <label className="container ">
                        <input defaultChecked="checked" type="checkbox" />
                        <div className="checkmark">
                          <svg viewBox="0 0 256 256">
                            <rect fill="none" height={256} width={256} />
                            <path
                              d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                              strokeWidth="20px"
                              stroke="#FFF"
                              fill="none"
                            />
                          </svg>
                        </div>
                      </label>
                      <p className="text-xs leading-5 text-light">3:34</p>
                    </div>
                  </div>
                </li>
                <li className="song-list-item flex justify-between gap-x-6 px-3 py-2  hover:bg-gray-800">
                  <div className="flex gap-x-4">
                    <img
                      className="h-10 w-10 flex-none rounded-1 "
                      src="../img/sidhu3.jpg"
                      alt=""
                    />
                    <div className="min-w-0 flex-auto py-auto">
                      <p className="text-sm font-semibold leading-6 text-light">
                        G.O.A.T
                      </p>
                      <p className="mt-0 truncate text-xs leading-5 text-gray-400">
                        Sidhu Moose Wala
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end my-auto">
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <label className="container">
                        <input defaultChecked="checked" type="checkbox" />
                        <div className="checkmark">
                          <svg viewBox="0 0 256 256">
                            <rect fill="none" height={256} width={256} />
                            <path
                              d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                              strokeWidth="20px"
                              stroke="#FFF"
                              fill="none"
                            />
                          </svg>
                        </div>
                      </label>
                      <p className="text-xs leading-5 text-light">3:34</p>
                    </div>
                  </div>
                </li>
                <li className="song-list-item flex justify-between gap-x-6 px-3 py-2  hover:bg-gray-800">
                  <div className="flex gap-x-4">
                    <img
                      className="h-10 w-10 flex-none rounded-1 "
                      src="../img/sidhu3.jpg"
                      alt=""
                    />
                    <div className="min-w-0 flex-auto py-auto">
                      <p className="text-sm font-semibold leading-6 text-light">
                        G.O.A.T
                      </p>
                      <p className="mt-0 truncate text-xs leading-5 text-gray-400">
                        Sidhu Moose Wala
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end my-auto">
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <label className="container">
                        <input defaultChecked="checked" type="checkbox" />
                        <div className="checkmark">
                          <svg viewBox="0 0 256 256">
                            <rect fill="none" height={256} width={256} />
                            <path
                              d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                              strokeWidth="20px"
                              stroke="#FFF"
                              fill="none"
                            />
                          </svg>
                        </div>
                      </label>
                      <p className="text-xs leading-5 text-light">3:34</p>
                    </div>
                  </div>
                </li>
                <li className="song-list-item flex justify-between gap-x-6 px-3 py-2  hover:bg-gray-800">
                  <div className="flex gap-x-4">
                    <img
                      className="h-10 w-10 flex-none rounded-1 "
                      src="../img/sidhu3.jpg"
                      alt=""
                    />
                    <div className="min-w-0 flex-auto py-auto">
                      <p className="text-sm font-semibold leading-6 text-light">
                        G.O.A.T
                      </p>
                      <p className="mt-0 truncate text-xs leading-5 text-gray-400">
                        Sidhu Moose Wala
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end my-auto">
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <label className="container">
                        <input defaultChecked="checked" type="checkbox" />
                        <div className="checkmark">
                          <svg viewBox="0 0 256 256">
                            <rect fill="none" height={256} width={256} />
                            <path
                              d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                              strokeWidth="20px"
                              stroke="#FFF"
                              fill="none"
                            />
                          </svg>
                        </div>
                      </label>
                      <p className="text-xs leading-5 text-light">3:34</p>
                    </div>
                  </div>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
