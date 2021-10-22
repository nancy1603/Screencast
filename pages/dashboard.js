// import React , {useState,useEffect}from 'react'
// import LeadTable from '../components/LeadTable';
// import Main from '../components/Main';
// import Login from '../components/Login';
// import Timeline from '../components/Timeline';
// import styles from '../styles/dashboard.module.css';
// import Router from "next/router";
// import axios from "axios";



// function dashboard() {
//     const [userlevel, setUserlevel]= useState("");
//     const [level,setLevel]= useState("");
//     const [loaded,setloaded]= useState(false);
//     const [isLoggedin,setIsLoggedin]=useState(false);

//     const checkLogin = ()=>{
//       if(localStorage.getItem('token') === null ){
//         setIsLoggedin(false)
//         console.log("1");
        
//       }else{
//           setIsLoggedin(true)
//           console.log("2");
//           console.log("dashboard");
//         axios
//         .get(process.env.api + "/api/status")
//         .then((response)=>{
//          setLevel(response.data.round_questions)
//         })
//         axios
//         .get(process.env.api + "/api/timeline",{
//          headers: {
//            Authorization: "Bearer " + localStorage.getItem("token"),
//          },
//         })
//         .then((response)=>{
//           setUserlevel(response.data.current_question)
//         })
//         .then(() => {
//          setloaded(true);
//        });
//         }
//       }

    
    
//     const handleLevel = ()=>{
//         axios
//         .get(process.env.api + "/api/status")
//         .then((response)=>{
         
//          setLevel(response.data.round_questions)
     
         
//         })
//         axios
//         .get(process.env.api + "/api/timeline",{
//          headers: {
//            Authorization: "Bearer " + localStorage.getItem("token"),
//          },
//         })
//         .then((response)=>{
//           setUserlevel(response.data.current_question)
//         })
        
//     }
//     useEffect(()=>{

//       checkLogin();

      
//       // console.log("dashboard");
//       //   axios
//       //   .get(process.env.api + "/api/status")
//       //   .then((response)=>{
//       //    setLevel(response.data.round_questions)
//       //   })
//       //   axios
//       //   .get(process.env.api + "/api/timeline",{
//       //    headers: {
//       //      Authorization: "Bearer " + localStorage.getItem("token"),
//       //    },
//       //   })
//       //   .then((response)=>{
//       //     setUserlevel(response.data.current_question)
//       //   })
//       //   .then(() => {
//       //    setloaded(true);
//       //  });
       
//        },[]);
//    return (
        
//         <div className={styles.Container}>
//             <div className={styles.cont}>
//             <div className={styles.TimelineContainer}>
//              {isLoggedin? (<Timeline level={level} userlevel={userlevel} loaded={loaded}/>):(<>
//               <div className="head">
//           <div className="container neon-box" style={{
//             textAlign: "center",
//             fontSize: "25px",
//             fontFamily: "'Russo One', sans-serif",
//             // color:"white"
//           }}>
//             <span className="flicker">TIMELINE</span>
//             </div>
//         </div>
//              <div className={styles.show}>
//                <div className="flicker" style={{fontSize:"30px", alignItems:"center", display:"inline-flex", position:"absolute",height:"40vh"}}>
//              PLEASE LOGIN FIRST!
//              </div>
//              </div></>)}
//              </div>
//             <div className={styles.MainContainer}>
//               {isLoggedin? (<Main level={level} userlevel={userlevel} loaded={loaded} handleLevel={handleLevel} isLoggedin={isLoggedin}/>):(
//                <>
//                <div className="head">
//                <div className="container neon-box"
//              style={{
//                textAlign: "center",
//                fontSize: "29px",
//                fontFamily: "'Russo One', sans-serif",
//              }}>
//              <span className="flicker">SCREENCAST</span>
//            </div>
//          </div>
//               <div className={styles.logC}>
//                <Login isLoggedin={isLoggedin}/>
//               </div>
//               </>
//               )}
//                 </div>
//             <div className={styles.LeadtableContainer}><LeadTable/></div>
//             </div>
//             </div>
        
//     )
// }

// export default dashboard
import React , {useState,useEffect}from 'react'
import LeadTable from '../components/LeadTable';
import Main from '../components/Main';
import Login from '../components/Login';
import Timeline from '../components/Timeline';
import styles from '../styles/dashboard.module.css';
import Router from "next/router";
import axios from "axios";
import FinishedPlaying from '../components/FinishedPlaying';
import Footers from '../components/Footers';
import DrawerLeft from "../components/DrawerLeft";
import DrawerRight from "../components/DrawerRight";



function dashboard() {
    const [userlevel, setUserlevel]= useState("");
    const [level,setLevel]= useState("");
    const [loaded,setloaded]= useState(false);
    const [isLoggedin,setIsLoggedin]=useState(false);
    const [quizFinished, setQuizFinished]= useState(false);

    const checkLogin = ()=>{
      if(localStorage.getItem('token') === null ){
        setIsLoggedin(false)
        console.log("1");
        
      }else{
          setIsLoggedin(true)
          console.log("2");
          console.log("dashboard");
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
          if(response.data.quiz_finished){
            setQuizFinished(true);
          }
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

      checkLogin();

      
      // console.log("dashboard");
      //   axios
      //   .get(process.env.api + "/api/status")
      //   .then((response)=>{
      //    setLevel(response.data.round_questions)
      //   })
      //   axios
      //   .get(process.env.api + "/api/timeline",{
      //    headers: {
      //      Authorization: "Bearer " + localStorage.getItem("token"),
      //    },
      //   })
      //   .then((response)=>{
      //     setUserlevel(response.data.current_question)
      //   })
      //   .then(() => {
      //    setloaded(true);
      //  });
       
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
            fontSize: "25px",
            fontFamily: "'Russo One', sans-serif",
            // color:"white"
          }}>
            <span className="flicker">TIMELINE</span>
            </div>
        </div>
             <div className={styles.show}>
               <div className="flicker" style={{fontSize:"30px", alignItems:"center", display:"flex",justifyContent:"center",height:"40vh"}}>
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
                fontSize: "25px",
                fontFamily: "'Russo One', sans-serif",
              }}>
              <span className="flicker">SCREENCAST</span>
            </div>
          </div>
               <div className={styles.logC}>
                <Login isLoggedin={isLoggedin}/> 
               </div>
               </>):(<></>)
              )}
              {
                quizFinished? (
                <FinishedPlaying/>):(<></>)
              }
              {/* <Footers/> */}
              </div>
                
            <div className={styles.LeadtableContainer}><LeadTable/></div>
            </div>
            </div>
        
    )
}

export default dashboard