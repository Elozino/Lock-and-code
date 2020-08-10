function validateForm(){
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("telephone").value;
    const password = document.getElementById("password").value;
    const error_message = document.getElementById("error_message");

    const fullnameRegrex = /^[a-z][a-z\s]*$ | [a-zA-Z ]*$/;
    const emailRegrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegrex = /^\+?([0-9]{3})\)?([0-9]{4})?([0-9]{4})?([0-9]{3})$/;

    const validName = fullnameRegrex.test(fullname);
    const validEmail = emailRegrex.test(email);
    const validPhone = phoneRegrex.test(phoneNumber);

    error_message.style.padding = "12px";

    if(!validName && fullname == ""){
        text = "Please Enter Firstame And Lastname";
        error_message.innerHTML = text;
        
    }
    if(!validEmail){
        text = "Please Enter A Valid Email";
        error_message.innerHTML = text;
        
    }
    if(!validPhone){
        text = "Please Enter A Telephone With Country Code";
        error_message.innerHTML = text;
        
    }
    
    if(password.length < 7){
        text = 'Password should be more than 6 characters';
        error_message.innerHTML = text;
        
    }

    else{
        alert('Successful')
        return true;
    }
}

console.log(validateForm())