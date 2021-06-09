window.addEventListener('load', () => {

    //---------------variables-----------------------/ /
    let form = document.querySelector('#form');

    //----------------------validaciones-del-form-register------------//
    form.addEventListener('submit', (e) => {

        //-----------------impedir-submit-hasta----------------------//
        //e.preventDefault();
        //-----------------array-de-errores-------------------------//
        let errors = [];

        //------------------inputs--------------------------------//
        let nameInput = document.querySelector('#product-name');
        let priceInput = document.querySelector('#prize');
        let descriptionInput = document.querySelector('#description');

        //------------------<p>errores--------------------------------//
        let nameError = document.querySelector('#name-text-error');
        let priceError = document.querySelector('#price-text-error');
        let descriptionError = document.querySelector('#description-text-error');

        //-----------------validaciones-del-nombre------------------//
        if (nameInput.value == '') {
            errors.push('Tenés que completar este campo');
            nameError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Tenés que completar este campo';

        } else if (nameInput.value.length < 5) {
            errors.push('Tiene que tener al menos 5 caracteres');
            nameError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Tiene que tener al menos 5 caracteres';
        };

        //-----------------validaciones-del-precio------------------//
        if (priceInput.value == '') {
            errors.push('Tenés que completar este campo');
            priceError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Tenés que completar este campo';

        };

        //-----------------validaciones-de-la-descripcion------------------//
        if (descriptionInput.value == '') {
            errors.push('Tenés que completar este campo');
            descriptionError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Tenés que completar este campo';

        } else if (descriptionInput.value.length < 20) {
            errors.push('Tiene que tener al menos 20 caracteres');
            descriptionError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Tiene que tener al menos 20 caracteres';
        };

        if (errors.length > 0) {
            e.preventDefault();
        }
    });
});