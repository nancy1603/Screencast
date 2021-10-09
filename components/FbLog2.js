import React from "react";
import { SocialMediaIconsReact } from 'social-media-icons-react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Router from "next/router";
import axios from "axios";
import AnsAlert from "../components/AnsAlert"
//import data from '../env.json';

const LoginButton = ({ facebookResponse }) => (
  <FacebookLogin
    appId="365959954585586"
    autoload={true}
    fields="name,email,picture"
    callback={facebookResponse}
    isMobile={false}
    disableMobileRedirect={true}
    disableMobileRedirect
    redirectUri="https://screencast.trennds.com/"
    render={renderProps => (
      <button style={{ backgroundColor: "rgba(0,0,0,0)", border: "none" }} onClick={renderProps.onClick}>
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="inset" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,149,223,1)" iconSize="6" roundness="29%" size="54" />
      </button>)}
  >
  </FacebookLogin>
);

class FbLog2 extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      isSignedIn: false,
      access: "",
      result: false
    };
  }
  componentDidMount() {
    // if(localStorage.getItem("email"))
    // {
    //   this.setState({isSignedIn:true},()=>{
    //     if((localStorage.getItem('start') <= Date.now()))
    //       Router.push("/game");
    //     else 
    //       {
    //         AnsAlert(-1);
    //       }
    //   })
    // }    
    if (localStorage.getItem('day') == 3 && localStorage.getItem('end') < Date.now()) Router.push('/finale')
    else {
      if (localStorage.getItem("email")) {
        this.setState({ isUserLoggedIn: true }, () => {
        })
      }
    }
  }


  facebookResponse = (response) => {

    localStorage.setItem("email", response.email);
    localStorage.setItem("name", response.name);
    localStorage.setItem("image", response.picture.data.url);
    localStorage.setItem('token', response.accessToken)

    axios
      .post(data.api + "/api/facebooklogin", {
        accesstoken: response.accessToken,
        expiration_time: response.data_access_expiration_time,
        userID: response.userID
      })
      .then((res) => {
        localStorage.setItem('token', res.data.access_token)

        this.setState({ result: res.data.quiz_finished, user: response, isSignedIn: true, access: res.data.access_token }, () => {
          if ((localStorage.getItem('start') <= Date.now())) {
            if (!(res.data.quiz_finished) && localStorage.getItem('end') > Date.now()) Router.push('/dashboard')
            else if (res.data.quiz_finished && localStorage.getItem('end') > Date.now()) {
              Router.push('/finale')
            }
            else if ((res.data.error) === "No active quizes") {
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
    return (
      <div>
        { !this.state.isSignedIn && (
          <div
            style={{ margin: "0 auto", textAlign: "center", paddingTop: "0px" }}
          >
            <LoginButton facebookResponse={this.facebookResponse} ></LoginButton>

          </div>
        )}

      </div>
    );
  }
}

export default FbLog2;