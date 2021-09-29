import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import TextField from "@material-ui/core/TextField";

const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "10px",
    },
    anstype: {
      width: "600px"
    },
    ansdiv: {
      width: "600px"
    }
  },
  ans:{
    width:"85%",
    maxWidth: "400px",
    height: "50px",
    outline: "none",
    border: "none",
    // borderTopRightRadius: "30px",
    // borderBottomLeftRadius: "30px",
    borderRadius: "6px",
    backgroundColor: "rgba(3, 3, 65, 0.9)",
    boxShadow: "1px 1px 2px rgba(10, 10, 10, 0.9)",
    margin:"10px auto",
    textAlign: "center",
    fontSize:"17px",
    color:"white",
    '&::placeholder':{
      color:"#aaa"
    }
  }
});

function Answer(props) {
  
  
    const { classes } = props;
    return (
      <div>
        <form className={classes.ansdiv} noValidate autoComplete="off" onSubmit={props.submit}>
          {/* <TextField
            id="filled-basic"
            label="Type your answer here."
            variant="filled"
            onChange={this.props.change}
            
            value={this.props.answer}
            className={classes.anstype}
            style={{ maxWidth: "600px", width: "80%", }}
          /> */}
          <input className={classes.ans} placeholder="Answer" onChange={props.change}
            
            value={props.answer}/>
          <br />
          <br />

        </form>
      </div>
    );
  
}
export default withStyles(useStyles)(Answer);
