import React from "react";
import PlayList from "./PlayList";
import SidebarMenu from "./SidebarMenu";

function Sidebar(props) {
  return (
    <div className="left">
      <div className="l-top-fixed">
        <div className="l-top">
          <SidebarMenu img={"../img/home-5-line.png"} heading={"Home"} />
          <SidebarMenu img={"../img/search.png"} heading={"Search"} />
          <SidebarMenu img={"../img/lib.png"} heading={"Library"} />
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
