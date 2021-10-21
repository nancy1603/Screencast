import React from "react";

function Footer() {
  return (
    <div>
       

      <div
        className="footer"
          style={{
            /*margin:"auto",//changed*/
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0)",
            color: "#eee",
            /*height: "80px",*/
            bottom: "0",
            right: "0", left: "0",
            position: "relative",//changed
            padding: "0",
            /*marginTop: "100px",*/
            width:"100%"

          }}
        >
                <div style={{

                  // bottom: "30px", position: "absolute", left: "0", right: "0", textAlign: "center", margin: "0 auto"

                }}>
                  <a href="https://nitdgplug.org/">
                  <img
                    src="/glug.png"
                    alt="logo"
                    style={{ width: "50px" }}
                  />
                  </a>
                  
                  {/* &nbsp;&nbsp;
                  <a href="#">
                  <img
                    src="/scl.png"
                    alt="logo"
                    style={{ width: "50px", borderRadius: "50px" }}
                  />
                  </a> */}
                  
                </div>
                
        </div>

    </div>
    
  );
}

export default Footer;
