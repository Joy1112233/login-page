document.getElementById("login-form").addEventListener("submit",function(event){
    event.preventDefault();
    const number = document.getElementById("phone-number").value.trim()
    const password = document.getElementById("password").value.trim();
    const errorMessage= document.getElementById("error");

    const numberValid = /^01[0-9]{9}$/;
    const passwordValid = /^[0-9a-zA-Z]{4,10}$/;
    // Mobile Number Check
    // 01XXXXXXXXX
    if(!numberValid.test(number)){
        errorMessage.textContent = "Please enter a valid phone number";
        errorMessage.style.color = "red";
        return;
    }
    // Password Check
    if(!passwordValid.test(password)){
        errorMessage.textContent ="Please enter a valid Password";
        errorMessage.style.color = "red";
        return;
    }
    // input clear
    document.getElementById("phone-number").value = "";
    document.getElementById("password").value = "";
    // error message clear
    errorMessage.textContent = "";
    
    window.location.href ="dashboard.html";

})