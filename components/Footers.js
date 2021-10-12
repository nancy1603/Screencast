import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Footers.module.css"
import {
    faGithub,
    faInstagram,
    faFacebook,
    faYoutube,
    faLinkedin,
    faDev
  } from '@fortawesome/free-brands-svg-icons';
  
  library.add(
    faGithub,
    faInstagram,
    faFacebook,
    faYoutube,
    faLinkedin,
    faDev
  );

function Footers() {
    return (
      <div className={styles.fonts}>
          <a href="https://github.com/lugnitdgp"><FontAwesomeIcon icon={faGithub} className={styles.icons}/></a>
          <a href="https://www.instagram.com/nitdgplug/"><FontAwesomeIcon icon={faInstagram} className={styles.icons}/></a>
          <a href="https://www.facebook.com/nitdgplug"><FontAwesomeIcon icon={faFacebook} className={styles.icons}/></a>
          <a href="https://www.youtube.com/channel/UCYZPnN5vP5B1sINLLkI1aDA"><FontAwesomeIcon icon={faYoutube} className={styles.icons}/></a>
          <a href="https://www.linkedin.com/company/lugnitdgp/mycompany/"><FontAwesomeIcon icon={faLinkedin} className={styles.icons}/></a>
          <a href="https://dev.to/nitdgplug"><FontAwesomeIcon icon={faDev} className={styles.icons}/></a>
      </div>
    );
}
export default Footers;