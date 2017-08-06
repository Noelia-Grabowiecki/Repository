var assert = require('assert');


describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
        var text = browser.getText('.rulethemall');
        console.log(text);
        var text = browser.getText('#What-is-WebdriverIO');
        console.log(text);
        var text = browser.getText('#Easy-Test-Setup');
        console.log(text);
    });
});

