import React from 'react'
import Router from "next/router";
import Countdown, { zeroPad } from 'react-countdown';
import styles from "../styles/Timer2.module.css";
import DrawerLeft from './DrawerLeft';
import DrawerRight from './DrawerRight';

export default function Timer(props) {
    console.log(props)
    const complete=()=>
    {
        if(localStorage.getItem('email') )
        {
            console.log("DONEEEEEE");
            Router.push('/');
        } 
    }
    const Completionist = () => {
        return (
            <span className={styles.timer}>
            <div style={{ backgroundColor: "rgba(0,0,0,0)", padding: "0", margin: "0 auto" }}>
                
               
                    <div style={{ textAlign: "center", fontSize: "17px",  }}>
                       
                        <h1>
                        <div className="flicker"
                        style={{
                            textAlign:"center",
                            fontSize: "25px",
                            display:"flex",
                            justifyContent:"center"
                
                        }}>
                            Game is live !
                        </div>
                            
                        </h1>
                    </div>
               
            </div>
        </span>
        )
        
    }
    
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <>
                {/* <div className="arrow" style={{color:"black 0%",fontSize:"20px"}}>
                    {/* <DrawerLeft level={props.level} userlevel={props.userlevel} loaded={props.loaded} isLoggedin={props.isLoggedin}/> */}
                    {/* <DrawerRight/></div>  */}
                <div className="head">
                <div
                  className="container neon-box"
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    fontFamily: "'Russo One', sans-serif",
                  }}
                >
                  <span className="flicker">SCREENCAST</span>
                </div>
              </div>
                    <div className={styles.timer}style={{ backgroundColor:"rgba(0,0,0,0)",padding: "0", margin: "0 auto" , fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
                                    }}>
                        
                            <div className={styles.show3}style={{ textAlign: "center", fontSize: "17px", justifyContent:"center"}}>
                                <h1>
                                    {props.message}&nbsp;&nbsp;
                                    <div className={styles.tile}>
                                    <div className={styles.tile2}>{zeroPad(days, 2)}</div>&nbsp;:&nbsp;<div className={styles.tile3}>{zeroPad(hours)}</div>&nbsp;:&nbsp;<div className={styles.tile4}>{zeroPad(minutes)}</div>&nbsp;:&nbsp;<div className={styles.tile5}>{zeroPad(seconds)}</div>
                                    </div>
                                </h1>
                                <h1>
                                
                        <div className="flicker"
                        style={{
                            textAlign:"center",
                            fontSize: "25px",
                            display:"flex",
                            justifyContent:"center"
                
                        }}>
                             Game is not live yet !
                        </div>
                            
                        
                                   
                                </h1>
                            </div>
                       
                    </div>
                    </>
                )
            }
        
    };

    return (
        
        <Countdown
        date={props.start}
           
            renderer={renderer}
            onComplete={complete}
        />
    )

}