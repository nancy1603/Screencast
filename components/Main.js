
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Question from "../components/Question";
import Hint from "../components/Hint";
import AnsAlert from "../components/AnsAlert";
import Answer from "../components/Answer";
import Router from "next/router";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import Rules from "./Rules";
import Timer2 from "../components/Timer2"

var ApplicationUtil = require("../utils/logout");

export default function game(props) {
  
    
      const [answer,setAnswer]= useState(""),
      [questions,setQuestions]=useState(""),
      [qsNo,setQsNo]=useState(1),
      [audio,setAudio]=useState(""),
      [image,setImage]=useState(""),
      [hint,setHint]=useState(""),
      [day,setDay]=useState(""),
      [end,setEnd]=useState(""),
      [loaded,setLoaded]=useState(false)
      const [quizStarted,setQuizStarted]=useState(true);
      const [startdate,setStartDate]=useState();
      

      useEffect (() => {
      axios
      .get(process.env.api + "/api/status")
      .then((response) => {
        var temp3 = new Date(response.data.start_time);
        let temp2 = new Date(response.data.end_time);
        localStorage.setItem('end', temp2.getTime() + (temp2.getTimezoneOffset() * 60000))
        localStorage.setItem("start", temp3.getTime() + (temp3.getTimezoneOffset() * 60000));
        localStorage.setItem("day", response.data.current_day);
        setStartDate(temp3.getTime() + (temp3.getTimezoneOffset() * 60000));
        setDay(localStorage.getItem('day')) 
        setEnd(localStorage.getItem('end'))
            
        if (localStorage.getItem("token") == null) {
            console.log("Unauthorized user _ MAIN");
            Router.push('/');
        }
        else if (localStorage.getItem('start') >= Date.now()) {
            console.log("8");
            setQuizStarted(false);
            setLoaded(true);
        }
        else if (quizStarted){
            getQuestions();
          }
        })
      .catch(err => {
        console.log(err)
        Router.push('/error')
      });
  },[]);

  const getQuestions =() => {
    
    axios
      .get(process.env.api + "/api/question", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.quiz_finished) {
          clearTimeout();
          
          // Router.push("/dashboard");
        }
        
            setQuestions(response.data.question);
            setHint(response.data.hint);
            setQsNo(response.data.question_no);
            setAudio(response.data.audio);
            setImage(response.data.image);
          
        window.scrollTo(0, 0);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setLoaded(true);
      })
      .catch(err => {
        console.log(err)
        ApplicationUtil.ApplicationLogout();
        Router.push('/error')
      })
    
  }

  const submit = (event) => {
    //send final answer for checking
    event.preventDefault()
    checkAns(answer);
    setAnswer("")
  };


  const change = (event) => {
    //keep updating answer
    let e = event.target.value;
    setAnswer(e)
  };
  //check answer from api and send for correct alert
  const checkAns=(ans)=> {
    axios
      .post(
        process.env.api + "/api/checkanswer",
        { answer: ans },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        let r = response.data.result;
        if (r && !response.data.quiz_finished) {
          setQsNo(qsNo+1);
          setAnswer("");
          AnsAlert(1);
          setAnswer("");
          getQuestions();
          props.handleLevel();
        } 
        else if (r && response.data.quiz_finished) {
          AnsAlert(1);
          clearTimeout();
          Router.push("/dashboard");
        } else {
          setAnswer("");
          AnsAlert(0);
        }
      })
      .catch((error) => {
        console.log("error");
        ApplicationUtil.ApplicationLogout();
      });
  };


  
    return (
      <>
        { (loaded === true) ?
          <Layout>
            <div
              style={{ marginRight: "auto", marginLeft: "auto", textAlign: "center", minHeight: "100vh-100px",marginBottom:"10px" }}
              questions
            >
              {quizStarted ? (<>
              <Question qs={questions} qsNo={qsNo} audio={audio} image={image} day={day} level={props.level} userlevel={props.userlevel} loaded={props.loaded}handleLevel={props.handleLevel} isLoggedin={props.isLoggedin}/>
              <div>
                <Answer
                  change={change}
                  answer={answer}
                  submit={submit}
                />
                <Hint hint={hint}
                  submit={submit}
                // submit2={this.submit2}
                />
          <div className="Ruleb">
          <Rules>Rules</Rules>
          </div>
          </div></>):(<div style={{color:"white"}}><Timer2 completed={false} start={startdate}/></div>)}
              {/* <div className='footerBuff'>

              </div> */}
            </div>
            <div style={{display:"inline-flex", justifyContent:"normal",position:"relative"}}>
            {/* {Log && (
          <div className="userDetails-wrapper">
            <div className="details-wrapper">
              <GoogleLogout
                render={(renderProps) => (
                  <div>
                    <Link href="/">
                      <MenuItem onClick={logout}><Typography style={{ color: '#FFFFFF', fontFamily:"'Russo One', sans-serif", fontSize:18 }}>Logout</Typography></MenuItem>
                    </Link>
                  </div>
                )}
                onLogoutSuccess={logout}
              />
            </div>
            
          
          </div>
        ) } */}
        {/* <Rules>Rules</Rules> */}
        </div>
                  
          </Layout>
          : <Loader />
          }
          
      </>
    )
          
          }