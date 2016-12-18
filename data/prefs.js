/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set ts=8 sts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

document.addEventListener('ready', function() {
    console.log('JS LOADED');
});

window.addEventListener('message', function(event) {
    console.log(event.data);
    self.port.emit('execute', event.data);
}, false);

self.port.on('display', function(commands) {
    var actualCode = '(' + function(commands) {
      // console.log('pref.js:', commands);
        require([ 'gcli/index', 'demo/index' ], function(gcli) {
            for(idx in commands.commands.commands) {
              if (commands.commands.commands[idx].hasOwnProperty('exec')) {
                eval("commands.commands.commands[idx].exec = " + commands.commands.commands[idx].exec);                
                console.log(commands.commands.commands[idx]);
              }
              gcli.addCommand(commands.commands.commands[idx]);
            }
          gcli.createDisplay();
        });
    } + ')('+ JSON.stringify(commands) +');';

    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
});
