import React, {useState} from 'react'
import { Button } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import Timeline from './Timeline';

function DrawerLeft(props) {
    const [state,setState]= React.useState(false);
    // const [isLoggedin,setIsLoggedin]= useState(false);
    const toggleDrawer=(open) => (event) => {
        setState(open)
    }
    return (
        <>
        <Button onClick={toggleDrawer(true)}
        className="flicker"
        style={{color:"#4dcfe0", fontSize:"18px", fontWeight:"bold"}}> <a><img src="/levels.png" style={{ width: "20px"}}/></a></Button>
        <Drawer
        anchor={'left'}
        width={'100%'}
        open={state}
        onClose={toggleDrawer(false)}>
            <div 
            onClick={toggleDrawer(false)}
            style={{backgroundColor:"#1b0045", height:"1000vh", minWidth:"40vh"}}>
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