import React, { useContext } from "react";
import PlayList from "./PlayList";
import SidebarMenu from "./SidebarMenu";
import { StateContext } from "../context/context";

function Sidebar(props) {
  const { searchHandleClick, homeHandleClick } = useContext(StateContext);
  return (
    <div className="left">
      <div className="l-top-fixed">
        <div className="l-top">
          <SidebarMenu
            img={"../img/home-5-line.png"}
            heading={"Home"}
            handleClick={homeHandleClick}
          />
          <SidebarMenu
            img={"../img/search.png"}
            heading={"Search"}
            handleClick={searchHandleClick}
          />
          <SidebarMenu img={"../img/lib.png"} heading={"Library"} />
          <div className="my-2"></div>
          <SidebarMenu img={"../img/add.png"} heading={"Create PlayList"} />
          <SidebarMenu img={"../img/like.png"} heading={"Liked Songs"} />
        </div>
      </div>
      <div className="l-bottom">
        <PlayList />
      </div>
    </div>
  );
}

export default Sidebar;
