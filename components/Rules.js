import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/index.module.css"
const useStyles = makeStyles({
  paper: {
    backgroundColor:'#330965',
    /*background:'linear-gradient(112.76deg, rgba(255, 255, 255, 0.06) 7.77%, rgba(255, 255, 255, 0.1) 87.65%) !important',*/
    /*backdropFilter: 'blur(4px)',*/
    opacity:'10px',
  }
 });
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Rules() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const styles = useStyles();
  return (
    <div>
      <Button
        className="btnSubmit"
        // aria-describedby={id}
        variant="contained"
        color="secondary"
        elevation={3}
        onClick={handleClickOpen}
        style={{ 
          backgroundColor: "#ff2483", 
          border: "2px solid #b14de0", 
          color:"#b14de0",
          height: "40px", width: "100px", 
          marginRight: "30px",
          fontWeight:"900",
          // borderTopLeftRadius: "16px", 
          // borderBottomRightRadius: "16px" ,
          background: "linear-gradient(112.76deg, rgba(255, 255, 255, 0.02) 7.77%, rgba(255, 255, 255, 0.005) 87.65%)",
          backdropFilter: "blur(100px)",
          border: "2px solid #b14de0",
          /* Note: backdrop-filter has minimal browser support */
          
          borderRadius: "45px",}}
      >
        Rules
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        classes={{ paper: styles.paper }}
        
        
      >
        <DialogTitle id="alert-dialog-slide-title"
        style={{color:'Magenta'}}>{"RULES"}</DialogTitle>
        <DialogContent
        //style={{background:'linear-gradient(112.76deg, rgba(255, 255, 255, 0.04) 7.77%, rgba(255, 255, 255, 0.01) 87.65%) !important'}}
        classes={{ paper: styles.paper }}
        > 
          <DialogContentText id="alert-dialog-slide-description">
            <Typography
            style={{color:'white'}}>
              <ol className="p-3">
                <li>The quiz comprises of 15 questions from 3 difficulty standards.</li>
                <li>Each question denotes a level.</li>
                <li>You can go to the next question only after correctly attempting the current question.</li>
                <li>
                A level can be played only between its start and end timings.
                </li>
                <li>
                Answers are not case sensitive.
                </li>
              </ol>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" style={{color:'Magenta',fontWeight:'900'}}>
            Got it !
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
