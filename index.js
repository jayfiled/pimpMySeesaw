// ==UserScript==
// @name         Seesaw Video player resize tool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Waits for a video to be clicked on and changes the size of the playback controls to be touch friendly.
// @author       You
// @match        https://app.seesaw.me/#/activities/class/class.034c70fb-4e7e-49e8-b3a7-6f8c9490dbf0/display/pending
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  var vidExists = false;
  var counter = 0;

  const checkIfVidExists = () => {
    const vidElement = document.querySelector(".video-js");

    vidElement === true ? (vidExists = true) : (vidExists = vidElement);

    if (vidExists) {
      vidElement.style.fontSize = "20px";
    }
    counter += 1;
    console.log("%c Video player resize tool: ", "color: #bada55");
    console.log(` Checked for a video on the page 👉 ${counter} time(s)`);

    setTimeout(checkIfVidExists, 1000);
  };

  checkIfVidExists();
})();
