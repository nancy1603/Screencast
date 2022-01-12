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
                  fontSize: "30px",
                  fontFamily: "'Russo One', sans-serif",
                }}>
                <span className="flicker">SCREENCAST</span>
              </div>
            </div>
                <div className={styles.showF}>
                  <div className="flicker" ><div className={styles.fp}style={{fontSize:"25px", display:"flex", alignItems:"center", justifyContent:"center",height:"40vh",fontFamily: "'Russo One', sans-serif"}}>
                THANKS FOR PLAYING!
                </div> 
                {/* BE BACK SOON! */}
             </div>
                </div>
        </div>
    )
}

export default FinishedPlaying