import React , {useEffect}from 'react'
import LeadTable from '../components/LeadTable';
import Main from '../components/Main';
import Timeline from '../components/Timeline';
import styles from '../styles/dashboard.module.css';
import Router from "next/router";
import axios from "axios";



function dashboard() {
   return (
        
        <div className={styles.Container}>
            <div className={styles.cont}>
            <div className={styles.TimelineContainer}><Timeline/></div>
            <div className={styles.MainContainer}><Main/></div>
            <div className={styles.LeadtableContainer}><LeadTable/></div>
            </div>
            </div>
        
    )
}

export default dashboard
