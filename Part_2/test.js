//import selenium and chrome webdriver
const { Builder, By, Key, until, Options, Capabilities } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');

let options = new chrome.Options()
let nextPort = 9222 //for example
options.addArguments(["--remote-debugging-port=" + nextPort])

//create new chrome driver
let driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build()


async function test() {
    //go to the url
    driver.get("http://localhost:5500/Part_2/index.html");
    //wait until the page is loaded
    await driver.sleep(1000);


    /* VALID LOGIN */

    //select email field
    driver.findElement(By.id("email")).sendKeys("admin@admin.com");
    await driver.sleep(3000);
    //select password field
    driver.findElement(By.id("password")).sendKeys("@Dmin1234");
    await driver.sleep(3000);
    //click login button
    driver.findElement(By.id("login")).click();
    await driver.sleep(3000);

    //compare the result
    driver.wait(until.elementLocated(By.id("error-message"), 3000));
    await driver.sleep(5000);
    driver.findElement(By.id("error-message")).getText().then(function (text) {
        if (text == "Login Success!") {
            console.log("Login Success!");
        } else {
            console.log("Invalid email or password");
        }
    });


    /* INVALID EMAIL */

    //refresh the page
    await driver.sleep(3000);
    driver.navigate().refresh();
    await driver.sleep(3000);
    //input invalid email
    driver.findElement(By.id("email")).sendKeys("adad323asda");
    await driver.sleep(3000);
    //input valid password
    driver.findElement(By.id("password")).sendKeys("@Dmin1234");
    await driver.sleep(3000);
    //click login button
    driver.findElement(By.id("login")).click();
    await driver.sleep(3000);


    //compare the results
    driver.wait(until.elementLocated(By.id("error-message"), 3000));
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
    await driver.sleep(3000);
    driver.navigate().refresh();
    await driver.sleep(3000);
    //input invalid email
    driver.findElement(By.id("email")).sendKeys("admin@admin.com");
    await driver.sleep(3000);
    //input valid password
    driver.findElement(By.id("password")).sendKeys("1234aaaa");
    await driver.sleep(3000);
    //click login button
    driver.findElement(By.id("login")).click();
    await driver.sleep(3000);


    //compare the results
    driver.wait(until.elementLocated(By.id("error-message"), 3000));
    driver.findElement(By.id("error-message")).getText().then(function (text) {
        //console.log(text);
        if (text == "At least one uppercase letter.") {
            console.log("Invalid password test 1 successful"); 
        } else {
            console.log(text);
        }
    });
}


test();