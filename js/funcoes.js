
window.addEventListener("load",myFunction);

var texto = "aprendendo a criar elementos"
const back = "venddiapi.herokuapp.com"

function teste(){
    texto = async (e, req,res) => {
        let response = await fetch(`${back}/desensolvimento/testeserver`, {
           method: 'GET',
           headers: {
             'Content-Type': 'application/json',
           },
         })
   
         let text = await response;
         if(text.status==200){
           alert('Senha Alterada com Sucesso, favor retornar a pagina inicial');
         }else{
           alert('Erro ao atualizar a senha.');
         }
       };
        return teste
}
function myFunction() {
  document.getElementById("demo").textContent=teste();
  document.getElementById("teste").textContent=texto;       
}
function myFunctionNew() {

    document.getElementById("demo").textContent="mudou demo";  
    document.getElementById("teste").textContent="mudou teste";       
  }


  

