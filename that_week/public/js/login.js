  var pass = document.getElementById("input_user_pass");
  var email = document.getElementById("input_user_email");

  var error_card = document.getElementById("div_error_register");
  var input_card = document.getElementById("div_input_register");

  function entrar() {
    aguardar();

    var emailVar = email.value;
    var senhaVar = pass.value;

    if (emailVar == "" || senhaVar == "") {
      error_card.style.display = "block";
      input_card.style.display = "none";
      finalizarAguardar();
      return false;
    } else {
      setInterval(sumirMensagem, 5000);
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then((resposta) => {
        console.log("ESTOU NO THEN DO entrar()!", resposta.status);

        if (resposta.ok) {
          return resposta.json();
        } else {
          return resposta.text().then((texto) => {
            throw new Error(texto || "Erro desconhecido");
          });
        }
      })
      .then((json) => {
        console.log("Resposta JSON:", json);
        sessionStorage.EMAIL_USUARIO = json.email;
        sessionStorage.NOME_USUARIO = json.username;
        sessionStorage.ID_USUARIO = json.idUser;
        console.log("Salvo no sessionStorage:", sessionStorage);
        setTimeout(() => {
          window.location = "./paginas.html";
        }, 1000);
      })
      .catch((erro) => {
        console.error("Erro no login:", erro);
      });
  }

  function sumirMensagem() {
    error_card.style.display = "none";
    input_card.style.display = "block";
  }
  function seePassword() {
    pass.type = "text";
    setTimeout(() => {
      pass.type = "password";
    }, 750);
  }