var assert = require('assert');

// Title

describe('webdriver.io page', function() {
    it('should have the right title', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        browser.pause(3000);
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});

describe('webdriver.io page', function() {
    it('should get text of teaserboxes', function () {
        var text = browser.getText('h3=Extendable');
        console.log(text);
        var text = browser.getText('h3=Compatible');
        console.log(text);
        var text = browser.getText('h3=Feature-Rich');
        console.log(text);
    });
});


// Section's Titles

describe('webdriver.io page', function() {
	it('should get text of an element', function () {
    	var text = browser.getText('.rulethemall');
        console.log(text);
        var text = browser.getText('#What-is-WebdriverIO');
        console.log(text);
        var text = browser.getText('.right-col-heading');
        console.log(text);
        var text = browser.getText('#Easy-Test-Setup');
        console.log(text);
        var text = browser.getText('h2');
        console.log(text);
        var text = browser.getText('.runyourtests');
        console.log(text);
	});
});

// Footer

describe('webdriver.io page', function() {
    it('should get text of an element', function () {
        var text = browser.getText('h6');
        console.log(text);
    });
});
