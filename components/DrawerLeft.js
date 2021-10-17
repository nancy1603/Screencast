import React from 'react'
import { Button } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import Timeline from './Timeline';

function DrawerLeft(props) {
    const [state,setState]= React.useState(false)
    const toggleDrawer=(open) => (event) => {
        setState(open)
    }
    return (
        <>
        <Button onClick={toggleDrawer(true)}
        className="flicker"
        style={{color:"#4dcfe0", fontSize:"18px", fontWeight:"bold"}}>TIMELINE</Button>
        <Drawer
        anchor={'left'}
        width={'100%'}
        open={state}
        onClose={toggleDrawer(false)}>
            <div 
            onClick={toggleDrawer(false)}
            style={{backgroundColor:"black", height:"1000vh", width:"50vh"}}>
            <Timeline level={props.level} userlevel={props.userlevel} loaded={props.loaded}/>
            </div>
            </Drawer>
            
        </>
    )
}

export default DrawerLeft