window.addEventListener = ('load', () =>{
    let form = document.querySelector('.li-main-form');
    let firstNameInput = document.querySelector('.firstNameInput');
    firstNameInput.addEventListener('keydown', (e)=>{
        if(e.key == 'a'){
            alert('aaaaaaaaaaa');
        }
    })




    
    form.addEventListener('submit', (e) => {
        //-----------------impedir-submit-hasta----------------------//
        e.preventDefault();

        //-----------------array-de-errores-------------------------//
        let errors = [];

        //------------------Inputs--------------------------------//
        let firstNameInput = document.querySelector('.firstNameInput');
        let lastNameInput = document.querySelector('.lastNameInput');
        let emailInput = document.querySelector('.emailInput');
        let userNameInput = document.querySelector('.userNameInput');
        let avatarInput = document.querySelector('.avatarInput');
        let passwordInput = document.querySelector('.passwordInput');

        //------------------<p>errores--------------------------------//
        let firstNameError = document.getElementById('#firstName-text-error');
        let lastNameError = document.getElementById('#lastname-text-error');
        let emailError = document.getElementById('#email-text-error');
        let userNameError = document.getElementById('#userName-text-error');
        let avatarError = document.getElementById('#avatar-text-error');
        let passwordError = document.getElementById('#password-text-error');

        //-----------------validaciones-del-nombre------------------//
        if(firstNameInput.value == ''){
            errors.push('Tenés que completar este campo');
            firstNameError.innerText='Tenés que completar este campo';
        }else if(firstNameInput.value.length <= 1){
            errors.push('Tiene que tener al menos 2 letras');
            firstNameError.innerText='Tenés que completar este campo';
        }
        if(lastNameInput.value == ''){
            errors.push('Tenés que completar este campo');
            lastNameError.innerText='Tenés que completar este campo';
        }else if(firstNameInput.value.length <= 1){
            errors.push('Tiene que tener al menos 2 letras');
            lastNameError.innerText='Tenés que completar este campo';
        }
    })
})