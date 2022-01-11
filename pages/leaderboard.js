import React from "react";
import Leadertable from "../components/Leadertable";
import Link from 'next/link';
import DrawerRight from "../components/DrawerRight"
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";

export default function leaderboard() {
  return (
    <Layout>
    <div className={styles.dashboard}> 
  <div className={styles.glasscontainer}>
        <div style={{paddingTop:"20px",paddingLeft:"20px"}}>
        <Link href='/'><a className={styles.btns} style={{border:"hidden"}}>Back</a></Link>
        </div>
      <div style={{ textAlign: "center" }}>
        <div className="head">
          <div
            className="container neon-box"
            style={{
              textAlign: "center",
              fontSize: "25px",
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
