import React from 'react'
import { Button } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import LeadTable from './LeadTable';

function DrawerRight() {
    const [state,setState]= React.useState(false)
    const toggleDrawer=(open) => (event) => {
        setState(open)
    }
    return (
        <>
        <Button onClick={toggleDrawer(true)}
        className="flicker"
        style={{color:"#4dcfe0", fontSize:"18px", fontWeight:"bold"}}>LEADERBOARD</Button>
        <Drawer
        anchor={'right'}
        width={'100%'}
        open={state}
        onClose={toggleDrawer(false)}>
            <div 
            onClick={toggleDrawer(false)}
            style={{backgroundColor:"black", height:"1000vh",maxWidth:"45vh", width:"40vh"}}>
            <LeadTable/>
            </div> 
            </Drawer>
            
        </>
    )
}

export default DrawerRight