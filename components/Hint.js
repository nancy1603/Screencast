// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Popover from "@material-ui/core/Popover";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));

// export default function SimplePopover(props) {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <div>
//       <Button
//         className="btnSubmit"
//         variant="contained"
//         color="primary"
//         elevation={3}
//         onClick={props.submit}
//         style={{ backgroundColor: "rgb(32, 32, 177)", border: "0px solid white", height: "40px", width: "100px", borderTopRightRadius: "16px", borderBottomLeftRadius: "16px" }}
//       >
//         Submit
//           </Button>
//           &nbsp;&nbsp;&nbsp;&nbsp;
//       <Button
//         className="btnSubmit"
//         aria-describedby={id}
//         variant="contained"
//         color="secondary"
//         elevation={3}
//         onClick={handleClick}
//         style={{ backgroundColor: "#ff2483", border: "0px solid white", height: "40px", width: "100px", borderTopLeftRadius: "16px", borderBottomRightRadius: "16px" }}
//       >
//         Hint
//       </Button>

//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "center",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "center",
//         }}
//       >
//         <Typography className={classes.typography}>
//           {props.hint}
//         </Typography>
//       </Popover>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
       <div>
      {/* style={{display:"flex",  */}
    {/* justifyContent:"space-between"}} */}
      <Button
        className="btnSubmit"
        variant="contained"
        color="primary"
        elevation={3}
        onClick={props.submit}
        style={{ backgroundColor:"#b14de0",
        color:"black",
        // border: "0px solid white", 
        height: "40px", width: "100px", 
        // borderTopRightRadius: "16px", 
        // borderBottomLeftRadius: "16px" 
        // background: "linear-gradient(112.76deg, rgba(255, 255, 255, 0.02) 7.77%, rgba(255, 255, 255, 0.005) 87.65%)",
        //   backdropFilter: "blur(100px)",
          borderRadius: "45px",
      }}
      >
        Submit
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        className="btnSubmit"
        aria-describedby={id}
        variant="contained"
        color="secondary"
        elevation={3}
        onClick={handleClick}
        style={{ 
          backgroundColor: "#ff2483", 
          border: "2px solid #b14de0", 
          color:"#00bae",
          height: "40px", width: "100px", 
          // borderTopLeftRadius: "16px", 
          // borderBottomRightRadius: "16px" ,
          background: "linear-gradient(112.76deg, rgba(255, 255, 255, 0.02) 7.77%, rgba(255, 255, 255, 0.005) 87.65%)",
          backdropFilter: "blur(100px)",
          border: "2px solid #b14de0",
          /* Note: backdrop-filter has minimal browser support */
          
          borderRadius: "45px",}}
      >
        Hint
      </Button>
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          {props.hint}
        </Typography>
      </Popover>
    </div>
  );
}