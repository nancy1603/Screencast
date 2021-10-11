import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/index.module.css"

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

  return (
    <div>
      <div className={styles.btn} onClick={handleClickOpen}>
        Rules
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        
      >
        <DialogTitle id="alert-dialog-slide-title">{"Rules"}</DialogTitle>
        <DialogContent> 
          <DialogContentText id="alert-dialog-slide-description">
            <Typography>
              <ol className="p-3">
                <li>The quiz comprises of 3 levels with 10 questions each.</li>
                <li>Each question in the 1st, 2nd and 3rd rounds carry scores 10,15 and 20 respectively.</li>
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
          <Button onClick={handleClose} color="primary">
            Got it !
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
