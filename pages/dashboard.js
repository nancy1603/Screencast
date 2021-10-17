import React , {useState,useEffect}from 'react'
import LeadTable from '../components/LeadTable';
import Main from '../components/Main';
import Timeline from '../components/Timeline';
import styles from '../styles/dashboard.module.css';
import Router from "next/router";
import axios from "axios";



function dashboard() {
    const [userlevel, setUserlevel]= useState("");
    const [level,setLevel]= useState("");
    const [loaded,setloaded]= useState(false);
    const handleLevel = ()=>{
        axios
        .get(process.env.api + "/api/status")
        .then((response)=>{
         
         setLevel(response.data.round_questions)
     
         
        })
        axios
        .get(process.env.api + "/api/timeline",{
         headers: {
           Authorization: "Bearer " + localStorage.getItem("token"),
         },
        })
        .then((response)=>{
          setUserlevel(response.data.current_question)
        })
        
    }
    useEffect(()=>{
        axios
        .get(process.env.api + "/api/status")
        .then((response)=>{
         // localStorage.setItem("level", response.data.round_questions);
         // setLevel(localStorage.getItem('level'))
         setLevel(response.data.round_questions)
     
         // var tnp=[];
         // for(var i=1; i<=parseInt(level); i++){
         //   console.log("loop");
         //   tnp.push(
         //     <div className={styles.levelContainer} key={i}>
         //                     <div className={styles.level} key={i}>
         //                         LEVEL {i}
         //                         </div> </div>);
     
         
         // }
         // setTimeline(tnp => [...tnp,`${tnp.length}`]);
        })
        axios
        .get(process.env.api + "/api/timeline",{
         headers: {
           Authorization: "Bearer " + localStorage.getItem("token"),
         },
        })
        .then((response)=>{
          setUserlevel(response.data.current_question)
        })
        .then(() => {
         setloaded(true);
       });
       },[]);
   return (
        
        <div className={styles.Container}>
            <div className={styles.cont}>
            <div className={styles.TimelineContainer}><Timeline level={level} userlevel={userlevel} loaded={loaded}/></div>
            <div className={styles.MainContainer}><Main level={level} userlevel={userlevel} loaded={loaded} handleLevel={handleLevel}/></div>
            <div className={styles.LeadtableContainer}><LeadTable/></div>
            </div>
            </div>
        
    )
}

export default dashboard
