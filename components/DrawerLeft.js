import React, {useState} from 'react'
import { Button } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import Timeline from './Timeline';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    paper: {
      background:'linear-gradient(112.76deg, rgba(255, 255, 255, 0.04) 7.77%, rgba(255, 255, 255, 0.01) 87.65%) !important',
      //background: 'red'
      //background:'rgba(255,255,255,0.03)',
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
        <Button onClick={toggleDrawer(true)}
        className="flicker"
        style={{color:"#4dcfe0", fontSize:"18px", fontWeight:"bold"}}> <a><img src="/levels.png" style={{ width: "20px"}}/></a></Button>
        <Drawer
        anchor={'left'}
        width={'100%'}
        open={state}
        classes={{ paper: styles.paper }}
        onClose={toggleDrawer(false)}>
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