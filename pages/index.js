import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleLog from "../components/GoogleLog";
import FbLog2 from "../components/FbLog2";
import Timer2 from "../components/Timer2";
import Router from "next/router";
import data from '../env.json';
import Layout from "../components/Layout";
import Loader from "../components/Loader";

function index() {

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
          Router.push('/finale')
        }
        else if (localStorage.getItem('email') && (localStorage.getItem('start') < Date.now()) && localStorage.getItem('end') > Date.now()) {
          Router.push('/game')
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
    <Layout>

      { (loading === true) ?
        <>
          <div style={{ textAlign: "center", backgroundColor: "rgba(3, 3, 65, 0.5)", boxShadow: "5px 5px 7px rgba(10, 10, 10, 0.9)", width: "92%", maxWidth: "600px", borderRadius: "20px", margin: "0 auto", marginTop: "100px", paddingTop: "30px", paddingBottom: "0px" }}>
            <Timer2 start={start} end={end} />

            <div>
              <div
                className="sign"
                style={{
                  marginTop: "40px",
                  marginBottom: "20px",
                  fontFamily: "'Russo One', sans-serif",
                }}
              >
                <span className="fast-flicker">GEEK</span>TOBER{" "}
                <br />
                <span className="flicker">QUIZ </span>
              </div>

              <div className="login-head" style={{ marginBottom: "60px" }}>
                <h1>Ready to play ?</h1>
              </div>
            </div>

            <div className='rowC' style={{ margin: "0 auto", paddingBottom: '40px', textAlign: "center", width: "100%", justifyContent: "center" }}>
              <GoogleLog />
              {/* <FbLog2 /> */}
            </div>
          </div>
          <div className='footerBuff'>

          </div>
        </>
        : <Loader />}
    </Layout>
  );
}

export default index;
