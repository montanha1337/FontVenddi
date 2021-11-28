window.addEventListener("load",teste);


var texto = "aprendendo a criar elementos"
const back = "venddiapi.herokuapp.com"

function teste(){
    let requests = new XMLHttpRequest()
    requests.open("GET",`${back}/desenvolvimento/testeserver`)
    requests.responseType = 'json';
    requests.send();    
    document.getElementById("demo").textContent=requests.responseText;
    document.getElementById("teste").textContent=texto;  
}
function myFunction() {
  document.getElementById("demo").textContent=teste();
  document.getElementById("teste").textContent=texto;       
}
function myFunctionNew() {

    document.getElementById("demo").textContent="mudou demo";  
    document.getElementById("teste").textContent="mudou teste";       
  }


  

