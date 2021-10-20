import React from 'react'
import Router from "next/router";
import Countdown, { zeroPad } from 'react-countdown';
import styles from "../styles/Timer2.module.css"

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
                            Game is live !
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
                <div className="head">
                <div
                  className="container neon-box"
                  style={{
                    textAlign: "center",
                    fontSize: "29px",
                    fontFamily: "'Russo One', sans-serif",
                  }}
                >
                  <span className="flicker">SCREENCAST</span>
                </div>
              </div>
                    <div className="flicker" style={{ backgroundColor:"rgba(0,0,0,0)",padding: "0", margin: "0 auto" , fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
                                    }}>
                        
                            <div className={styles.show3}style={{ textAlign: "center", fontSize: "17px", justifyContent:"center"}}>
                                <h1>
                                    {props.message}&nbsp;&nbsp;
                                    <>{zeroPad(days, 2)}</>:<>{zeroPad(hours)}</>:<>{zeroPad(minutes)}</>:<>{zeroPad(seconds)}</>
                                </h1>
                                <h1>
                                    Game is not live yet !
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