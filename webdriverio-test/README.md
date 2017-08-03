## Webdriverio setup 
The porpouse is to use * [Webdriverio](http://webdriver.io/) - to automate aplications in different emulated devices

## Getting Started
These instructions will give you information about how to run test cases using webdriverio in your local environment

## Prerequisites
Make sure you have installed in your local: 

```
Node Js
Java 
Selenium server standalone 3.0.1 
Geckodriver 
Chromedriver 
Webdriverio 
```

## Running the tests

1. Create a test folder in your computer

```
$ mkdir test && cd test
```

2. Inside the created folder, make sure you have Selenium server standalone and Geckodriver

3. Start Selenium Server Standalone 

```
$ java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.4.0.jar
```

4. Create a "test.js" to test if webdriverio is correctly working

```
$ touch test.js 
```

5. Paste the following in "test.js":

```
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();
```

6. Run the created file "test.js"

```
$ node test.js
```

## Functional tests included
Each link works properly

```
Give an example
```

Every section has the correct information

```
Give an example
```

## Authors
**Noelia Grabowiecki** - *Initial work*
