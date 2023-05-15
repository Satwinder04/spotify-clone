import axios from "axios";
import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/context";
function SearchPage(props) {
  const { token, getSearchCategorys, searchCategory } =
    useContext(StateContext);
  const getSearchCategory = async () => {
    const response = await axios(
      "https://api.spotify.com/v1/browse/categories?limit=50",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const { items } = response.data.categories;
    getSearchCategorys(items);
  };
  useEffect(() => {
    getSearchCategory();
  }, [token]);
  console.log(searchCategory);
  return (
    <div className="r-body-box pt-5">
      <div className="card-box my-0">
        <div className="d-flex flex-column w-full px-2 m-4">
          <div className="">
            <p className="h3 text-start text-light">Browse all</p>
          </div>
          <div className="col-md-12 my-4 d-flex flex-wrap">
            {searchCategory &&
              searchCategory.map((categorie) => {
                const { id, name, icons } = categorie;
                return (
                  <div
                    className="card3 col-md-4"
                    style={{ background: "rgb(225, 51, 0)" }}
                    key={id}
                  >
                    <p className="h5 p-3 text-light">{name}</p>
                    <img className="col-md-7 mx-auto " src={icons[0].url} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
