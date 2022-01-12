import React from "react";
import styles from "../styles/Footers.module.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDev } from "react-icons/fa";


function Footers() {
    return (
      <div className={styles.fonts}>
          <a href="https://github.com/lugnitdgp"><FaGithub className={styles.icons}/></a>
          <a href="https://www.instagram.com/nitdgplug/"><FaInstagram className={styles.icons}/></a>
          <a href="https://www.facebook.com/nitdgplug"><FaFacebook className={styles.icons}/></a>
          <a href="https://nitdgplug.org/">
                  <img
                    src="/glug.png"
                    style={{ width: "28px",height: "28px",marginRight: "7px",marginLeft:"7px" }}
                    
                  />
                  </a>
          <a href="https://www.youtube.com/channel/UCYZPnN5vP5B1sINLLkI1aDA"><FaYoutube className={styles.icons}/></a>
          <a href="https://www.linkedin.com/company/lugnitdgp/mycompany/"><FaLinkedin className={styles.icons}/></a>
          <a href="https://dev.to/nitdgplug"><FaDev className={styles.icons}/></a>
      </div>
    );
}
export default Footers;