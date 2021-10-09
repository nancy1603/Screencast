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
        style={{color:"white", fontSize:"20px"}}>RIGHT</Button>
        <Drawer
        anchor={'right'}
        width={'100%'}
        open={state}
        onClose={toggleDrawer(false)}>
            <div 
            onClick={toggleDrawer(false)}
            style={{backgroundColor:"black", height:"1000vh"}}>
            <LeadTable/>
            </div>
            </Drawer>
            
        </>
    )
}

export default DrawerRight