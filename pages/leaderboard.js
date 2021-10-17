import React from "react";
import Leadertable from "../components/Leadertable";
import Layout from "../components/Layout";

export default function leaderboard() {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <div className="head">
          <div
            className="container neon-box"
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontFamily: "'Russo One', sans-serif",
            }}
          >
            <span className="flicker">LEADERBOARD</span>
          </div>
        </div>
        <Leadertable />
      </div>
    </Layout>
  );
}
