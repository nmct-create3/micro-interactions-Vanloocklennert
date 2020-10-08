function handleFloatingLabel() {
   
}

const handlePasswordSwitcher = function() {
    const passwordInput = document.querySelector('.js-password-input'),
    passwordToggle = document.querySelector('.js-password-toggle');

    if (!passwordInput || !passwordToggle){
        console.error('De classen werden niet gevonden.',passwordInput,passwordToggle);
        return;
    }
    passwordToggle.addEventListener('change',function(){
        if(passwordInput.type == 'password'){
            passwordInput.type= 'text';
        } 
        else{
            passwordInput.type = 'password';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});