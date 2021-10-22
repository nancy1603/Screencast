import React, { useEffect, useState } from "react";
//import axios from "axios";
//import GoogleLog from "../components/GoogleLog";
//import FbLog2 from "../components/FbLog2";
//import Timer2 from "../components/Timer2";
import Login from "../components/Login"

//import Router from "next/router";
// import data from '../env.json';
//import Layout from "../components/Layout";
//import Loader from "../components/Loader";
import styles from "../styles/index.module.css"
import Rules from "../components/Rules"
import Link from 'next/link'
import { Dashboard } from "@material-ui/icons";
import Footers from "../components/Footers"

function index() {
  
  
  

  return (
   <div className={styles.dashboard}> 
  <div className={styles.glasscontainer}>
    <div className={styles.nave}>
      <div className={styles.logo}>GEEK<span>TOBER</span></div>
    </div>

    <div className={styles.main}>
    <div className={styles.innercontent}>
      <h1>Ready to play? </h1>
      <p>We are all set to steer your quest for solving baffling enigmas concealed in questions. Dive deep into questions with your technical intellect and open source skills.</p>
       
      <div className={styles.buttons}>
      <Rules />
      <Link href='/dashboard'>
      <a className={styles.btns}>Explore</a>
      </Link>
      </div>
      
    </div>
         <Login/>
    </div>
        <Footers />
  </div>
  
</div>
 

   
            
            
             
    
  );
}

export default index;