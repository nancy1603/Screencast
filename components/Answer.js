// import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
// //import TextField from "@material-ui/core/TextField";

// const useStyles = (theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(0),
//       width: "10px",
//     },
//     anstype: {
//       width: "600px"
//     },
//     ansdiv: {
//       width: "600px"
//     }
//   },
//   ans:{
//     width:"85%",
//     maxWidth: "400px",
//     height: "50px",
//     outline: "none",
//     border: "none",
//     // borderTopRightRadius: "30px",
//     // borderBottomLeftRadius: "30px",
//     borderRadius: "6px",
//     backgroundColor: "rgba(3, 3, 65, 0.9)",
//     boxShadow: "1px 1px 2px rgba(10, 10, 10, 0.9)",
//     margin:"10px auto",
//     textAlign: "center",
//     fontSize:"17px",
//     color:"white",
//     '&::placeholder':{
//       color:"#aaa"
//     }
//   }
// });

// function Answer(props) {
  
  
//     const { classes } = props;
//     return (
//       <div>
//         <form className={classes.ansdiv} noValidate autoComplete="off" onSubmit={props.submit}>
//           {/* <TextField
//             id="filled-basic"
//             label="Type your answer here."
//             variant="filled"
//             onChange={this.props.change}
            
//             value={this.props.answer}
//             className={classes.anstype}
//             style={{ maxWidth: "600px", width: "80%", }}
//           /> */}
//           <input className={classes.ans} placeholder="Answer" onChange={props.change}
            
//             value={props.answer}/>
//           <br />
//           <br />

//         </form>
//       </div>
//     );
  
// }
// export default withStyles(useStyles)(Answer);

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
    background: "linear-gradient(112.76deg, rgba(255, 255, 255, 0.04) 7.77%, rgba(255, 255, 255, 0.01) 87.65%)",
    backdropFilter: "blur(100px)",
    border: "2px solid #b14de0",
    // borderImageSource: "linear-gradient(279.48deg, rgba(97, 236, 153, 0.83) 13.18%, #121B17 33.21%, #064438 61.54%, rgba(4, 132, 109, 0.72) 85.72%)",
    borderRadius: "15px",
    // boxShadow: "1px 1px 2px rgba(1, 247, 247, 0.72)",
    margin:"10px auto",
    textAlign: "center",
    fontSize:"17px",
    color:"white",
    // background: "linear-gradient(109.43deg, rgba(97, 236, 236, 0.83) 2.44%, #121B17 29.18%, #064244 67.03%, rgba(1, 247, 247, 0.72) 99.32%)",
    content:"",
    // position:"absolute",
    // top:0,
    // left:0,
    // right:0,
    // bottom:0,
    borderRadius:"20px", 
    padding:"5px", 
    // webkitMask:"linear-gradient (45deg, #064244) content-box, linear-gradient(45deg,#064244)",
    // webkitMaskComposite: "destination-out", 
    // maskComposite: "exclude", 

    
    '&::placeholder':{
      color:"#aaa"
    }
  }
  
});

class Answer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        
        <form className={classes.ansdiv} noValidate autoComplete="off" onSubmit={this.props.submit}>
          {/* <TextField
            id="filled-basic"
            label="Type your answer here."
            variant="filled"
            onChange={this.props.change}
            
            value={this.props.answer}
            className={classes.anstype}
            style={{ maxWidth: "600px", width: "80%", }}
          /> */}
          <input className={classes.ans} placeholder="Answer" onChange={this.props.change}
            
            value={this.props.answer}/>
          <br />
          <br />

        </form>
      </div>
      
    );
  }
}
export default withStyles(useStyles)(Answer);