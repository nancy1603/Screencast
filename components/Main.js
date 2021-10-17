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
import { GoogleLogout } from "react-google-login";
// import Router from "next/router";
import Link from "next/link";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography } from "@material-ui/core";
import Rules from "./Rules";

export default function game(props) {
  
    
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
      const [isSignedIn, setIsSigned] = useState(false);
      

  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  // const [Log, setLog] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("email")) {
  //     setIsSigned(true);
  //     setName(localStorage.getItem("name"));
  //     setImage(localStorage.getItem("image"));
  //     setLog(localStorage.getItem("email"));
  //   }
  // });
  // const logout = () => {
  //   //FB.logout();
  //   //clearTimeout(localStorage.getItem("interval_id"));
    
  //   console.log("Lady")
  //   if(localStorage.getItem('start')<Date.now())
  //   {

  //     localStorage.removeItem('email');
      
  //     Router.push('/')
  //   }
  //   else
  //   {

  //     localStorage.removeItem('email');
      
  //     Router.reload('/')
  //   }
  // };
    

    // this.submit = this.submit.bind(this);
    // this.submit2 = this.submit2.bind(this);
    // this.change = this.change.bind(this);
    // this.checkAns = this.checkAns.bind(this);
    // this.getQuestions = this.getQuestions.bind(this);


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

        // setV(setTimeout(function () {
        //     AnsAlert(9);
        //     if (localStorage.getItem('day') === 3) {

        //       Router.push('/finale')
        //     }
        //     else if(response.data.error){
        //       Router.push('/error')
        //     }
        //     else {
        //       Router.push('/finale');
        //     }
        //   }, temp)
        // )

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
        Router.push('/error')
      })
    
  }

  const submit = (event) => {
    //send final answer for checking
    event.preventDefault()
    checkAns(answer);
    setAnswer("")
  };
  // submit2 = () => {
  //   //send final answer for checking
  //   console.log(this.state.answer);
  //   this.checkAns(this.state.answer);
  // };

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
              <Question qs={questions} qsNo={qsNo} audio={audio} image={image} day={day} level={props.level} userlevel={props.userlevel} loaded={props.loaded}handleLevel={props.handleLevel}/>
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
                
                <style jsx>{`
            div {
              text-align: center;
              margin: 5px;
              margin-bottom:100px;
            }
          `}</style>
          <div className="Ruleb">
          <Rules>Rules</Rules>
          </div>
          </div>
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
          : <Loader />}
      </>
    )
          
          }