// alert("Hello, world!");

var name = 'Natália Camello';
var nameHTML = document.getElementById('nameHTML');
var texto1 = document.getElementById('texto-1');
var texto2 = document.getElementById('texto-2');

// function sayHi(){
//     alert('Olá, ' + name + '!');
// }
// sayHi();

// function showName(name){
//     nameHTML.innerHTML = name;
// }
// showName('Thomas');

function clickProject(){
    // console.log("Clicou no botão Projetos!");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickAbout(){
    // console.log("Clicou no botão Sobre!");
    texto1.style.display = "block";
    texto2.style.display = "none";
}