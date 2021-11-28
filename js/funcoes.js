
window.addEventListener("load",myFunction);

var texto = "aprendendo a criar elementos"
const back = "venddiapi.herokuapp.com"

function teste(){
    const teste = async (e, req,res) => {
        e.preventDefault();
        var form = document.querySelector("#formElem");
        const novaSenha = form.querySelector('input[name="novaSenha"]').value
        const confirmaSenha = form.querySelector('input[name="confirmaSenha"]').value
        const url = window.location.href
        var token = url.substring(url.lastIndexOf('/') + 1);
        if(novaSenha == confirmaSenha){
          data = {
            novaSenha : form.querySelector('input[name="novaSenha"]').value
          }
          let response = await fetch(`/web/redefinirSenha/${ token }`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
  
          let text = await response;
          if(text.status==200){
            alert('Senha Alterada com Sucesso, favor retornar a pagina inicial');
          }else{
            alert('Erro ao atualizar a senha.');
          }
        }else{
            alert('Senha não compativel.');
          }
          return teste
      };
}
function myFunction() {
  document.getElementById("demo").textContent=teste();
  document.getElementById("teste").textContent=texto;       
}
function myFunctionNew() {

    document.getElementById("demo").textContent="mudou demo";  
    document.getElementById("teste").textContent="mudou teste";       
  }

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
  

