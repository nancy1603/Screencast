import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { SocialMediaIconsReact } from 'social-media-icons-react';
import Router from "next/router";
import AnsAlert from "../components/AnsAlert"
import data from '../env.json';


const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
});

class GoogleLog extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      isUserLoggedIn: false,
      access: "",
      result: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem('day') == 3 && localStorage.getItem('end') < Date.now()) Router.push('/finale')
    else {
      if (localStorage.getItem("email")) {
        this.setState({ isUserLoggedIn: true }, () => {
        })
      }
    }
  }

  responseGoogle = (response) => {

    axios
      .post(process.env.api + "/api/googlelogin", {
        token: response.tokenObj.access_token
      })
      .then((res) => {
        localStorage.setItem('token', res.data.access_token)
        //localStorage.setItem('ref_token', res.data.refresh_token)
        localStorage.setItem("email", response.profileObj.email);
        localStorage.setItem("name", response.profileObj.name);
        localStorage.setItem("image", response.profileObj.imageUrl);

        this.setState({ result: res.data.quiz_finished, access: res.data.access_token, userDetails: response.profileObj, isUserLoggedIn: true }, () => {

          if ((localStorage.getItem('start') <= Date.now())) {
            if (!(res.data.quiz_finished) && localStorage.getItem('end') > Date.now()) Router.push('/game')
            else if (res.data.quiz_finished && localStorage.getItem('end') > Date.now()) {

              Router.push('/finale')
            }
            else if((res.data.error) === "No active quizes"){
              Router.push('/finale')
            }
            else { 
              Router.push('/error')
            }
          }
          else
            Router.reload();
        })
      })
      .catch((err) => {
        console.log(err)
      });
  };


  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          {!this.state.isUserLoggedIn && (
            <GoogleLogin
              clientId="868193229049-r3rkp0lue3f4hk4g0d0c4h418d63mbmb.apps.googleusercontent.com"
              render={(renderProps) => (
                <div className={classes.root}  >

                  <Button
                    style={{ backgroundColor: "rgba(0,0,0,0)", padding: "0" }}
                    variant="contained"
                    color="secondary"
                    className="button"
                    disableElevation={true}
                    onClick={renderProps.onClick}

                  >
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="4" borderStyle="inset" icon="googleplus" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(223,48,28,1)" iconSize="7" roundness="29%" size="53" />
                  </Button>
                </div>
              )}
              onSuccess={this.responseGoogle} //isSignedIn ??
              onFailure={this.responseGoogle} //handle later

              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
      </div>

    );
  }
}

export default withStyles(useStyles)(GoogleLog);
