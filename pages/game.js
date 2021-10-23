

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Question from "../components/Question";
import Hint from "../components/Hint";
import AnsAlert from "../components/AnsAlert";
import Answer from "../components/Answer";
import Router from "next/router";
// import data from '../env.json';
import Layout from "../components/Layout";
import Loader from "../components/Loader";

export default function game() {
  
    
      const [answer,setAnswer]= useState(""),
      [questions,setQuestions]=useState(""),
      [qsNo,setQsNo]=useState(1),
      [audio,setAudio]=useState(""),
      [image,setImage]=useState(""),
      [isLoggedIn,setIsLoggedIn]=useState (false),
      [hint,setHint]=useState(""),
      [day,setDay]=useState(""),
      [end,setEnd]=useState(""),
      [message,setMessage]=useState(""),
      [v,setV]=useState(""),
      [loaded,setLoaded]=useState(false)
    

      useEffect (() => {
      axios
      .get(process.env.api + "/api/status")
      .then((response) => {
        var temp3 = new Date(response.data.start_time);
        let temp2 = new Date(response.data.end_time);
        localStorage.setItem('end', temp2.getTime() + (temp2.getTimezoneOffset() * 60000))
        localStorage.setItem("start", temp3.getTime() + (temp3.getTimezoneOffset() * 60000));
        let temp = localStorage.getItem('end') - Date.now();
        localStorage.setItem("day", response.data.current_day);


         setDay(localStorage.getItem('day')) 
         setEnd(localStorage.getItem('end'))
          if (localStorage.getItem('day') == 3 && (localStorage.getItem('end') < Date.now())){
            console.log("finale");
            Router.push('/finale')
          }
            
          if (!(localStorage.getItem("email"))) {
            console.log("9");
            AnsAlert(8)
            Router.push('/');
          }
          else if (!(localStorage.getItem('start') <= Date.now())) {
            console.log("8");
            // AnsAlert(8)
            Router.push("/");
          }
          else {
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
          clearTimeout(v);
          Router.push("/finale");
        }
        
            setQuestions(response.data.questions);
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
        } 
        else if (r && response.data.quiz_finished) {
          AnsAlert(1);
          clearTimeout(v);
          Router.push("/finale");
        } else {
          setAnswer("");
          AnsAlert(0);
        }
      });
  };


  
    return (
      <>
        { (loaded === true) ?
          <Layout>
            <div
              style={{ marginRight: "auto", marginLeft: "auto", textAlign: "center", minHeight: "100vh-100px" }}
              questions
            >
              <Question qs={questions} qsNo={qsNo} audio={audio} image={image} day={day} />
              <div>
                <Answer
                  change={change}
                  answer={answer}
                  submit={submit}
                />
                <Hint hint={hint}
                  submit={submit}
                />
                <style jsx>{`
            div {
              text-align: center;
              margin: 5px;
              margin-bottom:100px;
            }
          `}</style>
              </div>
              <div className='footerBuff'>

              </div>
            </div>
          </Layout>
          : <Loader />}
      </>
    )
          
          }