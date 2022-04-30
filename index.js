function login() {
    //copy the email and password from the form
    var email = $('#email').val();
    var password = $('#password').val();

    //check if the email is not empty 
    if (email == '' || password == '') {
        //alert('Please fill all the fields');
        $("#email").focus();
        $("#error-message").text("Please fill all the fields");
    } else {
        //check email address is valid or not
        if (isValidEmailAddress(email)) {
            //check password is valid or not
            if(isValidPassword(password)) {
                //if valid then put message in the div with id 'error-message'
                $("#error-message").text("Inputs are correct");
            }
            else {
                //if invalid then put message in the div with id 'error-message'
                $("#password").focus();
                $("#error-message").text("Password must be:  \na. consists only numbers, letters, and \"+\", \"@\" " +
                                                            "\nb. Is longer than 8 characters." +
                                                            "\nc. Contains at least one upper case letter." +
                                                            "\nd. Contains at least one lowercase letter." +
                                                            "\ne. Contains at least one number.");
            }
        } else {
            //if invalid then put message in the div with id 'error-message'
            $("#email").focus();
            $("#error-message").text("Email is not valid");
        }
    }
}
//check email address is valid or not
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}
//check password is valid or not
function isValidPassword(password) {
    var pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$+!%*?&])[A-Za-z\d@$+!%*?&]{8,}$/);
    return pattern.test(password);
}

