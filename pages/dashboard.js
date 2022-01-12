import React , {useState,useEffect}from 'react'
import LeadTable from '../components/LeadTable';
import Main from '../components/Main';
import Login from '../components/Login';
import Timeline from '../components/Timeline';
import styles from '../styles/dashboard.module.css';
import axios from "axios";
import FinishedPlaying from '../components/FinishedPlaying';
import DrawerLeft from "../components/DrawerLeft";
import DrawerRight from "../components/DrawerRight";
import Footers from "../components/Footers"

var ApplicationUtil = require("../utils/logout");

function dashboard() {
    const [userlevel, setUserlevel]= useState("");
    const [level,setLevel]= useState("");
    const [loaded,setloaded]= useState(false);
    const [isLoggedin,setIsLoggedin]=useState(false);
    const [quizFinished, setQuizFinished]= useState(false);

    const checkLogin = ()=>{
      if(localStorage.getItem('token') === null ){
        setIsLoggedin(false)
        console.log("Unauthorised - at dashboard");
        
      }else{
          setIsLoggedin(true)
          console.log("2");
          console.log("dashboard");
        axios
        .get(process.env.api + "/api/status")
        .then((response)=>{
         setLevel(response.data.round_questions)
         let temp2 = new Date(response.data.end_time).getTime() + new Date(response.data.end_time).getTimezoneOffset() * 60000;
         if(temp2 < Date.now()){
          setQuizFinished(true);
         }
        })
        axios
        .get(process.env.api + "/api/timeline",{
         headers: {
           Authorization: "Bearer " + localStorage.getItem("token"),
         },
        })
        .then((response)=>{
          setUserlevel(response.data.current_question)
          if(response.data.quiz_finished){
            setQuizFinished(true);
          }
        })
        .catch(()=>{
          ApplicationUtil.ApplicationLogout();
        })
        .then(() => {
         setloaded(true);
       });
        }
      }

    
    
    const handleLevel = ()=>{
        axios
        .get(process.env.api + "/api/status")
        .then((response)=>{
         
         setLevel(response.data.round_questions)
         let temp2 = new Date(response.data.end_time).getTime() + new Date(response.data.end_time).getTimezoneOffset() * 60000;
        if(temp2<Date.now()){
          setQuizFinished(true);

        }
         
        })
        axios
        .get(process.env.api + "/api/timeline",{
         headers: {
           Authorization: "Bearer " + localStorage.getItem("token"),
         },
        })
        .then((response)=>{
          if(response.status === 401){
            ApplicationUtil.ApplicationLogout();
          }
          setUserlevel(response.data.current_question)
        })
        
    }
    useEffect(()=>{
      checkLogin();
      
     },[]);
   return (
        
        <div className={styles.Container}>
            <div className={styles.cont}>
            <div className={styles.TimelineContainer}>
             {isLoggedin?(<Timeline level={level} userlevel={userlevel} loaded={loaded}/>):(
             <>
              <div className="head">
          <div className="container neon-box" style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "'Russo One', sans-serif",
            // color:"white"
          }}>
            <span className="flicker">TIMELINE</span>
            </div>
        </div>
             <div className={styles.show}>
               <div className="flicker" style={{fontSize:"20px", alignItems:"center", display:"flex",justifyContent:"center",height:"40vh"}}>
             LOGIN FIRST!
             </div>
             </div>
             </>
             )}
             </div>
            <div className={styles.MainContainer}>
            <div className="arrow" style={{color:"black 0%",fontSize:"20px"}}>
                <DrawerLeft level={level} userlevel={userlevel} loaded={loaded} isLoggedin={isLoggedin} quizFinished={quizFinished}/>
                <DrawerRight/>
                </div>
              {isLoggedin && !quizFinished ? (<>
                <Main level={level} userlevel={userlevel} loaded={loaded} handleLevel={handleLevel} isLoggedin={isLoggedin}/></>):(
               !quizFinished ? (<>
                <div className="head">
                <div className="container neon-box"
              style={{
                textAlign: "center",
                fontSize: "32px",
                fontFamily: "'Russo One', sans-serif",
              }}>
              <span className="flicker">SCREENCAST</span>
            </div>
          </div>
               <div>
                <Login isLoggedin={isLoggedin}/> 
               </div>
               </>):(<></>)
              )}
              {
                quizFinished? (
                <FinishedPlaying/>):(<></>)
              }
              <div style={{marginTop:"50px"}}>
                <Footers/>
              </div>
              
              </div>
                
            <div className={styles.LeadtableContainer}><LeadTable/></div>
           
            </div>
            
            </div>
        
    )
}

export default dashboard