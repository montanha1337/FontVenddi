var Conexao = import("js/conexaobeck.js")
window.addEventListener("load",myFunction);



function myFunction() {
    const texto =Conexao.texto
    console.log(texto)
  document.getElementById("demo").textContent=texto;
  document.getElementById("teste").textContent=texto;       
}
function myFunctionNew() {

    document.getElementById("demo").textContent="mudou demo";  
    document.getElementById("teste").textContent="mudou teste";       
  }
 function soma(){

 }

 module.exports = {myFunction,myFunctionNew}