window.addEventListener('load', ()=>{
    
    //---------------variables-----------------------//
    let form = document.querySelector('.li-main-form');

    //----------------------validaciones-del-form-register------------//
    form.addEventListener('submit', (e) => {
        //-----------------impedir-submit-hasta----------------------//
        //e.preventDefault();
        //-----------------array-de-errores-------------------------//
        let errors = [];

        //------------------inputs--------------------------------//
        let firstNameInput = document.querySelector('#firstNameInput');
        let lastNameInput = document.querySelector('#lastNameInput');
        let emailInput = document.querySelector('#emailInput');
        let userNameInput = document.querySelector('#userNameInput');
        let avatarInput = document.querySelector('#avatarInput');
        let passwordInput = document.querySelector('#passwordInput');

        //------------------<p>errores--------------------------------//
        let firstNameError = document.querySelector('#firstName-text-error');
        let lastNameError = document.querySelector('#lastName-text-error');
        let emailError = document.querySelector('#email-text-error');
        let userNameError = document.querySelector('#userName-text-error');
        let avatarError = document.querySelector('#avatar-text-error');
        let passwordError = document.querySelector('#password-text-error');

        

        //-----------------validaciones-del-nombre------------------//
        if(firstNameInput.value == ''){
            errors.push('Tenés que completar este campo');
            firstNameError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tenés que completar este campo';
            
        }else if(firstNameInput.value.length < 3){
            errors.push('Tiene que tener al menos 3 caracteres');
            firstNameError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tiene que tener al menos 2 caracteres';
        };

        if(lastNameInput.value == ''){
            errors.push('Tenés que completar este campo');
            lastNameError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tenés que completar este campo';
        }else if(lastNameInput.value.length < 3){
            errors.push('Tiene que tener al menos 2 letras');
            lastNameError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tiene que tener al menos 2 caracteres';
        };


        //-----------------validaciones-del-email------------------//

        if(emailInput.value == ''){
            errors.push('Tenés que completar este campo');
            emailError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tenés que completar este campo';
            
        }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(emailInput)){
            errors.push('Tiene que tener un email valido');
            emailError.innerHTML='<i class="fas fa-exclamation-circle"></i> El correo tiene que ser valido.';
        };

        //-----------------validaciones-del-username------------------//
        if(userNameInput.value == ''){
            errors.push('Tenés que completar este campo');
            userNameError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tenés que completar este campo';
            
        }else if(userNameInput.value.length < 6){
            errors.push('Tiene que tener al menos 6 caracteres');
            userNameError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tiene que tener al menos 6 caracteres';
        };

        //-----------------validaciones-del-password------------------//
        if(passwordInput.value == ''){
            errors.push('Tenés que completar este campo');
            passwordError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tenés que completar este campo';
            
        }else if(passwordInput.value.length < 8){
            errors.push('Tiene que tener al menos 8 caracteres');
            passwordError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tiene que tener al menos 8 caracteres';
        };


        if(errors.length > 0){
            e.preventDefault();
        }
    })
})


/*
if(firstNameInput.value == ''){
            errors.push('Tenés que completar el campo Nombre');

        }else if(firstNameInput.value.length < 3){
            errors.push('El Nombre tiene que tener al menos 2 letras');
        }
        if(lastNameInput.value == ''){
            errors.push('Tenés que completar este campo');
        }else if(firstNameInput.value.length <= 1){
            errors.push('Tiene que tener al menos 2 letras');
        }
        if(errors.length > 0){
            e.preventDefault();
            let ulErrors= document.querySelector('#ul-texts-error');
            for(let i = 0; i < errors.length; i++){
                ulErrors.innerHTML += '<li>' + errors[i] + '</li>';
            }
        }
*/
