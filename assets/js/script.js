/*
Case Sensitive = reconhece letras Maiúsculas e minúsculas.

  var nome = 'Daniel' //variavel de escopo global
  let nome = 'Daniel' //variavel de escopo fechado
  const nome = 'Daniel' //escopo fechado e não deve ser alterada

por Tag: getElementByTagName ()
por Id: getElementById()
por Nome: getElementsByName()
por Class: getElementsByClassName ()
por Seletor: querySelector() --> O mais recente e mais utilizado, é preciso usar # e . 
para chamar a class e ID.    
*/

let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa');

/* 
nome.style.width = '50%'
email.style.width = '50%'
assunto.style.width = '75%'
 */

function validaNome () {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length >=4){
        txtNome.style.color = '#26733a';
        txtNome.innerHTML = 'Nome Válido ✔';
        nomeOk = true;
    }else{
        txtNome.style.color = '#732626';
        txtNome.innerHTML = 'Nome inválido - Insira pelo menos 4 caracteres ❌';
    }
}
// function validaEmail() {
//   let txtEmail = document.querySelector('#txtEmail');

//   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
//     txtEmail.innerHTML = 'E-mail inválido - preciso de um @ e de um . ❌';
//     txtEmail.style.color = '#732626';
//   } else {
//     txtEmail.innerHTML = 'E-mail válido ✔';
//     txtEmail.style.color = '#26733a';
//     emailOk = true;
//   }
// }

function validaEmail (){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        txtEmail.innerHTML = 'Email Valido ✔';
        txtEmail.style.color = '#26733a'
    } else {
        txtEmail.style.color = '#732626'; 
        txtNome.innerHTML = 'E-mail Inválido ❌';
    }
}
function validaAssunto (){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 120){

        txtAssunto.innerHTML ='Texto excedeu a quantidade permitida!!! ❌';
        txtAssunto.style.color = '#732626';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}
function count(){
    let contador = document.querySelector('#contador')  
    contador.innerHTML = `${assunto.value.length} / 134`
    contador.style.color = '#732626';

}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Enviado com Sucesso!!!');
    } else {
    alert('Preencha o formulário corretamente ❌');
    }
}

function mapaZoom() {
    mapa.style.width = '40vw'
    mapa.style.height = '50vh'
    mapa.style.zIndex = '15'
}

function mapaNormal() {
    mapa.style.width = '40vw'
    mapa.style.height = '40vh'
}

function subirTela() {
    window.scrollTo(0,0)
}


