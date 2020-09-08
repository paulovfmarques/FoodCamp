/*Uma abordagem mais 'clean' para criar a função de troca de classes
é utilizar a API classList.Toggle*/

/*A solução abaixo foi preferida para maior desenvolvimento do raciocínio lógico*/ 

var button = document.querySelector("button");
button.disabled = true;
//---------------PREÇO e TOTAL-------------
var pratoFinal = 0;
var bebidaFinal = 0;
var sobremesaFinal = 0;
const prato1 = 14.90;
const prato2 = 18.90;
const prato3 = 22.90;
const bebida1 = 4.90;
const bebida2 = 6.90;
const bebida3 = 9.90;
const sobremesa1 = 7.90;
const sobremesa2 = 17.90;
const sobremesa3 = 27.90;
var total = 0;
//---------------VARIÁVEL DE CONTAGEM--------
var ct = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
//---------------VARIAVEIS PRATO-------------
var i = 0;
var n = 0;
var c = "";
//--------------------------------------------SELEÇÃO PRATO-----------------------------------------
function selecaoPrato(A){
  
  if(i == 0){

    document.getElementById(A).style.borderColor = "#32B72F";
    document.getElementById(A).style.borderStyle = "inset";
    document.getElementById(A).style.borderWidth = "5px";
    c = document.querySelector("#" + A + " h2").innerText;
    i = 1;
    n = A;
    somaPrato(n);
    count1++;
  
  }else if(i == 1 && n == A){    
    
    document.getElementById(A).style.borderColor = "none";
    document.getElementById(A).style.borderStyle = "none";
    document.getElementById(A).style.borderWidth = "0";
    i = 0;
    c = "";
    subtraiPrato(n);
    if(count1 > 0){count1--;}else{} 

  }else if(n !== A){

    subtraiPrato(n);
    document.getElementById(n).style.borderColor = "none";
    document.getElementById(n).style.borderStyle = "none";
    document.getElementById(n).style.borderWidth = "0";

    document.getElementById(A).style.borderColor = "#32B72F";
    document.getElementById(A).style.borderStyle = "inset";
    document.getElementById(A).style.borderWidth = "5px";
    c = document.querySelector("#" + A + " h2").innerText;
    i = 1;
    n = A;    
    somaPrato(A);    
  }
//----------- HABILIDANTO/DESABILITANDO O BOTÃO----------------------
  if(soma() == 3){
    button.disabled =  false;
    button.style.backgroundColor = "#32B72F";
    button.innerText = "Fechar pedido";    
  }
  if(soma() !== 3){
    button.disabled =  true;
    button.style.backgroundColor = "#CBCBCB";
    button.innerText = "Selecione os 3 itens para fechar o pedido!";
  }
 
  
}
//---------------VARIAVEIS BEBIDA------------
var j = 0;
var m = 0;
var d = "";
//--------------------------------------------SELEÇÃO BEBIDA----------------------------------------
function selecaoBebida(B){
  
  if(j == 0){

    document.getElementById(B).style.borderColor = "#32B72F";
    document.getElementById(B).style.borderStyle = "inset";
    document.getElementById(B).style.borderWidth = "5px";
    d = document.querySelector("#" + B + " h2").innerText; 
    j = 1;
    m = B;
    somaBebida(m);
    count2++;
  
  }else if(j == 1 && m == B){

    document.getElementById(B).style.borderColor = "none";
    document.getElementById(B).style.borderStyle = "none";
    document.getElementById(B).style.borderWidth = "0";
    j = 0;
    subtraiBebida(m);
    if(count2 > 0){count2--;}else{} 

  }else if(m !== B){

    subtraiBebida(m);
    document.getElementById(m).style.borderColor = "none";
    document.getElementById(m).style.borderStyle = "none";
    document.getElementById(m).style.borderWidth = "0";

    document.getElementById(B).style.borderColor = "#32B72F";
    document.getElementById(B).style.borderStyle = "inset";
    document.getElementById(B).style.borderWidth = "5px";
    d = document.querySelector("#" + B + " h2").innerText; 
    j = 1;
    m = B;
    somaBebida(B);

  }
//----------- HABILIDANTO/DESABILITANDO O BOTÃO----------------------
  if(soma() == 3){
    button.disabled =  false;
    button.style.backgroundColor = "#32B72F";
    button.innerText = "Fechar pedido";    
  }
  if(soma() !== 3){
    button.disabled =  true;
    button.style.backgroundColor = "#CBCBCB";
    button.innerText = "Selecione os 3 itens para fechar o pedido!";
  }

  return count2;
}
//---------------VARIAVEIS SOBREMESA---------
var k = 0;
var o = 0;
var e = "";
//--------------------------------------------SELEÇÃO SOBREMESA-------------------------------------
function selecaoSobremesa(C){
  
  if(k == 0){

    document.getElementById(C).style.borderColor = "#32B72F";
    document.getElementById(C).style.borderStyle = "inset";
    document.getElementById(C).style.borderWidth = "5px";
    e = document.querySelector("#" + C + " h2").innerText;
    k = 1;
    o = C;
    count3++;
    somaSobremesa(o);
  
  }else if(k == 1 && o == C){

    document.getElementById(C).style.borderColor = "none";
    document.getElementById(C).style.borderStyle = "none";
    document.getElementById(C).style.borderWidth = "0";
    k = 0;
    subtraiSobremesa(o);
    if(count3 > 0){count3--;}else{} 

  }else if(o !== C){

    subtraiSobremesa(o);
    document.getElementById(o).style.borderColor = "none";
    document.getElementById(o).style.borderStyle = "none";
    document.getElementById(o).style.borderWidth = "0";

    document.getElementById(C).style.borderColor = "#32B72F";
    document.getElementById(C).style.borderStyle = "inset";
    document.getElementById(C).style.borderWidth = "5px";
    e = document.querySelector("#" + C + " h2").innerText;
    k = 1;
    o = C;
    somaSobremesa(C);    
  }
//----------- HABILIDANTO/DESABILITANDO O BOTÃO----------------------
  if(soma() == 3){
    button.disabled =  false;
    button.style.backgroundColor = "#32B72F";
    button.innerText = "Fechar pedido";    
  }
  if(soma() !== 3){
    button.disabled =  true;
    button.style.backgroundColor = "#CBCBCB";
    button.innerText = "Selecione os 3 itens para fechar o pedido!";
  }

  return count3;
}
//---------------SOMA DOS CONTADORES----------
function soma(){
  ct = count1 + count2 + count3;
return ct;
}
//-----------------------------------------SOMA E SUBTRAÇÃO DOS VALORES DOS ITENS----------------------------------

//---------------SOMA/SUB PRATO----------
function somaPrato(n){   
   if(n == 'a1'){
    total = total + prato1;
    pratoFinal = prato1;
  }else if( n == 'a2'){
    total = total + prato2;
    pratoFinal = prato2;
  }else if( n == 'a3'){
    total = total + prato3;
    pratoFinal = prato3;
  }
}

function subtraiPrato(n){
   if(n == 'a1'){
    total = total - prato1;
    pratoFinal = 0;
  }else if( n == 'a2'){
    total = total - prato2;
    pratoFinal = 0;
  }else if( n == 'a3'){
    total = total - prato3;
    pratoFinal = 0;
  }
}
//---------------SOMA/SUB BEBIDA----------
function somaBebida(n){   
   if(n == 'b1'){
    total = total + bebida1;
    bebidaFinal = bebida1;
  }else if( n == 'b2'){
    total = total + bebida2;
    bebidaFinal = bebida2;
  }else if( n == 'b3'){
    total = total + bebida3;
    bebidaFinal = bebida3;
  }
}

function subtraiBebida(n){
   if(n == 'b1'){
    total = total - bebida1;
    bebidaFinal = 0;
  }else if( n == 'b2'){
    total = total - bebida2;
    bebidaFinal = 0;
  }else if( n == 'b3'){
    total = total - bebida3;
    bebidaFinal = 0;
  }
}

//---------------SOMA/SUB BEBIDA----------
function somaSobremesa(n){   
   if(n == 'c1'){
    total = total + sobremesa1;
    sobremesaFinal = sobremesa1;
  }else if( n == 'c2'){
    total = total + sobremesa2;
    sobremesaFinal = sobremesa2;
  }else if( n == 'c3'){
    total = total + sobremesa3;
    sobremesaFinal = sobremesa3;
  }
}

function subtraiSobremesa(n){   
   if(n == 'c1'){
    total = total - sobremesa1;
    sobremesaFinal = 0;
  }else if( n == 'c2'){
    total = total - sobremesa2;
    sobremesaFinal = 0;
  }else if( n == 'c3'){
    total = total - sobremesa3;
    sobremesaFinal = 0;
  }
}

var msg = "";
var url = "";
var nome = "";
var adrss = "";
//-------------------------------------------- FECHAR PEDIDO------------------------------------
function confirm(){
  nome = prompt("Informe o nome: ");
  adrss = prompt("Informe o endereço: ")
  document.querySelector(".popup > :nth-child(2) > :nth-child(1)").innerText = c;
  document.querySelector(".popup > :nth-child(2) > :nth-child(2)").innerText = pratoFinal.toFixed(2);

  document.querySelector(".popup > :nth-child(3) > :nth-child(1)").innerText = d;   
  document.querySelector(".popup > :nth-child(3) > :nth-child(2)").innerText = bebidaFinal.toFixed(2);

  document.querySelector(".popup > :nth-child(4) > :nth-child(1)").innerText = e;
  document.querySelector(".popup > :nth-child(4) > :nth-child(2)").innerText = sobremesaFinal.toFixed(2);

  document.querySelector(".popup > :nth-child(5) > :nth-child(2)").innerText = total.toFixed(2);

  document.querySelector(".fundo-opaco").style.display = "block";
}
//---------------------------------------------- COMPRA------------------------------------
function mensagem(){
  var final = total.toFixed(2)
  msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ` + c + `\n- Bebida: ` + d + `\n- Sobremesa: ` + e + `\n\nTotal: R$ ` + final + `\n\n\nNome: ` + nome + `\nEndereço: ` + adrss); 
  url = `https://wa.me/5564999785992?text=` + msg;
  window.open(url, '_blank');
}

function cls(){  
    document.querySelector(".fundo-opaco").style.display = "none";
  }

