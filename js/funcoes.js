window.addEventListener("load",myFunction);
window.addEventListener("load",myFunctionNew);


var texto = "aprendendo a criar elementos"



function rota(res,req){
    res.redirect("https://venddiapi.herokuapp.com/desenvolvimento/rotasparaimportacao")
}

function myFunction() {

  document.getElementById("demo").textContent=texto;        
}
function myFunctionNew() {

    document.getElementById("demo").textContent="mudou";  
    document.getElementById("teste").textContent="mudou";       
  }
 module.exports = {myFunction,myFunctionNew}