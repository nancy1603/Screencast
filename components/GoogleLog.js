import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { SocialMediaIconsReact } from 'social-media-icons-react';
import Router from "next/router";
import Link from "next/link";

const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
});

function GoogleLog(props) {

  const [userDetails, setUserDetails] = useState({}),
    [isUserLoggedIn, setIsUserLoggedIn] = useState(false),
    [access, setAccess] = useState(""),
    [result, setResult] = useState(false)

  useEffect(() => {
      if (localStorage.getItem("token")) {
        setIsUserLoggedIn(true);
      }

  }, []);

  const responseGoogle = (response) => {
    console.log(response);
    axios
      .post(process.env.api + "/api/googlelogin", {
        token: response.tokenObj.id_token
      })
      .then((res) => {
        localStorage.setItem('token', res.data.access_token)
        //localStorage.setItem('ref_token', res.data.refresh_token)
        localStorage.setItem("email", response.profileObj.email);
        localStorage.setItem("name", response.profileObj.name);
        localStorage.setItem("image", response.profileObj.imageUrl);

        setResult(res.data.quiz_finished)
        setAccess(res.data.access_token)
        setUserDetails(response.profileObj)
        setIsUserLoggedIn(true)




        if (res.status !== 200) {
          Router.push('/error')
        }
        else {
          Router.push('/dashboard')
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }



  const { classes } = props;
  return (
    <div>
      <div>
        { !isUserLoggedIn ? (
          <GoogleLogin
            clientId="868193229049-r3rkp0lue3f4hk4g0d0c4h418d63mbmb.apps.googleusercontent.com"
            render={(renderProps) => (
              <div className={classes.root}  >

                <Button 
                  style={{ backgroundColor: "rgba(0,0,0,0)", padding: "0" }}
                  variant="contained"
                  color="secondary"
                  disableElevation={true}
                  onClick={renderProps.onClick}
                  className="btnSubmit"
                  style={{ 
                       color: "white", 
                       border: "2px solid #b14de0", 
                       backgroundColor: "#330965",
                       height: "40px", width: "120px", 
                       fontWeight:"bolder",
                       borderRadius: "20px",
                       letterSpacing: "2px",  
                       textAlign:"center",
                       boxShadow:"0 0px 10px 0 #b14de0 inset,0 2px 10px 0 #b14de0,0 1px 10px 0 #b14de0 inset,0 5px 20px 0 #b14de0",
                       alignItems:"center",alignContent:"center",
                       fontSize:"15px",
                      
                       }}
                >LOGIN
                  {/*<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="4" borderStyle="inset" icon="googleplus" iconColor="rgba(0,0,0,1)" backgroundColor="rgb(135, 194, 250)" iconSize="7" roundness="50%" size="53" />*/}
                </Button>
              </div>
            )}
            onSuccess={responseGoogle} //isSignedIn ??
            onFailure={responseGoogle} //handle later

            cookiePolicy={"single_host_origin"}
          />
        ):
        (<div> 
          <Link href="/dashboard">
          <Button style= {{color: "white", 
                       border: "2px solid #b14de0", 
                       backgroundColor: "#330965",
                       height: "40px", width: "120px", 
                       fontWeight:"bolder",
                       borderRadius: "20px",
                       letterSpacing: "2px",  
                       textAlign:"center",
                       boxShadow:"0 0px 10px 0 #b14de0 inset,0 2px 10px 0 #b14de0,0 1px 10px 0 #b14de0 inset,0 5px 20px 0 #b14de0",
                       alignItems:"center",alignContent:"center",
                       fontSize:"15px",}}>PLAY</Button>
          </Link>
          </div>)
      }
      </div>
    </div>

  );

}

export default withStyles(useStyles)(GoogleLog);