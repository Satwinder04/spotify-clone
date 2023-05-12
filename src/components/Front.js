import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/context";

function Front() {
  const handleClick = () => {
    const clientId = "0fb5fff12dd34795ba6acbe5e5644460";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_daialog=true`;
  };
  return (
    <>
      <div className="relative h-screen overflow-hidden bg-black">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-green-600 sm:text-6xl">
                Get Premium free for 1 month
              </h1>
              <p className="mt-4 text-xl text-gray-100">
                Just ₹119/month after. Debit and credit cards accepted. Cancel
                anytime.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="../img/diljit.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="../img/ed.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                        <div className="h-52 mt-32 w-44 overflow-hidden rounded-lg md:h-64 md:mt-0">
                          <img
                            src="../img/selena.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="../img/sidhu2.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className7474="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="../img/mroon5.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="../img/Shubh.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="../img/shakira.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClick}
                  className="inline-block rounded-md  border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-green-700"
                >
                  Get Started
                </button>
                <a
                  href="#"
                  className="mx-2 inline-block rounded-md border border-transparent bg-transperant px-8 py-3 text-center font-medium text-white hover:bg-green-700"
                >
                  See Other Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Front;
