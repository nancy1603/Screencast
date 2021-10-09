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
                
                    <div style={{ backgroundColor: "rgba(0,0,0,0)", padding: "0", margin: "0 auto" }}>
                        
                            <div style={{ textAlign: "center", fontSize: "17px", }}>
                                <h1>
                                    {props.message}&nbsp;&nbsp;{zeroPad(days, 2)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
                                </h1>
                                <h1>
                                    Game is not live yet !
                                </h1>
                            </div>
                       
                    </div>
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