import React from "react";
import Router from "next/router";
import Button from "@material-ui/core/Button";
import Layout from "../components/Layout";

function finale() {

  const goback = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    Router.push('/');
  }

  return (
    <Layout>
      <div>
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontFamily: "'Russo One', sans-serif",
            margin: "30px auto",
            marginTop: "100px",
            width: "320px"
          }}
        >
          <span className="flicker">Thank You for Playing!</span>
          <br />
          <br />
          {/* <span className="flicker">You have completed all Questions</span>
          <br />
          <br /> */}
          <span className="flicker">Be back soon :)</span>
          <br />
          <br />
          <br />
        </div>
        <div style={{}}>
          <Button
            className="btnSubmit"
            variant="contained"
            color="primary"
            elevation={3}
            onClick={goback}
            style={{ backgroundColor: '#000044', border: "0px solid white", height: "40px", borderRadius: "7px", display: 'block', margin: '0 auto', }}
          >
            Logout
              </Button>
        </div>
      </div>
      <div className="footerBuff2">

      </div>

    </Layout>
  );
}

export default finale;