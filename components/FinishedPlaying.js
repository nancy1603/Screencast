import React from 'react'
import DrawerLeft from './DrawerLeft'
import DrawerRight from './DrawerRight'
import styles from '../styles/FinishedPlaying.module.css';

function FinishedPlaying(props) {
    return (
        <div>
            {/* <div className="arrow" style={{color:"black 0%",fontSize:"20px"}}>
                <DrawerLeft level={props.level} userlevel={props.userlevel} loaded={props.loaded} isLoggedin={props.isLoggedin}/>
                <DrawerRight/>
                </div> */}
                  <div className="head">
                  <div className="container neon-box"
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontFamily: "'Russo One', sans-serif",
                }}>
                <span className="flicker">SCREENCAST</span>
              </div>
            </div>
                <div className={styles.showF}>
                  <div className="flicker" style={{fontSize:"30px", display:"flex", alignItems:"center", justifyContent:"center",height:"40vh"}}>
                THANKS FOR PLAYING!
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                {/* BE BACK SOON! */}
                </div>
                </div>
        </div>
    )
}

export default FinishedPlaying