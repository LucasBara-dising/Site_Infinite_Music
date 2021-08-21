//constantes e varaiveis 
const loginFundo = document.getElementById("loginFundo");
const barraMenu = document.getElementById("topicosHeader");

function barra() {
  barraMenu.style.left = "-45%";
  barraMenu.style.transition = "1s";
}

// fecha menu barra lateral
function fecha() {
  barraMenu.style.left = "-100%";
  barraMenu.style.transition = "1s";
}

//fecha box de login
function FechaLogin() {
  loginFundo.style.display = "none";
}

//Abre box de login
function AbreLogin() {
  loginFundo.style.display = "block";
  loginFundo.style.top = "0%";
  loginFundo.style.transition = "all 1s"
}

window.onclick = function (event) {
  if (event.target == loginFundo) {
    loginFundo.style.display = "none";
    login.style.display = "none";
  }
}


function DefineTel(input) {

  var cel = input.value

  if (cel.length == 2) {
    cel = "(" + cel + ")";
  }

  if (cel.length == 9) {
    cel = cel + "-";
  }

  console.log(cel);
  input.value = cel;
}

// function CpfMask(){
//   var Cpf=document.getElementById("CPF");

//   if(Cpf.length==3){
//     Cpf= Cpf.value + "." ;
//   }

//   else if(Cpf.length==7){
//     Cpf= Cpf.value + "." ;
//   }

//   else if(Cpf.length==10){
//     Cpf= Cpf.value + "." ;
//   }

//   else(Cpf.length==11){
//     Cpf= Cpf.value + "-" ;
//   }
// }

function CpfMask() {
  var Input = document.getElementById("CPF");
  if (Input.value.length == 3 || Input.value.length == 7) {
    Input.value = Input.value + ".";
  }

  if (Input.value.length == 11) {
    Input.value = Input.value + "-";
  }

  if (Input.value.length > 13) {
    Input.value = Input.substring(0, 13);
  }
}

const etapaUm = document.getElementById("etapaUm");
const etapaDois = document.getElementById("etapaDois");
const etapaTres = document.getElementById("etapaTres");

const CirculoCad1 = document.getElementById("CirculoCad1");
const TracoCad1 = document.getElementById("TracoCad1");
const CirculoCad2 = document.getElementById("CirculoCad2");
const TracoCad2 = document.getElementById("TracoCad2");
const CirculoCad3 = document.getElementById("CirculoCad3");


function etapa1() {
  etapaUm.style.display = "block";
  etapaDois.style.display = "none";
  etapaTres.style.display = "none";

  CirculoCad1.style.borderColor = "#d9346e";
  TracoCad1.style.backgroundColor = "#d9346e";

  CirculoCad2.style.borderColor = "#ccc";
  TracoCad2.style.backgroundColor = "#ccc";
  CirculoCad3.style.borderColor = "#CCC";
}

function etapa2() {
  etapaUm.style.display = "none";
  etapaDois.style.display = "block";
  etapaTres.style.display = "none";

  CirculoCad1.style.borderColor = "#d9346e";
  TracoCad1.style.backgroundColor = "#d9346e";
  CirculoCad2.style.borderColor = "#d9346e";
  TracoCad2.style.backgroundColor = "#d9346e";

  CirculoCad3.style.borderColor = "#CCC";
}

function etapa3() {
  etapaUm.style.display = "none";
  etapaDois.style.display = "none";
  etapaTres.style.display = "block";

  CirculoCad1.style.borderColor = "#d9346e";
  TracoCad1.style.backgroundColor = "#d9346e";
  CirculoCad2.style.borderColor = "#d9346e";
  TracoCad2.style.backgroundColor = "#d9346e";
  CirculoCad3.style.borderColor = "#d9346e";
}


function animateBanner() {
  var banda = document.getElementById("banda");
  var textBanner = document.getElementById("textBanner");

  textBanner.style.marginTop = "5%";
  textBanner.style.transition = "1s"

  banda.style.marginTop = "-45%";
  banda.style.transition = "1s"

}

function aniamteBannerPremiun() {
  var PremiunTxt1 = document.getElementById("BannerPremiunTxt1");

  PremiunTxt1.style.marginTop = "0%";
  PremiunTxt1.style.transition = "1s";
}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var box1 = document.getElementById("boxComoFunciona");
  var box2 = document.getElementById("boxComoFuncionaDois");
  var box3 = document.getElementById("boxComoFuncionaTres");

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 800) {
    box1.style.position = "absolute";
    box1.style.marginTop = "0%";
    box1.style.transition = "1s";

    box2.style.position = "absolute";
    box2.style.marginTop = "0%";
    box2.style.transition = "1.5s";

    box3.style.position = "absolute";
    box3.style.marginTop = "0%";
    box3.style.transition = "2s";

  }
}

function OpenHome() {
  window.location.href = "Index.html";
}