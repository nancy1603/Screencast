import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    loader:{
        width:"100%",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        color:"#ff2483",
    }
  }));

  export default function Loader(props){
    const classes = useStyles();

    return(
        <div className={classes.loader}>
            <CircularProgress color="#4dcfe0" style={{width:"60px", height:"60px", color:"#4dcfe0"}}/>
        </div>
    )
  }