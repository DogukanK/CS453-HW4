//import selenium and chrome webdriver
const { Builder, By, Key, until, Options, Capabilities } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');

//Automate the initializing of the standalone wiremock server. It may cause some problems in other OS's other than MacOS with M1 chip.
//If you face any problem, please comment the process execution block, then start the wiremock from cli manually.
var process = require('child_process');
let pc = process.exec('java -jar Part_2/wiremock-jre8-standalone-2.33.2.jar',function (err,stdout,stderr) {
    if(err){
        console.log(err);
    }
    console.log(stdout);
    
});



let options = new chrome.Options()
let nextPort = 9222 //for example
options.addArguments(["--remote-debugging-port=" + nextPort])

//create new chrome driver
let driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build()


async function test() {
    //resize window
    await driver.manage().window().setRect({width: 700, height: 840})

    driver.get("http://localhost:5500/Part_2/index.html");
    //wait until the page is loaded
    await driver.sleep(1000);


    /* VALID LOGIN */

    //select email field
    driver.findElement(By.id("email")).sendKeys("admin@admin.com");
    await driver.sleep(1000);
    //select password field
    driver.findElement(By.id("password")).sendKeys("@Dmin1234");
    await driver.sleep(1000);
    //click login button
    driver.findElement(By.id("login")).click();
    await driver.sleep(1000);

    //compare the result
    driver.wait(until.elementLocated(By.id("error-message"), 1000));
    await driver.sleep(1000);
    driver.findElement(By.id("error-message")).getText().then(function (text) {
        if (text == "Login Success!") {
            console.log("Login Success!");
        } else {
            console.log("Invalid email or password");
        }
    });


    /* INVALID EMAIL */

    //refresh the page
    await driver.sleep(1000);
    driver.navigate().refresh();
    await driver.sleep(1000);
    //input invalid email
    driver.findElement(By.id("email")).sendKeys("adad323asda");
    await driver.sleep(1000);
    //input valid password
    driver.findElement(By.id("password")).sendKeys("@Dmin1234");
    await driver.sleep(1000);
    //click login button
    driver.findElement(By.id("login")).click();
    await driver.sleep(1000);


    //compare the results
    driver.wait(until.elementLocated(By.id("error-message"), 1000));
    driver.findElement(By.id("error-message")).getText().then(function (text) {
        //console.log(text);
        if (text == "Email is not valid") {
            console.log("Email is not valid");
        } else {
            console.log(text);
        }
    });

     /* INVALID PASS 1 */

    //refresh the page
    await driver.sleep(1000);
    driver.navigate().refresh();
    await driver.sleep(1000);
    //input invalid email
    driver.findElement(By.id("email")).sendKeys("admin@admin.com");
    await driver.sleep(1000);
    //input valid password
    driver.findElement(By.id("password")).sendKeys("1234aaaa");
    await driver.sleep(1000);
    //click login button
    driver.findElement(By.id("login")).click();
    await driver.sleep(1000);


    //compare the results
    driver.wait(until.elementLocated(By.id("error-message"), 1000));
    driver.findElement(By.id("error-message")).getText().then(function (text) {
        //console.log(text);
        if (text == "At least one uppercase letter.") {
            console.log("Invalid password test 1 successful"); 
        } else {
            console.log(text);
        }
    });

     /* INVALID PASS 2 */

    //refresh the page
    await driver.sleep(1000);
    driver.navigate().refresh();
    await driver.sleep(1000);
    //input invalid email
    driver.findElement(By.id("email")).sendKeys("admin@admin.com");
    await driver.sleep(1000);
    //input valid password
    driver.findElement(By.id("password")).sendKeys("AAAA1234");
    await driver.sleep(1000);
    //click login button
    driver.findElement(By.id("login")).click();
    await driver.sleep(1000);


    //compare the results
    driver.wait(until.elementLocated(By.id("error-message"), 1000));
    driver.findElement(By.id("error-message")).getText().then(function (text) {
        //console.log(text);
        if (text == "At least one lowercase letter.") {
            console.log("Invalid password test 2 successful"); 
        } else {
            console.log(text);
        }
    });

     /* INVALID PASS 3 */

    //refresh the page
    await driver.sleep(1000);
    driver.navigate().refresh();
    await driver.sleep(1000);
    //input invalid email
    driver.findElement(By.id("email")).sendKeys("admin@admin.com");
    await driver.sleep(1000);
    //input valid password
    driver.findElement(By.id("password")).sendKeys("a1s2");
    await driver.sleep(1000);
    //click login button
    driver.findElement(By.id("login")).click();
    await driver.sleep(1000);


    //compare the results
    driver.wait(until.elementLocated(By.id("error-message"), 1000));
    driver.findElement(By.id("error-message")).getText().then(function (text) {
        //console.log(text);
        if (text == "At least 8 characters.") {
            console.log("Invalid password test 3 successful"); 
        } else {
            console.log(text);
        }
    });

    /* INVALID PASS 4 */

    //refresh the page
    await driver.sleep(1000);
    driver.navigate().refresh();
    await driver.sleep(1000);
    //input invalid email
    driver.findElement(By.id("email")).sendKeys("admin@admin.com");
    await driver.sleep(1000);
    //input valid password
    driver.findElement(By.id("password")).sendKeys("DoooDooo");
    await driver.sleep(1000);
    //click login button
    driver.findElement(By.id("login")).click();
    await driver.sleep(1000);


    //compare the results
    driver.wait(until.elementLocated(By.id("error-message"), 1000));
    driver.findElement(By.id("error-message")).getText().then(function (text) {
        //console.log(text);
        if (text == "At least one number.") {
            console.log("Invalid password test 4 successful"); 
        } else {
            console.log(text);
        }
    });

    /* INVALID PASS 5 */

    //refresh the page
    await driver.sleep(1000);
    driver.navigate().refresh();
    await driver.sleep(1000);
    //input invalid email
    driver.findElement(By.id("email")).sendKeys("admin@admin.com");
    await driver.sleep(1000);
    //input valid password
    driver.findElement(By.id("password")).sendKeys("Do@oDoo^o1");
    await driver.sleep(1000);
    //click login button
    driver.findElement(By.id("login")).click();
    await driver.sleep(1000);


    //compare the results
    driver.wait(until.elementLocated(By.id("error-message"), 1000));
    driver.findElement(By.id("error-message")).getText().then(function (text) {
        //console.log(text);
        if (text == "Password can be consists only numbers, letters, and ‘+’, ‘@’") {
            console.log("Invalid password test 5 successful"); 
        } else {
            console.log(text);
        }
    });


    //close the browser after the tests
    await driver.sleep(2000);
    //close wiremock server
    pc.kill();

}



test();