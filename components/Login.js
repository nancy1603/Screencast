import React, {useState,useEffect} from "react";
import GoogleLog from "./GoogleLog";
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

        if (localStorage.getItem('email') && (localStorage.getItem('start') < Date.now()) && localStorage.getItem('end') > Date.now()) {
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
       
        
          <div className={styles.login}>

            
            
              <img className={styles.imgg} src="vector.png"/>
             
          

            <div style={{ margin: "0 auto", paddingBottom: '10px', textAlign: "center", width: "100%", justifyContent: "center" }}>
              <GoogleLog />
            </div>
          </div>
       
        : <Loader />}
        </div>
    
    )
}