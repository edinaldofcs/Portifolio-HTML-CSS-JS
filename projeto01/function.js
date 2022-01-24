const form = document.getElementById('formulario');
const inputNome = form[0];
const inputQuantidade = form[1];
const inputData = form[2];
const inputMsg = form[3];
const botao = form[4];
var envio;

const validarInput = (input, condicao) => {
    if (!input.value) {
        input.classList.add('inputTexto');
        if(condicao)form.classList.add('animar-form');
        envio = false;
    } else {
        input.classList.remove('inputTexto');
    }

    if (condicao) {
        setTimeout(() => {
            form.classList.remove('animar-form');
            //input.classList.remove('inputTexto')        
        }, 400)        
    }
}

botao.addEventListener('click', (event) => {
    envio = true;
    validarInput(inputNome, true);
    validarInput(inputQuantidade, true);
    validarInput(inputData, true);
    validarInput(inputMsg, true);

    envio == false ? event.preventDefault() :
    alert('Formulário enviado com sucesso');
})



document.addEventListener('input', (event) => {
    if (event.target.id == inputNome.id) validarApenasLetras();
    if (event.target.id == inputQuantidade.id) validarApenasNumeros();
    if (event.target.id == inputData.id) validarInput(inputData, false);
    if (event.target.id == inputMsg.id) validarInput(inputMsg, false);  
})

const validarApenasLetras = () => {
    validarInput(inputNome, false);
    var regex = /[a-zÀ-ú ']/gi;
    var validar = inputNome.value.match(regex);
    for (let index in validar) {
        if (validar[index - 1] == " " && validar[index] == " ") validar.splice(index, 1);
    }
    inputNome.value = validar.toString().replaceAll(/,/g, '');
}

const validarApenasNumeros = () => {
    validarInput(inputQuantidade, false);
    var validar = inputQuantidade.value;
    validar = validar.replaceAll(/[^\d]/gi, '');
    inputQuantidade.value = validar;
}
