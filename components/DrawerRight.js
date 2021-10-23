import React from 'react'
import { Button } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import LeadTable from './LeadTable';
 
import { AiOutlineCloseCircle } from "react-icons/ai";
// import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';

function DrawerRight() {
    const [state,setState]= React.useState(false)
    const toggleDrawer=(open) => (event) => {
        setState(open)
    }
    return (
        <>
        <Button onClick={toggleDrawer(true)}
        //className="flicker"
        style={{fontSize:"18px", fontWeight:"bold"}}> <a><img src="/leaderboard.png" style={{ width: "20px" }}/></a></Button>
        <Drawer
        anchor={'right'}
        width={'100%'}
        open={state}
        onClose={toggleDrawer(false)}>
            <div style={{backgroundColor:"black", height:"1000vh"}}>
            <div className="flicker" onClick={toggleDrawer(false)} style={{color:"white", fontSize:"30px",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"30px"}}><AiOutlineCloseCircle/></div>
            <LeadTable/>
            </div> 
            
            </Drawer>
            {/* <div className="arrow" style={{color:"white"}}>Close</div> */}
            
        </>
    )
}

export default DrawerRight