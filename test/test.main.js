var assert = require('assert');

describe('pnh gcli page', function() {
  it('should display a web page with a gcli input', function () {
    browser.url('resource://jid1-cz1beofm9mmlzg-at-jetpack/data/prefs.html');
    browser.pause('2000');
  });
});

describe('help pnh commands', function () {
	it('should get list of all the the pnh commands available ', function () {
    
    var gcli_input = $('.gcli-in-input');
    gcli_input.setValue('help pnh\n');

    var gcliHelpDescription = $$('.gcli-help-description');
    assert.equal(gcliHelpDescription[gcliHelpDescription.length - 1].getText(), 'Commands for interacting with a Plug-n-Hack provider (e.g. OWASP ZAP)','help description equal');

		browser.pause('2000');
  });
});
