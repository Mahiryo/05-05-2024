var pass = document.getElementById("input_user_pass");
  var pass_confirm = document.getElementById("input_user_pass_confirm");

  var email = document.getElementById("input_user_email");
  var username = document.getElementById("input_user_name");

  var error_card = document.getElementById("div_error_register");
  var input_card = document.getElementById("div_input_register");

  var pass_helper = document.getElementById("pass_helper");
  
  var char_left = document.getElementById("char_left_username");

  var regex_has_lower = /^(?=.*[a-z]).+$/;

  var regex_has_upper = /^(?=.*[A-Z]).+$/;

  var regex_has_number = /^(?=.*[0-9]).+$/;

  var regex_has_special = /^(?=.*[!@#\$%\^\&*\)\(+=._-]).+$/;

  var regex_has_valid = /^[A-Za-z0-9!@#\$%\^\&*\)\(+=._-]+$/;
  var valido = true;
  var text_help = '';


  function cadastrar() {
    aguardar();
    var username_var = username.value;
    var email_var = email.value;
    var pass_var = pass.value;
    var pass_confirm_var = pass_confirm.value;

    if (username_var == "" || email_var == "" || pass_var == "" || pass_confirm_var == "") {
      input_card.style.display = "none";
      error_card.style.display = "block";
      error_card.innerHTML = `por favor tenha todos os campos preenchidos`;

      finalizarAguardar();
      setInterval(sumirMensagem, 5000);
      return false;
    }
    
    fetch('/usuarios/cadastrar', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: username_var,
        emailServer: email_var,
        senhaServer: pass_var,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          cardErro.style.display = "block";

          setTimeout(() => {
            window.location = "login.html";
          }, "2000");

          limparFormulario();
          finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });

    return false;
  }

  function sumirMensagem() {
    error_card.style.display = "none";
    input_card.style.display = "block";
  }
  function verifyPass(){

    var pass_verification_value = pass.value;
    var strength = 0;
    text_help = '';

    if (pass_verification_value.length >= 10){
      strength += 1;
    } else{
      text_help += `sua senha possui menos de 10 caracteres <br>`
    }
    
    if (regex_has_lower.test(pass_verification_value)){
      strength += 1;
    } else{
      text_help += `sua senha não possui caráter minúsculo <br>`
    }
    
    if (regex_has_upper.test(pass_verification_value)){
      strength += 1;
    } else{
      text_help += `sua senha não possui caráter maiúsculo <br>`
    }

    if (regex_has_number.test(pass_verification_value)){
      strength += 1;
    } else{
      text_help += `sua senha não possui um digito numérico <br>`
    }

    if (regex_has_special.test(pass_verification_value)){
      strength += 1;
    } else{
      text_help += `sua senha não possui um digito especial <br>`
    }
    valido = regex_has_valid.test(pass_verification_value);
    if(valido == true){
      pass_helper.innerHTML = text_help;
    } else{
      pass_helper.innerHTML = 'CARACTERE INVÁLIDO'
    }
  }
  function seePassword(){

    pass.type = 'text';
    pass_confirm.type = 'text';
    setTimeout(() => {(pass.type = 'password'); (pass_confirm.type = 'password')}, 750);

  }
  function updateChar(){

    var char_total = username.value.length;
    if(char_total <= 33){
      char_left.innerHTML = `${33 - char_total} caracteres restantes`;
    }
    var cortes_user= username.value.slice(0, 33);
    setTimeout(() => {username.value = cortes_user}, 100);
  }

