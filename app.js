const form = document.getElementById('formContato');
const nomes = [];

let linhas = '';

addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

addEventListener("keyup", function(e){
    const inputTelContato = document.getElementById('TelContato');

    if (inputTelContato.length > 0) {
        inputTelContato.value = "("+inputTelContato.value
    }
    if (inputTelContato.length > 3) {
        inputTelContato.value = inputTelContato.value.slice(0,4)+") "+inputTelContato.value.slice(4,11)
    }
    if (inputTelContato.length > 6) {
        inputTelContato.value = inputTelContato.slice(0,9)+"-" + inputTelContato.slice(9)
    }
})


function adicionaLinha() {
    const inputNomeContato = document.getElementById('NomeContato');
    const inputTelContato = document.getElementById('TelContato');
    const inputEmailContato = document.getElementById('EmailContato');

    if (nomes.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já foi inserido`);
    }
    else{
        nomes.push(inputNomeContato.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `<td>${inputEmailContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }    

    inputNomeContato.value = '';
    inputTelContato.value = '';
    inputEmailContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}