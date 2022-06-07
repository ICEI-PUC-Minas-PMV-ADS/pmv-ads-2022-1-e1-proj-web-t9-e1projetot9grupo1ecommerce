
function eyeClick() {
    let passwordInput = document.querySelectorAll(.password)
    let inputTypeIsPassword = passwordInput[0].type == password


    function showPassword() {
        passwordInput[0].setAttribute(type, text)
        passwordInput[1].setAttribute(type, text)
        
    }
    
    function hidePassword() {
        passwordInput[0].setAttribute(type, password)
        passwordInput[1].setAttribute(type, password)
       
    }
    if (inputTypeIsPassword) {
        showPassword()

    } else {
        hidePassword()

    }
}