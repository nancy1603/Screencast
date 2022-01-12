import React from "react";
import Leadertable from "../components/Leadertable";
import Link from 'next/link';
import DrawerRight from "../components/DrawerRight"
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FiArrowLeftCircle } from "react-icons/fi";


export default function leaderboard() {
  return (
    <Layout>
    <div className={styles.dashboard}> 
  <div className={styles.glasscontainer}>
        <div style={{paddingTop:"20px",paddingLeft:"30px"}}>
        <Link href='/'><a className="flicker" style={{textDecoration:'none',fontSize:"25px",paddingBottom:"0px",width:"50px"}}><FiArrowLeftCircle /></a></Link>
        </div>
      <div style={{ textAlign: "center" }}>
        <div className="head" style={{paddingTop:"0px"}}>
          <div
            className="container neon-box"
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontFamily: "'Russo One', sans-serif",
            }}
          >
            <span className="flicker">LEADERBOARD</span>
          </div>
        </div>
        <Leadertable />
      </div>
    
      </div>
      </div>
    </Layout>
  );
}
