import React from 'react'
import { Button } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import Timeline from './Timeline';

function DrawerLeft() {
    const [state,setState]= React.useState(false)
    const toggleDrawer=(open) => (event) => {
        setState(open)
    }
    return (
        <>
        <Button onClick={toggleDrawer(true)}
        style={{color:"white", fontSize:"20px"}}>Left</Button>
        <Drawer
        anchor={'left'}
        width={'100%'}
        open={state}
        onClose={toggleDrawer(false)}>
            <div 
            onClick={toggleDrawer(false)}
            style={{backgroundColor:"black", height:"1000vh", minWidth:"100vh-100px"}}>
            <Timeline/>
            </div>
            </Drawer>
            
        </>
    )
}

export default DrawerLeft