import React, {useState} from 'react'
import { Button } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import Timeline from './Timeline';
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { Icon } from '@iconify/react';


const useStyles = makeStyles({
    paper: {
      background:'linear-gradient(112.76deg, rgba(255, 255, 255, 0.04) 7.77%, rgba(255, 255, 255, 0.01) 87.65%) !important',
      backdropFilter: 'blur(10px)',

    }
   });

function DrawerLeft(props) {
    const [state,setState]= React.useState(false);
    // const [isLoggedin,setIsLoggedin]= useState(false);
    const toggleDrawer=(open) => (event) => {
        setState(open)
    }

    const styles = useStyles();
    return (
        <>
        <Button onClick={toggleDrawer(true)}>
        <Icon icon="flat-color-icons:timeline" color="#9747ff" height="40" hFlip={true} />
        {/* className="flicker"
        style={{color:"#4dcfe0", fontSize:"18px", fontWeight:"bold",padding:"0px",margin:"0px"}}> <a><img src="/levels.png" style={{ width: "20px"}}/></a> */}
        </Button>
        <Drawer
        anchor={'left'}
        width={'100%'}
        open={state}
        classes={{ paper: styles.paper }}
        onClose={toggleDrawer(false)}
        >
          <div className="flicker" onClick={toggleDrawer(false)} style={{color:"white", fontSize:"30px",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"30px"}}><AiOutlineCloseCircle/></div>
            <div 
            onClick={toggleDrawer(false)}
            style={{height:"1000vh", minWidth:"40vh"}}>
            {props.isLoggedin ? (<Timeline level={props.level} userlevel={props.userlevel} loaded={props.loaded}/>
            ):(
                <><div className="head">
                <div className="container neon-box" style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontFamily: "'Russo One', sans-serif",
                  // color:"white"
                }}>
                  <span className="flicker">TIMELINE</span>
                  </div>
              </div>
                  <div className="showMob">
                      <div className="flicker" style={{fontSize:"25px", alignItems:"center",height:"40vh", position:"relative",display:"inline-flex"}}>
                      LOGIN FIRST!
                      </div>
                  </div></>)}
                  
                 {/* {
                props.quizFinished? (
                <Timeline level={props.level} userlevel={props.userlevel} loaded={props.loaded}/>):(<></>)
              }  */}
            </div>
            </Drawer>
            
        </>
    )
}

export default DrawerLeft