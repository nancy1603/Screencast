const { Router } = require("next/router");

module.exports = {
    ApplicationLogout:function(){
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        Router.push("/");
    }
}