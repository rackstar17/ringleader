var assert = require('assert');
describe('pnh gcli page', function() {
    it('should display a web page with a gcli input', function () {
        browser.url('resource://jid1-cz1beofm9mmlzg-at-jetpack/data/prefs.html');
        browser.pause(5000);
    });
});
