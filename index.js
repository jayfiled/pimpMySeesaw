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
  
  ///----- Dismiss activities section -----///
  
  // Check local storage to see if any of the titles from the activities are in there, if they are, fly them away.
  
    const addDismissButton = () => {
      const el = document.getElementsByClassName("ss-prompt-view__container");
      for (let i = 0; i < el.length - 1; i++) {
        const button = document.createElement("div");
  
        button.innerHTML = "✔";
        button.style.backgroundColor = "rgba(130, 255, 96, .8)";
        button.style.color = "#252A2A";
        button.style.position = "absolute";
        button.style.top = "16px";
        button.style.right = "20px";
        button.style.height = "39px";
        button.style.width = "80px";
        button.style.borderRadius = "500px";
        button.style.boxShadow = "2px 2px 3px grey";
        button.style.fontSize = "24px";
        button.style.fontWeight = "800";
        button.style.textAlign = "center";
        button.addEventListener("click", (e) => flyAway(e));
        el[i].appendChild(button);
      }
      // Check every 3 seconds for new activities loaded from infinite load
        setTimeout(addDismissButton, 3000);
    };
  
    // ? after dismissing 5 or 6, the layout looks weird - try making them fly further away
    const flyAway = (e) => {
  // Get the title of the e.currentTarget and save to local storage as a key value
      e.currentTarget.parentElement.style.position = "absolute";
      e.currentTarget.parentElement.style.left = "-1000px";
    };
  
    addDismissButton();
    checkIfVidExists();
  })();