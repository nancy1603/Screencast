import React, {useState,useEffect} from "react";
import GoogleLog from "./GoogleLog";
import Timer2 from "./Timer2";
import Router from "next/router";
import styles from "../styles/index.module.css";
import axios from "axios";
import Loader from "./Loader";



export default function Login(props) {

    const [end, setEnd] = useState(Date.now());
  const [start, setStart] = useState(Date.now() + 2000);
  const [day, setDay] = useState(0);
  const [loading, setloading] = useState(false)

  useEffect(() => {
    axios
      .get(process.env.api + "/api/status")
      .then((response) => {
        if (response.data.status == 404)
          Router.push('/error')
        var temp = new Date(response.data.start_time);
        setStart(temp.getTime() + (temp.getTimezoneOffset() * 60000));
        let temp2 = new Date(response.data.end_time);
        setEnd(temp2.getTime() + (temp2.getTimezoneOffset() * 60000));
        setDay(response.data.current_day)

        localStorage.setItem("start", start);
        localStorage.setItem("end", end);
        localStorage.setItem("day", day);

        if (localStorage.getItem('day') == 3 && (localStorage.getItem('end') < Date.now())) {
         console.log("finale");
          Router.push('/finale')
        }
        
        else if (localStorage.getItem('email') && (localStorage.getItem('start') < Date.now()) && localStorage.getItem('end') > Date.now()) {
          console.log("game");
          Router.push('/dashboard')
        }
        setloading(true)
      })

      .catch(err => {
        console.log(err)
        Router.push('/error')
      });

    // setloading(true)

  })

    return (
        <div>
            { (loading === true) ?
        <>
        
          <div className={styles.login}>
            {/*<Timer2 start={start} end={end} />*/}

            
              <div 
                /*style={{
                  marginTop: "40px",
                  marginBottom: "20px",
                  fontFamily: "'Russo One', sans-serif",
                }}*/
              >
                {/*<span className="fast-flicker">GEEK</span>TOBER{" "}
                <br />
                <span className="flicker">QUIZ </span>
              </div>

              <div className="login-head" style={{ marginBottom: "60px" }}>
                <h1>Ready to play ?</h1>*/}
                <img className={styles.imgg} src="Other 04.png"/>
              </div>
          

            <div style={{ margin: "0 auto", paddingBottom: '40px', textAlign: "center", width: "100%", justifyContent: "center" }}>
              <GoogleLog />
              {/* <FbLog2 /> */}
            </div>
          </div>
          
          {/*<div className='footerBuff'>

          </div>*/}
        </>
        : <Loader />}
        </div>
    
    )
}