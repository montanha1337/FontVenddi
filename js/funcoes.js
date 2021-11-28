
window.addEventListener("load",myFunction);

var texto = "aprendendo a criar elementos"

function myFunction() {

    console.log(texto)
  document.getElementById("demo").textContent=texto;
  document.getElementById("teste").textContent=texto;       
}
function myFunctionNew() {

    document.getElementById("demo").textContent="mudou demo";  
    document.getElementById("teste").textContent="mudou teste";       
  }

