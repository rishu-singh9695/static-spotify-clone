import React from "react";
import "./Footer.css";

import {
  PlayCircleOutlineSharp,
  PlaylistPlaySharp,
  SkipNextSharp,
  VolumeDown,
} from "@mui/icons-material";
import { SkipPreviousSharp } from "@mui/icons-material";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Slider, Grid } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img 
        className="footer__albumLogo"
        src="https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a" alt="" />

        <div className="footer__songInfo">
          <h4>Believer</h4>
          <p>Imagine Dragon</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousSharp className="footer__icon" />
        <PlayCircleOutlineSharp fontSize="large" className="footer__icon" />
        <SkipNextSharp className="footer__icon" />
        < RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlaySharp />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
