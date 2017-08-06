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

4. Clone Noelia-Grabowiecki's repository

```
$ git clone https://github.com/Noelia-Grabowiecki/Repository.git
```

5. Enter webdriverio-test and run the existent tests

```
$ ./node_modules/.bin/wdio wdio.conf.js
```

## Functional tests included
Each section at Home page contains the correct title

```
Opens webdriverio home page
Asserts title
Gets the 3 teaserbox titles
Gets articles titles
Gets footer title
```

Every mainnav option redirects to the correct page

```
Opens webdriverio home page 
Clicks on I/O logo and gets the home title
Clicks on Developer Guide option
Clicks on API section option
Clicks on Contribute option
```

## Authors
**Noelia Grabowiecki** - *Initial work*
