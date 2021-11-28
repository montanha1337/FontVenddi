window.addEventListener("load",teste);
window.addEventListener("load",myFunction);


var texto = "aprendendo a criar elementos"
const back = "venddiapi.herokuapp.com"

function teste(){
    let requests = new XMLHttpRequest()
    requests.open("GET",`${back}/desenvolvimento/testeserver`,false)
    requests.send()
    return requests.responseText
}
function myFunction() {
  document.getElementById("demo").textContent=teste();
  document.getElementById("teste").textContent=texto;       
}
function myFunctionNew() {

    document.getElementById("demo").textContent="mudou demo";  
    document.getElementById("teste").textContent="mudou teste";       
  }


  

