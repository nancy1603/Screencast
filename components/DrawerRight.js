import React from 'react'
import { Button } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import LeadTable from './LeadTable';
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from '@iconify/react';
 
import { AiOutlineCloseCircle } from "react-icons/ai";
// import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
const useStyles = makeStyles({
    paper: {
      background:'linear-gradient(112.76deg, rgba(255, 255, 255, 0.04) 7.77%, rgba(255, 255, 255, 0.01) 87.65%) !important',
      //background: 'red'
      //background:'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(10px)',

    }
   });
function DrawerRight() {
    const [state,setState]= React.useState(false)
    const toggleDrawer=(open) => (event) => {
        setState(open)
    }

    const styles = useStyles();
    return (
        <>
        <Button onClick={toggleDrawer(true)}>
        <Icon icon="iconoir:leaderboard-star" color="#9747ff" height="40" hFlip={true} />
        {/* //className="flicker"
        // style={{fontSize:"18px", fontWeight:"bold",padding:"0px",margin:"0px"}}> <a><img src="/leaderboard.png" style={{ width: "20px" }}/></a> */}
        </Button>
        <Drawer
        anchor={'right'}
        width={'100%'}
        open={state}
        classes={{ paper: styles.paper }}
        onClose={toggleDrawer(false)}>
            <div style={{ height:"1000vh"}}>
            <div className="flicker" onClick={toggleDrawer(false)} style={{color:"white", fontSize:"30px",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"30px"}}><AiOutlineCloseCircle/></div>
            <LeadTable/>
            </div> 
            
            </Drawer>
            {/* <div className="arrow" style={{color:"white"}}>Close</div> */}
            
        </>
    )
}

export default DrawerRight