window.addEventListener("load",inicia);

var texto = "aprendendo a criar elementos"
var rota1
var rota2 


function inicia(){
    rota1 = document.getElementById("demo")
    rota1.addEventListener("click",myFunction)

    rota2 =  document.getElementById("demo")
    rota1.addEventListener("click",rota) 

}
function rota(res,req){
    res.redirect("https://venddiapi.herokuapp.com/desenvolvimento/rotasparaimportacao")
}

function myFunction() {

  document.getElementById("demo").textContent=texto;        
}
function myFunctionNew() {

    document.getElementById("demo").textContent="mudou";        
  }
 module.exports = {myFunction,myFunctionNew}