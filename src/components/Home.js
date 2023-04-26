function Home() {
  return (
    <>
      {/* <div className="h-screen">
        <div className="grid grid-rows-7 grid-flow-col gap-0 h-5/6">
          <div className="row-span-6 bg-blue-400">
            <div className="container h-1/2 mx-auto bg-black d-flex">
              <ul>
                <li className=" ">
                  <div className="d-flex  mx-3 my-3">
                  <img className="w-7" style={{filter:"invert()"}} src="../img/homepage.png"/>
                  <p className="mx-3 fw-bold text-light" >Home</p>
                  </div>
                </li>
                <li className=" ">
                  <div className="d-flex  mx-3 my-3">
                  <img className="w-7" style={{filter:"invert()"}} src="../img/homepage.png"/>
                  <p className="mx-3 fw-bold text-light" >Search</p>
                  </div>
                </li>
                <li className=" ">
                  <div className="d-flex  mx-3 my-3">
                  <img className="w-7" style={{filter:"invert()"}} src="../img/homepage.png"/>
                  <p className="mx-3 fw-bold text-light" >Your Library</p>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="h-auto col-span-4 row-auto bg-red-400">02</div>
          <div className="h-auto row-span-5 col-span-4 bg-green-400">03</div>
        </div>
        <div className="grid grid-rows-7 grid-flow-col gap-0 h-1/6">
          <div className="row-span-6 col-span-3 bg-yellow-400">01</div>
        </div>
        <div className="grid text-center d-flex">
          <div className="g-col-6 g-col-md-4 bg-danger">
            .g-col-6 .g-col-md-4
          </div>
          <div className="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
          <div className="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
        </div>
        <div className="grid text-center">
          <div className="g-col-4">.g-col-4</div>
          <div className="g-col-4">.g-col-4</div>
          <div className="g-col-4">.g-col-4</div>
        </div>
      </div> */}

      <div className="main">
        <div className="top">
          <div className="left">
            <div className="l-top">
              <p className="mx-1 my-2">
                <img className="w-8 mx-3 my-1" src="../img/home-5-line.png" />
                Home
              </p>
              <p className="mx-1 my-2">
                <img className="w-8 mx-3 my-1" src="../img/home-5-line.png" />
                Home
              </p>
              <p className="mx-1 my-2">
                <img className="w-8 mx-3 my-1" src="../img/home-5-line.png" />
                Home
              </p>
              <p className="mx-1 my-2 mt-4">
                <img className="w-8 mx-3 my-1" src="../img/home-5-line.png" />
                Home
              </p>
              <p className="mx-1 my-2">
                <img className="w-8 mx-3 my-1" src="../img/home-5-line.png" />
                Home
              </p>
            </div>
            <div className="l-bottom">
              <div className="l-bottom-box">
                <p>Abhishek</p>
                <p>satta</p>
                <p>Abhishek</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="r-nav"></div>
            <div className="r-body"></div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </>
  );
}
export default Home;
