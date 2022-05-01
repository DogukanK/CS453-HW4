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
                /*
                var obj = $("#error-message").text("Password must be:" + "\n" 
                + "1. At least 8 characters" + "\n" 
                + "2. At least one uppercase letter" + "\n" 
                + "3. At least one lowercase letter" + "\n" 
                + "4. At least one number" + "\n" 
                + "5. At least one special character (@+)");  
                */         
            }
            //replace the \n with <br>.
            obj.html(obj.html().replace(/\n/g, '<br />'));
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
    var pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@+]{8,}$/);
    if ($.trim(password).length < 8) {
        $("#password").focus();
        $("#error-message").text("At least 8 characters.");
    }
    else if ( !password.match(/\d/) ){
        $("#password").focus();
        $("#error-message").text("At least one number.");
    }
    else if ( !password.match(/[A-Z]/) ){
        $("#password").focus();
        $("#error-message").text("At least one uppercase letter.");
    }
    else if ( !password.match(/[a-z]/) ){
        $("#password").focus();
        $("#error-message").text("At least one lowercase letter.");
    }
    else if( !password.match(/^[a-zA-Z0-9+@]+$/)){
        $("#password").focus();
        $("#error-message").text("Password can be consists only numbers, letters, and ‘+’, ‘@’");
    }
    return pattern.test(password);
}

