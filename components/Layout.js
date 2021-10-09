import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
    return (
        <div>
            <React.Fragment>
                {/* <Navbar /> */}
                {props.children}
                {/* <Footer /> */}
            </React.Fragment>
        </div>
    )
}