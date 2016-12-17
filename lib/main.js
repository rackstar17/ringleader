/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set ts=8 sts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// perform setup
const {Cu} = require("chrome");
const tabs = require("sdk/tabs");
const data = require("sdk/self").data;
const buttons = require('sdk/ui/button/action');
const {Utils} = require("./secutils");

Utils.setupPrefs();

var worker;

var isPrefsPageOpen = false;

/* Attaches the content script */
tabs.activeTab.on("open" , function() {
  tabs.activeTab.attach({
    contentScriptFile: "content_script.js"
  });
});

/* Added a UI popop to our addon */
var button = buttons.ActionButton({
  id: "pnh-link",
  label: "Plug N Hack",
  icon: {
    "16": "./pnh.png",
    "32": "./pnh.png",
    "48": "./pnh.png",
  },
  onClick: function(state) {
    tabs.on('open', function() {
      isPrefsPageOpen = true;
    });
    tabs.on('close', function() {
      isPrefsPageOpen = false;
    });
    tabs.on('pageshow', function(tab) {
      console.log(tab.url + " is loaded");



      var p1 = new Promise(function(resolve, reject) {
        require("./config").setup();
        // or
        // reject ("Error!");
      });

      p1.then(function(value) {
        console.log("success")
        console.log("Commands\n\n", require("./servicestub").commands);
      }, function(reason) {
        console.log("fail")
        console.log(reason); // Error!
      });

      const prefs_js_url = data.url('prefs.js');

      worker = tabs.activeTab.attach({
        contentScriptFile: prefs_js_url
      });

    /* Temporarily disabling gcli functionality due to non-working state. */
// // install the commands
  pnhCommands = require("./commands");
//installCommands();
     worker.port.emit("display",{pnhCommands});
     //exports.worker = worker;
     // worker.port.emit("doit", {});
     // worker.port.on("receive", function() {
     //  console.log("received");
     // });
     

    });


    const prefs_html_url = data.url("prefs.html");
    !isPrefsPageOpen ? tabs.open(prefs_html_url): (function() {
      for(let tab of tabs) {
        if (tab.url === prefs_html_url) {
          tab.activate();
          break;
        }
      }
    })();
  }
});


/* Temporarily disabling gcli functionality due to non-working state. */
// // install the commands
const {installCommands} = require("./commands");
// installCommands();
