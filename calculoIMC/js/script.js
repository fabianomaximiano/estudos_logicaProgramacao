// Seção de Declarações das variáveis
let peso = document.getElementById('peso'); 
let altura = document.getElementById('altura'); 
let imc = document.getElementById('imc');

var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
  new bootstrap.Alert(alert)
})

alert("testando");

function enviar() {
    let nome = document.getElementById('nome').value;

    if (nome == '' ) {
        console.log('por favor preecher o nome completo');
    }else{
        console.log('Este é meu nome: ' + nome);
    }

    
}
