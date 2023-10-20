function addCharactere(charactere) {
    const valorDisplay = document.querySelector('.display').value;

    document.querySelector('.display').value = valorDisplay + charactere
}

function limparDisplay() {
    document.querySelector('.display').value = '';
}

function calcular() {
    const valorDisplay = document.querySelector('.display').value;

    document.querySelector('.display').value = eval(valorDisplay)

}