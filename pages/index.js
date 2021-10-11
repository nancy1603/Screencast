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

function index() {


  return (
   <div className={styles.dashboard}> 
  <div className={styles.glasscontainer}>
    <div className={styles.nave}>
      <div className={styles.logo}>SCREEN<span>CAST</span></div>
    </div>

    <div className={styles.main}>
    <div className={styles.innercontent}>
      <h1>GEEKTOBER QUIZ</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat esse, aperiam minus distinctio debitis repellendus pariatur provident tempora cum ex quam adipisci ipsum quo ipsa ratione nostrum. Aut, dolores qui.</p>
       
      <div className={styles.buttons}>
      <Rules />
      <Link href='/dashboard'>
      <a className={styles.btn}>Explore</a>
      </Link>
      </div>
      
    </div>
         <Login />
    </div>

  </div>
</div>
 

   
            
            
             
    
  );
}

export default index;