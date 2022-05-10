function pegardados() {
    fetch("http://localhost:5000/api/cadastrar/listar")
      .then((resultado) => resultado.json())
      .then((dados) => {
        dados.output.map((item) => {
          var div = `<div id=item>
          <h2>${item.nome}</h2>
          <h3>${item.cpf}</h3>
          <h3>${item.telefone}</h3>
          <h3>${item.cidade}</h3>
          </div>
          `;
          document.getElementsByTagName("main")[0].innerHTML += div;
        });
      });
  }
  
  function cadastrar() {
    let nome = document.getElementsByTagName("input")[0];
    let cpf = document.getElementsByTagName("input")[1];
    let telefone = document.getElementsByTagName("input")[2];
    let cidade = document.getElementsByTagName("input")[3];
  
    fetch("http://localhost:5000/api/cadastrar/cadastrar", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nome: nome.value,
        cpf: cpf.value,
        telefone: telefone.value,
        cidade: cidade.value,
      }),
    })
      .then((resultado) => resultado.json())
      .then((dados) => {
        alert(`${dados.output}\n${dados.payload}`);
  
        //Limpar o formulário
        nome.value = "";
        cpf.value = "";
        telefone.value = "";
        cidade.value = "";
      })
      .catch((err) => console.error(err));
  }
  
  function tela_cadastro() {
    document.getElementsByTagName("section")[0].style.marginLeft = "30%";
    document.getElementsByTagName("section")[0].style.boxShadow =
      "0px 0px 0px 100vw rgba(36, 1, 21, 0.5)";
  }





  function dados(){
      var cam = window.location.search
      var dados = cam.split("&");
      console.log(dados)
      console.log(dados[0].substring(6,dados[0].length))
      document.getElementsByTagName("input")[0].value = dados[0].substring(6,dados[0].length)
      document.getElementsByTagName("input")[1].value = dados[1].substring(4,dados[1].length)
      document.getElementsByTagName("input")[2].value = dados[2].substring(9,dados[2].length)
      document.getElementsByTagName("input")[3].value = dados[3].substring(7,dados[3].length)
}