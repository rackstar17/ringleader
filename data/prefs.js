/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set ts=8 sts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

document.addEventListener('ready', function() {
    console.log('JS LOADED');
});


self.port.on('display', function(commands) {
	var commands = commands;







var actualCode = '(' + function(commands) {
    	require([ 'gcli/index', 'demo/index' ], function(gcli) { 

    		for(idx in commands.pnhCommands.commands) {
    			
    			gcli.addCommand(commands.pnhCommands.commands[idx]);
    			
		    //if (!commands[idx].conditional) {
		      // if (gcli.addCommand) {
		      //   // TODO: we could extract list items and dump into addItems?
		      //   gcli.addCommand(commands[idx]);
		      // } else {
		      //   gcli.addItems([commands[idx]]);
		      // }
		    }
		  //}	
		  
          

          gcli.createDisplay();
        });

} + ')('+ JSON.stringify(commands) +');';


var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
//script.remove();
});

// for(idx in commands) {
// 		  	console.log(commands[idx])
// 		    if (!commands[idx].conditional) {
// 		      if (gcli.addCommand) {
// 		      	console.log("\nCommands :", commands[idx])
// 		        // TODO: we could extract list items and dump into addItems?
// 		        gcli.addCommand(commands[idx]);
// 		      } else {
// 		        gcli.addItems([commands[idx]]);
// 		      }
// 		    }
// 		  }	
