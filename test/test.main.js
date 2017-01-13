var assert = require('assert');

var commands = [
  /**
   * 'pnh' command.
   */
  {
    name: "pnh",
    description: 'Commands for interacting with a Plug-n-Hack provider (e.g. OWASP ZAP)'
  },

  /**
   * 'pnh config' command
   */
  {
    name: 'pnh config',
    description: 'pnh configuration operations',
  },

  /**
   * 'pnh config clear' command
   * clear the current config.
   */
  {
    name: 'pnh config clear',
    description: 'clear the current pnh config',
  },

  /**
   * 'pnh config list' command
   * list the available configs.
   */
  {
    name: 'pnh config list',
    description: 'list pnh configs',
  },

  /**
   * 'pnh config apply' command
   * Apply a pnh config.
   */
  {
    name: 'pnh config apply',
    description: 'apply a pnh config',
  },

  /**
   * 'pnh config remove' command
   * Remove the specified pnh config.
   */
  {
   name: 'pnh config remove',
   description: 'remove a pnh config',
  },

  /**
   * 'pnh config show' command
   * Show the current pnh config.
   */
  {
    name: 'pnh config show',
    description: 'show the current config',
  }
];

describe('pnh gcli page', function() {
  it('should display a web page with a gcli input', function () {
    browser.url('resource://jid1-cz1beofm9mmlzg-at-jetpack/data/prefs.html');
    browser.pause('2000');
  });
});

describe('help pnh commands', function () {
	it('should get list of all the the pnh commands available ', function () {
    
    for(var command in commands) {
      var gcli_input = $('.gcli-in-input');
      gcli_input.setValue('help ' + commands[command].name + ' \n');
      var gcliHelpDescription = $$('.gcli-help-description');
      assert.equal(gcliHelpDescription[gcliHelpDescription.length - 1].getText(), commands[command].description, 'command description equal');
    }

		browser.pause('2000');
  });
});
