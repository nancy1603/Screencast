webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ./public/bac.jpg */ "./public/bac.jpg");
var ___CSS_LOADER_URL_PURE_IMPORT_1___ = __webpack_require__(/*! ./public/mobile.jpg */ "./public/mobile.jpg");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Barlow&family=Cabin+Sketch&family=Montserrat:wght@500&family=Russo+One&family=Monoton&display=swap);"]);
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
var ___CSS_LOADER_URL_IMPORT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_1___);
// Module
exports.push([module.i, "body {\n    margin: 0px;\n    background-size: auto 100%;\n    background-attachment: fixed;\n    background-position: center center;\n    background-repeat: no-repeat;\n    min-height: 110vh;\n    display: flex;\n    flex-direction: column;\n    background-image: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\n    font-family: \"Barlow\", sans-serif;\n    /* color: \"#fff\"; */\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none;\n    /* Firefox */\n    /* overflow: hidden; */\n    z-index: 0;\n    background-color: rgba(10, 10, 10, 0);\n}\n\nbody::-webkit-scrollbar {\n    display: none;\n}\n\n@media only screen and (max-width: 600px) {\n    body {\n        background-image: url(" + ___CSS_LOADER_URL_IMPORT_1___ + ");\n    }\n}\n\n.footerBuff {\n    height: 120px;\n}\n\n@media only screen and (max-width: 600px) {\n    .footerBuff {\n        height: 0px;\n    }\n}\n\n.fbbutton {\n    margin: 0 auto;\n    position: relative;\n    text-decoration: none;\n    height: 35px;\n    width: 190px;\n    text-transform: uppercase;\n    color: #f0f0f0;\n    background-color: rgb(32, 32, 177);\n    border: none;\n    border-radius: 6px;\n    z-index: 1000;\n}\n\n.head {\n    margin: 0 auto;\n    padding: 10px;\n    padding-top: 40px;\n}\n\n.rtable {\n    display: absolute;\n    margin: 0 auto;\n    text-align: center;\n}\n\n.question {\n    position: relative;\n    z-index: 20;\n    background-color: rgba(3, 3, 65, 0.8);\n    color: white;\n    box-sizing: border-box;\n    box-shadow: 10px 10px 7px rgba(10, 10, 10, 0.9);\n    max-width: 1000px;\n    min-width: 100px;\n    margin: 40px auto;\n    padding: 20px;\n    border-bottom-left-radius: 20px;\n    border-top-right-radius: 20px;\n}\n\n@media only screen and (max-width: 700px) {\n    .question {\n        width: 85%;\n    }\n}\n\n.ans-div {\n    text-align: center;\n    margin: 0 auto;\n    padding: 5px;\n}\n\n\n/*changed*/\n\n.responsive-image {\n    position: relative;\n    max-width: 100%;\n}\n\n.responsive-image__image {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n#filled-basic {\n    background-color: rgba(246, 248, 255, 0.87);\n    border-radius: 3px;\n}\n\n#filled-basic:focus {\n    background-color: rgb(10, 0, 66);\n    border-radius: 3px;\n    color: #fff;\n}\n\n.btnSubmit {\n    margin: 5px;\n    padding: 5px;\n}\n\n.login-head {\n    display: relative;\n    color: rgb(253, 253, 253);\n    margin: 0 auto;\n    z-index: 20;\n}\n\n.login-head h1 {\n    /* font: 150% Consolas, Monaco, monospace; */\n    font-family: 'Russo One', sans-serif;\n    border-right: 0.1em solid;\n    width: 16.5em;\n    width: 15.5ch;\n    font-size: 30px;\n    color: #6ed1ff;\n    margin: 0 auto;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-animation: typing 2.5s steps(16, end), cursor-blink 0.3s step-end infinite alternate;\n            animation: typing 2.5s steps(16, end), cursor-blink 0.3s step-end infinite alternate;\n}\n\n@-webkit-keyframes typing {\n    from {\n        width: 0;\n    }\n}\n\n@keyframes typing {\n    from {\n        width: 0;\n    }\n}\n\n@-webkit-keyframes cursor-blink {\n    50% {\n        border-color: transparent;\n    }\n}\n\n@keyframes cursor-blink {\n    50% {\n        border-color: transparent;\n    }\n}\n\n@font-face {\n    font-family: Clip;\n    src: url(\"https://acupoftee.github.io/fonts/Clip.ttf\");\n}\n\n.sign {\n    position: relative;\n    display: block;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-image: radial-gradient( ellipse 30% 30% at 50% 50%, #6b1839, transparent);\n    transform: translate(-50%);\n    letter-spacing: 2;\n    left: 50%;\n    top: 10%;\n    font-family: \"Clip\";\n    text-transform: uppercase;\n    font-size: 37px;\n    color: #ffe6ff;\n    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd, -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd, 0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n    -webkit-animation: shine 2s forwards, flicker 3s infinite;\n            animation: shine 2s forwards, flicker 3s infinite;\n}\n\n@-webkit-keyframes blink {\n    0%,\n    22%,\n    36%,\n    75% {\n        color: #ffe6ff;\n        text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd, -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd, 0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n    }\n    28%,\n    33% {\n        color: #ff65bd;\n        text-shadow: none;\n    }\n    82%,\n    97% {\n        color: #ff2483;\n        text-shadow: none;\n    }\n}\n\n@keyframes blink {\n    0%,\n    22%,\n    36%,\n    75% {\n        color: #ffe6ff;\n        text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd, -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd, 0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n    }\n    28%,\n    33% {\n        color: #ff65bd;\n        text-shadow: none;\n    }\n    82%,\n    97% {\n        color: #ff2483;\n        text-shadow: none;\n    }\n}\n\n.flicker {\n    -webkit-animation: shine 2s forwards, blink 3s 2s infinite;\n            animation: shine 2s forwards, blink 3s 2s infinite;\n}\n\n.fast-flicker {\n    -webkit-animation: shine 2s forwards, blink 10s 1s infinite;\n            animation: shine 2s forwards, blink 10s 1s infinite;\n}\n\n@-webkit-keyframes shine {\n    0% {\n        color: #6b1839;\n        text-shadow: none;\n    }\n    100% {\n        color: #ffe6ff;\n        text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd, -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd, 0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n    }\n}\n\n@keyframes shine {\n    0% {\n        color: #6b1839;\n        text-shadow: none;\n    }\n    100% {\n        color: #ffe6ff;\n        text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd, -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd, 0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n    }\n}\n\n@-webkit-keyframes flicker {\n    from {\n        opacity: 1;\n    }\n    4% {\n        opacity: 0.9;\n    }\n    6% {\n        opacity: 0.85;\n    }\n    8% {\n        opacity: 0.95;\n    }\n    10% {\n        opacity: 0.9;\n    }\n    11% {\n        opacity: 0.922;\n    }\n    12% {\n        opacity: 0.9;\n    }\n    14% {\n        opacity: 0.95;\n    }\n    16% {\n        opacity: 0.98;\n    }\n    17% {\n        opacity: 0.9;\n    }\n    19% {\n        opacity: 0.93;\n    }\n    20% {\n        opacity: 0.99;\n    }\n    24% {\n        opacity: 1;\n    }\n    26% {\n        opacity: 0.94;\n    }\n    28% {\n        opacity: 0.98;\n    }\n    37% {\n        opacity: 0.93;\n    }\n    38% {\n        opacity: 0.5;\n    }\n    39% {\n        opacity: 0.96;\n    }\n    42% {\n        opacity: 1;\n    }\n    44% {\n        opacity: 0.97;\n    }\n    46% {\n        opacity: 0.94;\n    }\n    56% {\n        opacity: 0.9;\n    }\n    58% {\n        opacity: 0.9;\n    }\n    60% {\n        opacity: 0.99;\n    }\n    68% {\n        opacity: 1;\n    }\n    70% {\n        opacity: 0.9;\n    }\n    72% {\n        opacity: 0.95;\n    }\n    93% {\n        opacity: 0.93;\n    }\n    95% {\n        opacity: 0.95;\n    }\n    97% {\n        opacity: 0.93;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes flicker {\n    from {\n        opacity: 1;\n    }\n    4% {\n        opacity: 0.9;\n    }\n    6% {\n        opacity: 0.85;\n    }\n    8% {\n        opacity: 0.95;\n    }\n    10% {\n        opacity: 0.9;\n    }\n    11% {\n        opacity: 0.922;\n    }\n    12% {\n        opacity: 0.9;\n    }\n    14% {\n        opacity: 0.95;\n    }\n    16% {\n        opacity: 0.98;\n    }\n    17% {\n        opacity: 0.9;\n    }\n    19% {\n        opacity: 0.93;\n    }\n    20% {\n        opacity: 0.99;\n    }\n    24% {\n        opacity: 1;\n    }\n    26% {\n        opacity: 0.94;\n    }\n    28% {\n        opacity: 0.98;\n    }\n    37% {\n        opacity: 0.93;\n    }\n    38% {\n        opacity: 0.5;\n    }\n    39% {\n        opacity: 0.96;\n    }\n    42% {\n        opacity: 1;\n    }\n    44% {\n        opacity: 0.97;\n    }\n    46% {\n        opacity: 0.94;\n    }\n    56% {\n        opacity: 0.9;\n    }\n    58% {\n        opacity: 0.9;\n    }\n    60% {\n        opacity: 0.99;\n    }\n    68% {\n        opacity: 1;\n    }\n    70% {\n        opacity: 0.9;\n    }\n    72% {\n        opacity: 0.95;\n    }\n    93% {\n        opacity: 0.93;\n    }\n    95% {\n        opacity: 0.95;\n    }\n    97% {\n        opacity: 0.93;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.container {\n    display: block;\n    padding: 15px;\n    max-width: 350px;\n    border: 4px solid #d21f3c;\n    border-radius: 60px;\n    margin: 0 auto;\n    background-color: rgba(10, 10, 50, 0.5);\n}\n\n.neon-box {\n    box-shadow: 0 0 5px 0 #ff0800, inset 0 0 5px 0 #ff0800, 0 0 20px 0 #d21f3c, inset 0 0 5px 0 #d21f3c, 0 0 20px 2px #d21f3c, inset 0 0 20px 2px #d21f3c;\n    -webkit-animation: flashing 4s ease 0s infinite;\n            animation: flashing 4s ease 0s infinite;\n}\n\n.rowC {\n    display: flex;\n    flex-direction: row;\n}\n\n@-webkit-keyframes flashing {\n    0%,\n    60% {\n        box-shadow: 0 0 5px 0 #ff0800, inset 0 0 5px 0 #ff0800, 0 0 20px 0 #d21f3c, inset 0 0 5px 0 #d21f3c, 0 0 20px 2px #d21f3c, inset 0 0 20px 2px #d21f3c;\n    }\n    20%,\n    80% {\n        box-shadow: 0 0 5px 0 #d21f3c, inset 0 0 5px 0 #d21f3c, 0 0 20px 0 #d21f3c, inset 0 0 5px 0 rgba(10, 10, 50, 0.5), 0 0 20px 2px rgba(10, 10, 50, 0.5), inset 0 0 20px 2px rgba(10, 10, 50, 0.5);\n    }\n}\n\n@keyframes flashing {\n    0%,\n    60% {\n        box-shadow: 0 0 5px 0 #ff0800, inset 0 0 5px 0 #ff0800, 0 0 20px 0 #d21f3c, inset 0 0 5px 0 #d21f3c, 0 0 20px 2px #d21f3c, inset 0 0 20px 2px #d21f3c;\n    }\n    20%,\n    80% {\n        box-shadow: 0 0 5px 0 #d21f3c, inset 0 0 5px 0 #d21f3c, 0 0 20px 0 #d21f3c, inset 0 0 5px 0 rgba(10, 10, 50, 0.5), 0 0 20px 2px rgba(10, 10, 50, 0.5), inset 0 0 20px 2px rgba(10, 10, 50, 0.5);\n    }\n}", "",{"version":3,"sources":["/home/rishav4101/Screencast/style.css"],"names":[],"mappings":"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CA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,UAAU;IACd;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,UAAU;IACd;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,UAAU;IACd;AACJ;;AA9FA;IACI;QACI,UAAU;IACd;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;QACI,cAAc;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,UAAU;IACd;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,UAAU;IACd;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,UAAU;IACd;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,cAAc;IACd,uCAAuC;AAC3C;;AAEA;IACI,qJAAqJ;IACrJ,+CAAuC;YAAvC,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI;;QAEI,qJAAqJ;IACzJ;IACA;;QAEI,+LAA+L;IACnM;AACJ;;AATA;IACI;;QAEI,qJAAqJ;IACzJ;IACA;;QAEI,+LAA+L;IACnM;AACJ","file":"style.css","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Barlow&family=Cabin+Sketch&family=Montserrat:wght@500&family=Russo+One&family=Monoton&display=swap\");\nbody {\n    margin: 0px;\n    background-size: auto 100%;\n    background-attachment: fixed;\n    background-position: center center;\n    background-repeat: no-repeat;\n    min-height: 110vh;\n    display: flex;\n    flex-direction: column;\n    background-image: url(\"public/bac.jpg\");\n    font-family: \"Barlow\", sans-serif;\n    /* color: \"#fff\"; */\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none;\n    /* Firefox */\n    /* overflow: hidden; */\n    z-index: 0;\n    background-color: rgba(10, 10, 10, 0);\n}\n\nbody::-webkit-scrollbar {\n    display: none;\n}\n\n@media only screen and (max-width: 600px) {\n    body {\n        background-image: url(\"public/mobile.jpg\");\n    }\n}\n\n.footerBuff {\n    height: 120px;\n}\n\n@media only screen and (max-width: 600px) {\n    .footerBuff {\n        height: 0px;\n    }\n}\n\n.fbbutton {\n    margin: 0 auto;\n    position: relative;\n    text-decoration: none;\n    height: 35px;\n    width: 190px;\n    text-transform: uppercase;\n    color: #f0f0f0;\n    background-color: rgb(32, 32, 177);\n    border: none;\n    border-radius: 6px;\n    z-index: 1000;\n}\n\n.head {\n    margin: 0 auto;\n    padding: 10px;\n    padding-top: 40px;\n}\n\n.rtable {\n    display: absolute;\n    margin: 0 auto;\n    text-align: center;\n}\n\n.question {\n    position: relative;\n    z-index: 20;\n    background-color: rgba(3, 3, 65, 0.8);\n    color: white;\n    box-sizing: border-box;\n    box-shadow: 10px 10px 7px rgba(10, 10, 10, 0.9);\n    max-width: 1000px;\n    min-width: 100px;\n    margin: 40px auto;\n    padding: 20px;\n    border-bottom-left-radius: 20px;\n    border-top-right-radius: 20px;\n}\n\n@media only screen and (max-width: 700px) {\n    .question {\n        width: 85%;\n    }\n}\n\n.ans-div {\n    text-align: center;\n    margin: 0 auto;\n    padding: 5px;\n}\n\n\n/*changed*/\n\n.responsive-image {\n    position: relative;\n    max-width: 100%;\n}\n\n.responsive-image__image {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n#filled-basic {\n    background-color: rgba(246, 248, 255, 0.87);\n    border-radius: 3px;\n}\n\n#filled-basic:focus {\n    background-color: rgb(10, 0, 66);\n    border-radius: 3px;\n    color: #fff;\n}\n\n.btnSubmit {\n    margin: 5px;\n    padding: 5px;\n}\n\n.login-head {\n    display: relative;\n    color: rgb(253, 253, 253);\n    margin: 0 auto;\n    z-index: 20;\n}\n\n.login-head h1 {\n    /* font: 150% Consolas, Monaco, monospace; */\n    font-family: 'Russo One', sans-serif;\n    border-right: 0.1em solid;\n    width: 16.5em;\n    width: 15.5ch;\n    font-size: 30px;\n    color: #6ed1ff;\n    margin: 0 auto;\n    white-space: nowrap;\n    overflow: hidden;\n    animation: typing 2.5s steps(16, end), cursor-blink 0.3s step-end infinite alternate;\n}\n\n@keyframes typing {\n    from {\n        width: 0;\n    }\n}\n\n@keyframes cursor-blink {\n    50% {\n        border-color: transparent;\n    }\n}\n\n@font-face {\n    font-family: Clip;\n    src: url(\"https://acupoftee.github.io/fonts/Clip.ttf\");\n}\n\n.sign {\n    position: relative;\n    display: block;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-image: radial-gradient( ellipse 30% 30% at 50% 50%, #6b1839, transparent);\n    transform: translate(-50%);\n    letter-spacing: 2;\n    left: 50%;\n    top: 10%;\n    font-family: \"Clip\";\n    text-transform: uppercase;\n    font-size: 37px;\n    color: #ffe6ff;\n    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd, -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd, 0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n    animation: shine 2s forwards, flicker 3s infinite;\n}\n\n@keyframes blink {\n    0%,\n    22%,\n    36%,\n    75% {\n        color: #ffe6ff;\n        text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd, -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd, 0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n    }\n    28%,\n    33% {\n        color: #ff65bd;\n        text-shadow: none;\n    }\n    82%,\n    97% {\n        color: #ff2483;\n        text-shadow: none;\n    }\n}\n\n.flicker {\n    animation: shine 2s forwards, blink 3s 2s infinite;\n}\n\n.fast-flicker {\n    animation: shine 2s forwards, blink 10s 1s infinite;\n}\n\n@keyframes shine {\n    0% {\n        color: #6b1839;\n        text-shadow: none;\n    }\n    100% {\n        color: #ffe6ff;\n        text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd, -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd, 0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n    }\n}\n\n@keyframes flicker {\n    from {\n        opacity: 1;\n    }\n    4% {\n        opacity: 0.9;\n    }\n    6% {\n        opacity: 0.85;\n    }\n    8% {\n        opacity: 0.95;\n    }\n    10% {\n        opacity: 0.9;\n    }\n    11% {\n        opacity: 0.922;\n    }\n    12% {\n        opacity: 0.9;\n    }\n    14% {\n        opacity: 0.95;\n    }\n    16% {\n        opacity: 0.98;\n    }\n    17% {\n        opacity: 0.9;\n    }\n    19% {\n        opacity: 0.93;\n    }\n    20% {\n        opacity: 0.99;\n    }\n    24% {\n        opacity: 1;\n    }\n    26% {\n        opacity: 0.94;\n    }\n    28% {\n        opacity: 0.98;\n    }\n    37% {\n        opacity: 0.93;\n    }\n    38% {\n        opacity: 0.5;\n    }\n    39% {\n        opacity: 0.96;\n    }\n    42% {\n        opacity: 1;\n    }\n    44% {\n        opacity: 0.97;\n    }\n    46% {\n        opacity: 0.94;\n    }\n    56% {\n        opacity: 0.9;\n    }\n    58% {\n        opacity: 0.9;\n    }\n    60% {\n        opacity: 0.99;\n    }\n    68% {\n        opacity: 1;\n    }\n    70% {\n        opacity: 0.9;\n    }\n    72% {\n        opacity: 0.95;\n    }\n    93% {\n        opacity: 0.93;\n    }\n    95% {\n        opacity: 0.95;\n    }\n    97% {\n        opacity: 0.93;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.container {\n    display: block;\n    padding: 15px;\n    max-width: 350px;\n    border: 4px solid #d21f3c;\n    border-radius: 60px;\n    margin: 0 auto;\n    background-color: rgba(10, 10, 50, 0.5);\n}\n\n.neon-box {\n    box-shadow: 0 0 5px 0 #ff0800, inset 0 0 5px 0 #ff0800, 0 0 20px 0 #d21f3c, inset 0 0 5px 0 #d21f3c, 0 0 20px 2px #d21f3c, inset 0 0 20px 2px #d21f3c;\n    animation: flashing 4s ease 0s infinite;\n}\n\n.rowC {\n    display: flex;\n    flex-direction: row;\n}\n\n@keyframes flashing {\n    0%,\n    60% {\n        box-shadow: 0 0 5px 0 #ff0800, inset 0 0 5px 0 #ff0800, 0 0 20px 0 #d21f3c, inset 0 0 5px 0 #d21f3c, 0 0 20px 2px #d21f3c, inset 0 0 20px 2px #d21f3c;\n    }\n    20%,\n    80% {\n        box-shadow: 0 0 5px 0 #d21f3c, inset 0 0 5px 0 #d21f3c, 0 0 20px 0 #d21f3c, inset 0 0 5px 0 rgba(10, 10, 50, 0.5), 0 0 20px 2px rgba(10, 10, 50, 0.5), inset 0 0 20px 2px rgba(10, 10, 50, 0.5);\n    }\n}"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.1ac8fe87adf552a0d28a.hot-update.js.map