window.addEventListener("load",myFunction);

var texto = "aprendendo a criar elementos"

function myFunction() {
  document.getElementById("demo").textContent=texto;
  document.getElementById("teste").textContent="O q estou fazendo aqui";       
}
function myFunctionNew() {

    document.getElementById("demo").textContent="mudou demo";  
    document.getElementById("teste").textContent="mudou teste";       
  }
 function soma(){
     
 }

 module.exports = {myFunction,myFunctionNew}