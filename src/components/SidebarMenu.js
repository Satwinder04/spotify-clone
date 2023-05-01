import React from "react";

function SidebarMenu(props) {
  return (
    <div className="side-botton">
      <img src={props.img} />
      <p className="mx-3">{props.heading}</p>
    </div>
  );
}

export default SidebarMenu;
