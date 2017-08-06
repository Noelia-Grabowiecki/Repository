var assert = require('assert');

// Clicks each mainnav section

describe('webdriver.io page', function() {
	it('should fetch menu links and visit each page', function () {
    	links = $$('.mainnav');
    		links.forEach(function (link) {
        	link.click('h1=I/O')
    		var text = browser.getText('h2=WebDriver bindings for Node.js');
        	console.log(text);
    	});
	});
});	

describe('webdriver.io page', function() {
	it('should fetch menu links and visit each page', function () {
    	links = $$('.mainnav');
    		links.forEach(function (link) {
        	link.click('a=Developer Guide')
    		var text = browser.getText('#Developer-Guide');
        	console.log(text);
    	});
	});
});		

describe('webdriver.io page', function() {
	it('should fetch menu links and visit each page', function () {
    	links = $$('.mainnav');
    		links.forEach(function (link) {
        	link.click('a=API')
    		var text = browser.getText('#WebdriverIO-API-Docs');
        	console.log(text);
    	});
	});
});	

describe('webdriver.io page', function() {
	it('should fetch menu links and visit each page', function () {
    	links = $$('.mainnav');
    		links.forEach(function (link) {
        	link.click('a=Contribute')
    		var text = browser.getText('#Contributing');
        	console.log(text);
    	});
	});
});	

// Clicks the latest api version
 
describe('webdriver.io page', function() {
	it('should demonstrate the click command', function () {
    	var myButton = $('dropdownMenu1')
    	myButton.click()
    	var text = browser.getText('Latest');
    	assert(text === 'Latest was clicked');
	})
}); 

