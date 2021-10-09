import React, {useEffect, useState}from 'react'
import styles from '../styles/Timeline.module.css'
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import Rules from "./Rules";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import Fade from "@material-ui/core/Fade";
// import Rules from "./Rules";
import MenuItem from "@material-ui/core/MenuItem";
import { GoogleLogout } from "react-google-login";
import Router from "next/router";
import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles((theme) => ({
//     Timeline:{
//         backgroundColor: "white",
//         alignItems:"center",
//         margin:"15px",
//         width:"566px",
//         height:"1022px",
//         padding:"10px",
//         left:"32px",
//         top:"28px",
        
//     }
//   }));

function Timeline() {
    // const classes = useStyles();
    const [isSignedIn, setIsSigned] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [Log, setLog] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setIsSigned(true);
      setName(localStorage.getItem("name"));
      setImage(localStorage.getItem("image"));
      setLog(localStorage.getItem("email"));
    }
  });
  const logout = () => {
    //FB.logout();
    //clearTimeout(localStorage.getItem("interval_id"));
    
    console.log("Lady")
    if(localStorage.getItem('start')<Date.now())
    {

      localStorage.removeItem('email');
      
      Router.push('/')
    }
    else
    {

      localStorage.removeItem('email');
      
      Router.reload('/')
    }
  };

    return (
        <>
        <div className="head">
          <div className="container neon-box" style={{
            textAlign: "center",
            fontSize: "25px",
            fontFamily: "'Russo One', sans-serif",
            // color:"white"
          }}>
            <span className="flicker">TIMELINE</span>
            </div>
        </div>
        <div>
            <div className="figure">
                <div className="containerfigure">
            <div className={styles.levelContainer}>
                        <div className={styles.level}>
                            LEVEL 1
                            </div>
                    </div>
                    <div className={styles.levelContainer}>
                        <div className={styles.level}>
                            LEVEL 2
                        </div>
                    </div>
                    <div className={styles.levelContainer}>
                        <div className={styles.level}>
                            LEVEL 3
                        </div>
                    </div>
                    <div className={styles.levelContainer}>
                        <div className={styles.level}>
                            LEVEL 4
                        </div>
                    </div>
                    <div className={styles.levelContainer}>
                        <div className={styles.level}>
                            LEVEL 5
                        </div>
                    </div>
                    <div className={styles.levelContainer}>
                        <div className={styles.level}>
                            LEVEL 6
                        </div>
                    </div>
                    <div className={styles.levelContainer}>
                        <div className={styles.level}>
                            LEVEL 7
                        </div>
                    </div>
                    <div className={styles.levelContainer}>
                        <div className={styles.level}>
                            LEVEL 8
                        </div>
                    </div>
                    <div className={styles.levelContainer}>
                        <div className={styles.level}>
                            LEVEL 9
                        </div>
                    </div>
                    <div className={styles.levelContainer}>
                        <div className={styles.level}>
                            LEVEL 10
                        </div>
                    </div>
                    </div>
                    <div className={styles.wrapper}>
                    <Rules>Rules</Rules>
                    <div>
            {isSignedIn ? (
              <div>
                <Avatar
                  position="right"
                  alt={name}
                  src={image}
                  className={styles.ava}
                  style={{
                    textAlign: "right",
                    
                  }}
                />
              </div>
            ) : (
                <div></div>
              )}
          </div>
          </div>
          {Log && (
          <div className="userDetails-wrapper">
            <div className="details-wrapper">
              <GoogleLogout
                render={(renderProps) => (
                  <div>
                    <Link href="/">
                      <MenuItem onClick={logout}><Typography style={{ color: '#FFFFFF', fontFamily:"'Russo One', sans-serif", fontSize:18 }}>Logout</Typography></MenuItem>
                    </Link>
                  </div>
                )}
                onLogoutSuccess={logout}
              />
            </div>
            {/* <div className="bar" /> */}
            {/* <div className="stand" /> */}
          </div>
        ) }
        </div>
        
        </div>
        </>
    )
}
export default Timeline