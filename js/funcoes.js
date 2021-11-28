 var texto = "aprendendo a criar elementos"
window.addEventListener("load",myFunction);
function myFunction() {

  document.getElementById("demo").textContent=texto;        
}
function myFunctionNew() {

    document.getElementById("demo").textContent="mudou";        
  }
 module.exports = {myFunction,myFunctionNew}