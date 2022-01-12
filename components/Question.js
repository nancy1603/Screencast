import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import data from '../env.json';
import AudioHint from "./AudioHint";
import { Data } from "react-f/lib/src/form";
import ResponsiveImage from './ImageHint'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxwidth: 345,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 35,
    color:"neon",
    
  },
  pos: {
    marginBottom: 4,
    margin: "0 auto", 
    maxWidth:"600px"
  },
  media: {
    height: 300,
    width: "auto",
    objectFit:'contain'
    
  },
  
 
});

export default function Question(props) {
  const classes = useStyles();
  
  return (
    
    <div>
      <div className="stick">
      {/* <div className="arrow" style={{color:"black 0%",fontSize:"20px"}}><DrawerLeft level={props.level} userlevel={props.userlevel} loaded={props.loaded} isLoggedin={props.isLoggedin}/><DrawerRight/></div> */}
      <div className="head">
        <div
          className="container neon-box"
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontFamily: "'Russo One', sans-serif",
          }}
        >
          <span className="flicker">SCREENCAST</span>
        </div>
      </div>
      </div>
      <div className="Nstick">
      <Typography
          className={classes.title}
          style={{ fontFamily: "'Montserrat', sans-serif",color:"#fff",fontSize:"20px"}}
          
          gutterBottom
        >
          Question {props.qsNo}
        </Typography>
      <CardContent className="question">
        

        {props.image ? (
          <ResponsiveImage
          src={process.env.api + props.image}
          width={ 1200 }
          height={ 800 } />

        ) : (
            <div></div>
          )}

        <Typography
          className={classes.pos}
          color="#f0f0f0"
          style={{ fontSize: "17px", fontFamily: "'Barlow', sans-serif" }}

        >
          {props.qs}
        </Typography>
        

        <br />
        {props.audio ? (
          <div style={{ textAlign: "center", margin: "0 auto" }}>
            <AudioHint
              style={{ textAlign: "center", margin: "0 auto" }}
              audio={process.env.api  + props.audio}
            />
          </div>
        ) : (
            <div></div>
          )}
      </CardContent>
      </div>
    </div>
  );
}
