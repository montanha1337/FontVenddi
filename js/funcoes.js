var Conexao = import("./conexao")
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


 module.exports = {myFunction,myFunctionNew}