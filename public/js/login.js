window.addEventListener('load', ()=> {

    let form = document.querySelector('.li-main-form');

    //----------------------validaciones-del-form-register------------//

    form.addEventListener('submit', (e) => {

        //-----------------impedir-submit-hasta----------------------//
        //e.preventDefault();
        //-----------------array-de-errores-------------------------//
        let errors = [];

        //------------------inputs--------------------------------//
        let emailInput = document.querySelector('.emailForm');
        let passwordInput = document.querySelector('.passwordForm');

        //------------------<p>errores--------------------------------//
        let emailError = document.querySelector('.emailError');
        let passwordError = document.querySelector('.passwordError');

        //-----------------validaciones-del-email------------------//

        if(emailInput.value == ''){
            errors.push('Tenés que completar este campo');
            emailError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tenés que completar este campo';
            
        }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(emailInput)){
            errors.push('Tiene que tener un email valido');
            emailError.innerHTML='<i class="fas fa-exclamation-circle"></i> El correo tiene que ser valido.';
        };

        //-----------------validaciones-del-password------------------//
        if(passwordInput.value == ''){
            errors.push('Tenés que completar este campo');
            passwordError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tenés que completar este campo';
            
        }else if(passwordInput.value.length < 8){
            errors.push('Tiene que tener al menos 8 caracteres');
            passwordError.innerHTML='<i class="fas fa-exclamation-circle"></i> Tiene que tener al menos 8 caracteres';
        };
    })
});