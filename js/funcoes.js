var Conexao = import("conexaobeck.js")
window.addEventListener("load",myFunction);



function myFunction() {
  document.getElementById("demo").textContent=Conexao.texto;
  document.getElementById("teste").textContent=Conexao.texto;       
}
function myFunctionNew() {

    document.getElementById("demo").textContent="mudou demo";  
    document.getElementById("teste").textContent="mudou teste";       
  }
 function soma(){

 }

 module.exports = {myFunction,myFunctionNew}