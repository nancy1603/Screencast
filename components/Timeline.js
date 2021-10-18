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
import { Button } from '@material-ui/core';
import axios from "axios";
import { Rowing } from '@material-ui/icons';

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

function Timeline(props) {
    // const classes = useStyles();
    const [isSignedIn, setIsSigned] = useState(false);
    // const[level, setLevel] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [Log, setLog] = useState(false);
  // const [loaded, setloaded] = useState([]);
  // const [userlevel, setUserlevel]= useState("");
  
  

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

  // useEffect(()=>{
  //  axios
  //  .get(process.env.api + "/api/status")
  //  .then((response)=>{
  //   // localStorage.setItem("level", response.data.round_questions);
  //   // setLevel(localStorage.getItem('level'))
  //   setLevel(response.data.round_questions)

  //   // var tnp=[];
  //   // for(var i=1; i<=parseInt(level); i++){
  //   //   console.log("loop");
  //   //   tnp.push(
  //   //     <div className={styles.levelContainer} key={i}>
  //   //                     <div className={styles.level} key={i}>
  //   //                         LEVEL {i}
  //   //                         </div> </div>);

    
  //   // }
  //   // setTimeline(tnp => [...tnp,`${tnp.length}`]);
  //  })
  //  axios
  //  .get(process.env.api + "/api/timeline",{
  //   headers: {
  //     Authorization: "Bearer " + localStorage.getItem("token"),
  //   },
  //  })
  //  .then((response)=>{
  //    setUserlevel(response.data.current_question)
  //  })
  //  .then(() => {
  //   setloaded(true);
  // });
  // },[]);
  
  // const runCallback=(cb)=>{
  //   return cb();
  // };

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
        { (props.loaded === true) ?
        <div className="figure">
                <div className="containerfigure">
                      {
                        props.level>0 && Array.apply(0,Array(parseInt(props.level))).map(function(x,i){
                          console.log("level");
                          if(parseInt (props.userlevel) === i+1){
                            return(
                              <div className={styles.activelevelContainer} key={i}>
                                <div className={styles.active}>
                                  LEVEL {i+1}
                                </div>
                              </div>
                            )
                          }else{
                          
                          return (
                          
                          <div className={styles.levelContainer} key={i}>
                          <div className={styles.level}>
                              LEVEL {i+1}
                              </div>
                              </div>
                              )}
                        })
                      }
                    </div>
                    <div className={styles.wrapper}>
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          {Log && (
          // <div className="userDetails-wrapper">
            // <div className="details-wrapper">
              <GoogleLogout
                render={(renderProps) => (
                  <div>
                    <Link href="/">
                      <Button onClick={logout} style={{
                        backgroundColor:"#4dcfe0",
                        borderRadius:"15px",
                        height: "40px", width: "100px", 
                      }}>Logout</Button>
                    </Link>
                  </div>
                )}
                onLogoutSuccess={logout}
              />
            // </div>
            
            
          // </div>
        ) }
        </div>
        
        </div> 
    :(<div></div>)}
    </div>
    
        </>
    )
}
export default Timeline

