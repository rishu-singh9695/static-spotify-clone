import React, { useState } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Logo"
      />

      <SidebarOption Icon={HomeSharpIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>

      <hr />

{playlists?.items?.map(playlist =>(

<SidebarOption title={playlist.name} />

))}


    </div>
  );
}

export default Sidebar;
