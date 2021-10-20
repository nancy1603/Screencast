import React from 'react'
// import DrawerLeft2 from './DrawerLeft2'
import DrawerRight from './DrawerRight'
import styles from '../styles/FinishedPlaying.module.css';

function FinishedPlaying(props) {
    return (
        <div>
            <div className="arrow1" style={{color:"black 0%",fontSize:"20px"}}>
                {/* <DrawerLeft2 level={props.level} userlevel={props.userlevel} loaded={props.loaded}/> */}
                <DrawerRight/>
                </div>
                  <div className="head">
                  <div className="container neon-box"
                style={{
                  textAlign: "center",
                  fontSize: "29px",
                  fontFamily: "'Russo One', sans-serif",
                }}>
                <span className="flicker">SCREENCAST</span>
              </div>
            </div>
                <div className={styles.showF}>
                  <div className="flicker" style={{fontSize:"25px", alignItems:"center", justigyContent:"center",display:"inline-flex", position:"absolute",height:"40vh"}}>
                THANKS FOR PLAYING!
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                {/* BE BACK SOON! */}
                </div>
                </div>
        </div>
    )
}

export default FinishedPlaying