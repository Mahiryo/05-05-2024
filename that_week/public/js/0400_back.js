var inv_01 = 0;
var inv_02 = 0;
var inv_03 = 0;
var inv_04 = 0;

var text = "";
var speed = 100;
var i = 0;

var banner_0400 = document.getElementById("div_banner_0400");
var container = document.getElementById("div_quarto_01_0400");

const blackout = document.getElementById("div_effect_blackout");

var quarto_01 = document.getElementById("button_quarto_01");
var quarto_02 = document.getElementById("button_quarto_02");
var cozinha = document.getElementById("button_cozinha");
var sala = document.getElementById("button_sala");

var save_container = document.getElementById("div_save_containers");

var end_choice = document.getElementById("button_completion_end");

var end_back = document.getElementById("div_solution_ending");

var slot_01 = document.getElementById("div_iten_container_01");
var slot_02 = document.getElementById("div_iten_container_02");
var slot_03 = document.getElementById("div_iten_container_03");
var slot_04 = document.getElementById("div_iten_container_04");

var door_sfx = new Audio('assets/audio/door.mp3');
var knock_sfx = new Audio('assets/audio/knock.mp3');
var amb_sfx = new Audio('assets/audio/amb.mp3');

var error_sfx = new Audio('assets/audio/error.mp3');

var inventory_checker = ["0", "0", "0", "0"];
var a = 0;

var notAddedCoffee = true;
var notAddedMachine = true;
var notAddedWater = true;
var notAddedS01 = true;

var menu_open = false;

var canEnd = false;

var estou_quarto_01 = true;
var estou_quarto_02 = false;
var estou_sala = false;
var estou_Cozinha = false;

var coffee_sprite = String(
  '<img id="img_coffee" src="./assets/img/coffee.png" style="filter: invert()" alt="coffee_image">'
);
var water_sprite = String(
  '<img id="img_water" src="./assets/img/water-jar.png" style="filter: invert()" alt="water_image">'
);
var machine_sprite = String(
  '<img id="img_machine" src="./assets/img/coffee-machine.png" style="filter: invert()" alt="machine_image">'
);

var s01 = String(
  '<img id="gif_S01" src="./assets/img/GIF/ERROR_TIO.gif" style="width: 95%" alt="error_image">'
);

var load_inventory_sprite_s01 = String(
  `<img src="./assets/img/GIF/ERROR_TIO.gif" style="border: 1px black solid; height: 100%;">`
);
var load_inventory_sprite_water = String(
  `<img src="./assets/img/water-jar.png" style="border: 1px black solid; filter: invert(); height: 100%;">`
);
var load_inventory_sprite_machine = String(
  `<img src="./assets/img/coffee-machine.png"style="border: 1px black solid; filter: invert(); height: 100%;">`
);
var load_inventory_sprite_coffee = String(
  `<img src="./assets/img/coffee.png" style="border: 1px black solid; filter: invert(); height: 100%;">`
);
var confetti_change = String(
  `<img class="confetti" id="img_gif_confetti" src="./assets/img/GIF/joy.gif" alt="confetti">`
);

var div_quarto_01_0400_content = String(`
          <br>
          <br>
          <br />
          <br />
          <br />
          <label for="ini_rad_dia">
            <p>audios ={ Guia: [0, 4, 0, 0]; }</p>
            <audio id="ini_rad_dia" controls src="./assets/audio/Inicio_dia_radio.mp3"></audio>
            <p>result__reconstruction</p>
          </label>
          <br />
          <br />
          <br />
          <p><u>alarme toca</u></p>

          <p>Tap-Tap- tap-</p>
          <p>Tap- Tap-tap-</p>
          <p>Tap- tap- Tap TA-</p>
          <br />
          <p>
            Ao acordar é correto evitar telas, deixar luz natural entrar e se
            movimentar mesmo que um pouco.
          </p>

          <p class="weird">a todo custo não durma mais.</p>

          <p>É ideal começar a manhã com uma refeição.</p>
          <br />
          <p>
            O café da manhã é considerado por muitos como a refeição mais
            importante do <span class="dia">Dia</span>
          </p>
          <p>
            no Brasil é comum que se tenha uma refeição breve durante o café da
            manhã
          </p>
          <p>
            ao contrário do que é dito, nossas refeições matinais são menores do
            que a de outros paises
          </p>
          <br />
          <p class="fala marc">P R E C I S O F A Z E R O C A F É</p>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <br /> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span> <span>safety in pills--</span>
          <div class="drawings">
            <div class="right-drawing">
              <p>__________________</p>
              <p>&nbsp\\__________________\\</p>
              <p>&nbsp&nbsp&nbsp&nbsp\\__________________\\</p>
              <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\__________________\\</p>
              <p>/.\\</p>
              <p>/....\\</p>
              <p>/........\\</p>
              <p>/...........\\</p>
              <p>/..............\\</p>
              <p>|..............|</p>
              <p>|||</p>
              <p>|||</p>
              <p>|||</p>
              <p>_|||_</p>
              <p>/--##--\\</p>
              <p>|--#$#--|</p>
              <p>|--#$#--|</p>
              <p>\\-##-/</p>
              <br />
              <p>/_~~~_\\</p>
              <p>/_~~~_\\</p>
              <p>/_~~~~~~_\\</p>
              <p>/_~~~~~~_\\</p>
              <p>/_~~~~~~~~~_\\</p>
              <p>/_~~~~~~~~~_\\</p>
              <p>/_~~~~~==~~~~~_\\</p>
              <p>/_~~~~====~~~~_\\</p>
              <p>/...................................\\</p>

              <br /><br /><br /><br /><br /><br /><br />
              <p>_______</p>
              <p>/&nbsp &nbsp &nbsp 12 &nbsp &nbsp &nbsp\\</p>
              <p>| &nbsp &nbsp &nbsp &nbsp|&nbsp &nbsp &nbsp &nbsp &nbsp|</p>
              <p>| 9 &nbsp&nbsp &nbsp| &nbsp&nbsp &nbsp 3 |</p>
              <p>|&nbsp &nbsp &nbsp &nbsp&nbsp \\ &nbsp &nbsp &nbsp &nbsp|</p>
              <p>|&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp&nbsp|</p>
              <p>\\___6___/</p>
            </div>
            <div class="left-drawing">
            </div>
          </div>
        `);

var alert_error_fakeout = String(`
        <br>
          <div class="error">
            Uncaught ReferenceError:
            VoceSeLembraDoRostoDele is not defined
            at &lthere>:1:999
          </div>
        <br>
      `);

var erro_pagina_fakeout = String(
  `
    <div>
      <div>
        <div>
          <h1>
            <span>Não é possível acessar esse site</span>
          </h1>
          <p>Verifique se há um erro de digitação em <span style="color='red';">Você_Não_Se_Lembra_Do_Rosto_Dele</span>.</p>
          <ul>
            <li>Se o endereço estiver correto, <a href="./0400_back.html" id="link">tente executar um Diagnóstico</a>.</li>
          </ul>
          <div>DNS_PLEASE_DO_NOT_CONTINUE</div>
        </div>
      </div>
    </div>
  `
);

var div_cozinha_0400_content = String(`
            <div class="collectable" id="div_collect_item_coffee">
              <img id="img_coffee" src="./assets/img/coffee.png" style="filter: invert()" alt="coffee_image"onclick="comemorar('div_collect_item_coffee')">
            </div>

            <div class="collectable" id="div_collect_item_water">
              <img id="img_water" src="./assets/img/water-jar.png" style="filter: invert()" alt="water_image" onclick="comemorar('div_collect_item_water')">
            </div>

            <div class="collectable" id="div_collect_item_machine">
              <img id="img_machine" src="./assets/img/coffee-machine.png" style="filter: invert()" alt="machine_image" onclick="comemorar('div_collect_item_machine')">
            </div>
            <audio id="audio_joy" src="./assets/audio/children-joy-100078.mp3"></audio>
`);

var div_save_container_content = String(
  `
            <div class="save_container">
              <div class="save_option" style="display: flex; flex-direction: row;align-items: center;justify-content: space-between; border: 1px white solid; width: fit-content; height: 20px;">
                <span id="saved_slot" style="border: 1px white solid; height: 100%; width: fit-content;">0400</span>
                <span id="saved_inventory" style="display: flex; flex-direction: row;align-items: center;justify-content: center; height: 100%"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img src="./assets/img/coffee.png" style="border: 1px black solid; filter: invert(); height: 100%;"></span>
                <span id="saved_time" style="border: 1px white solid; height: 100%; width: fit-content;">YYYY-MM-DD-hh-mm-ss</span></div>
            </div>
          `
);

function typeWriter() {
  if (i < text.length) {
    document.getElementById("minha_resposta").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function QuartoZeroUm() {
  document.getElementById("minha_resposta").textContent = "";
  door_sfx.play();
  if (!estou_quarto_01 && estou_sala) {
    text = "Eu entro no quarto- estou com sono...";
    estou_quarto_01 = true;
    estou_quarto_02 = false;
    estou_Cozinha = false;
    estou_sala = false;

    container.innerHTML = div_quarto_01_0400_content;

    quarto_01.classList.add("agora", "ativado");
    quarto_01.classList.remove("desativado");

    quarto_02.classList.add("desativado");
    quarto_02.classList.remove("ativado");

    cozinha.classList.add("desativado");
    cozinha.classList.remove("ativado");

    sala.classList.remove("agora");
    sala.classList.add("ativado");

    sala.disabled = false;
    quarto_01.disabled = false;
    cozinha.disabled = true;
    quarto_02.disabled = true;
  } else {
    text = "Eu já estou nesse quarto...";
  }
  i = 0;
  typeWriter();
}

function SalaMain() {
  document.getElementById("minha_resposta").textContent = "";
  door_sfx.play();
  if (!estou_sala && (estou_Cozinha || estou_quarto_01 || estou_quarto_02)) {
    text = "Eu entro na sala- está escuro, mas consigo ainda me mover";
    estou_quarto_01 = false;
    estou_quarto_02 = false;
    estou_Cozinha = false;
    estou_sala = true;

    sala.disabled = false;
    quarto_01.disabled = false;
    cozinha.disabled = false;
    quarto_02.disabled = false;

    container.innerHTML = `
        <button id="button_lembra_dele" onclick="segredo_tio()">você se lembra dele?</button>
        `;

    banner_0400.classList.remove("quarto-01");
    banner_0400.classList.add("sala");

    sala.classList.remove("desativado");
    sala.classList.add("ativado", "agora");

    quarto_01.classList.add("ativado");
    quarto_02.classList.add("ativado");
    cozinha.classList.add("ativado");

    quarto_01.classList.remove("desativado", "agora");
    quarto_02.classList.remove("desativado", "agora");
    cozinha.classList.remove("desativado", "agora");
  } else {
    text = "Eu já estou na sala...";
  }
  i = 0;
  typeWriter();
}

function Cozinha() {
  document.getElementById("minha_resposta").textContent = "";
  door_sfx.play();
  if (!estou_Cozinha && estou_sala) {
    text = "Entro na cozinha, considero acender a luz";

    banner_0400.classList.remove("sala");
    banner_0400.classList.add("cozinha");

    estou_quarto_01 = false;
    estou_quarto_02 = false;
    estou_Cozinha = true;
    estou_sala = false;

    sala.disabled = false;
    cozinha.disabled = false;

    quarto_01.disabled = true;
    quarto_02.disabled = true;

    container.innerHTML = div_cozinha_0400_content;

    if (notAddedCoffee == false) {
      document.getElementById("div_collect_item_coffee").innerHTML =
        "COLETADO!";
    }
    if (notAddedWater == false) {
      document.getElementById("div_collect_item_water").innerHTML = "COLETADO!";
    }
    if (notAddedMachine == false) {
      document.getElementById("div_collect_item_machine").innerHTML =
        "COLETADO!";
    }

    cozinha.classList.add("agora", "ativado");
    sala.classList.remove("agora");

    cozinha.classList.remove("desativado");

    quarto_01.classList.remove("ativado");
    quarto_02.classList.remove("ativado");

    sala.classList.add("ativado");

    quarto_01.classList.add("desativado");
    quarto_02.classList.add("desativado");
    sala.classList.remove("desativado");
    FindThen();
  } else {
    text = "Eu já estou na cozinha, não acendo a luz.";
  }

  i = 0;
  typeWriter();
}

function QuartoZeroDois() {
  document.getElementById("minha_resposta").textContent = "";
  door_sfx.play();
  if (!estou_quarto_02 && estou_sala) {
    text = "Eu entro no quarto dos outros- o ar aqui fede";
    estou_quarto_01 = false;
    estou_quarto_02 = true;
    estou_Cozinha = false;
    estou_sala = false;

    sala.disabled = false;
    quarto_02.disabled = false;

    cozinha.disabled = true;
    quarto_01.disabled = true;

    quarto_02.classList.add("agora", "ativado");
    quarto_02.classList.remove("desativado");

    quarto_01.classList.add("desativado");
    quarto_01.classList.remove("ativado");

    cozinha.classList.add("desativado");
    cozinha.classList.remove("ativado");

    sala.classList.remove("agora");
    sala.classList.add("ativado");
  } else {
    text = "Eu não quero continuar aqui... ";
  }

  i = 0;
  typeWriter();
}

function segredo_tio() {
  document.getElementById("div_header").style.display = "none";
  document.getElementById("div_banner_0400").style.display = "none";
  document.getElementById("div_footer").style.display = "none";
  document.getElementById("div_errors_fakeout").style.display = "flex";
  document.getElementById("div_errors_fakeout").style.flexDirection = "column";
  error_sfx.play();
  a = 0;
  alert_fake();
  setTimeout(error_fake, 3000);
}

function alert_fake() {
  document.getElementById("div_errors_fakeout").innerHTML +=
    alert_error_fakeout;
  if (a < 28) {
    setTimeout(alert_fake, 250);
    a++;
      error_sfx.play();

  }
}

function error_fake() {
  document.body.style.backgroundColor = "Black";
  document.body.style.backgroundSize = "33.33%";
  document.getElementById("div_errors_fakeout").innerHTML = erro_pagina_fakeout;
  setTimeout(restore_error, 7000);
}

function restore_error() {
  QuartoZeroUm();
  document.getElementById("div_header").style.display = "flex";
  document.getElementById("div_banner_0400").style.display = "flex";
  document.getElementById("div_footer").style.display = "flex";
  document.getElementById("div_errors_fakeout").style.display = "none";

  for (i = 1; i <= inventory_checker.length; i++) {
    if (inventory_checker[i - 1] == "0" && notAddedS01 == true) {
      notAddedS01 = false;
      inventory_checker[i - 1] = s01;
      document.getElementById(`div_iten_container_0${i}`).innerHTML = s01;
      switch (i) {
        case 1:
          sessionStorage.SLOT01 = 99;
          break;
        case 2:
          sessionStorage.SLOT02 = 99;
          break;

        case 3:
          sessionStorage.SLOT03 = 99;
          break;

        case 4:
          sessionStorage.SLOT04 = 99;
          break;
      }
    }
  }
  document.body.style.backgroundSize = "3.33%";
  document.body.style.backgroundImage = "url(./assets/img/Not_found.png)";
}

function comemorar(elemento) {
  document.getElementById(elemento).innerHTML = confetti_change;
  document.getElementById("audio_joy").play();
  updateInventory(elemento);
  setTimeout(
    () => (document.getElementById(String(elemento)).innerHTML = "COLETADO!"),
    2750
  );
}

function updateInventory(elemento) {
  completion();
  if (elemento == "div_collect_item_coffee") {
    for (i = 1; i <= inventory_checker.length; i++) {
      if (inventory_checker[i - 1] == "0" && notAddedCoffee == true) {
        notAddedCoffee = false;
        inventory_checker[i - 1] = coffee_sprite;
        document.getElementById(`div_iten_container_0${i}`).innerHTML =
          coffee_sprite;
        switch (i) {
          case 1:
            sessionStorage.SLOT01 = 1;
            break;
          case 2:
            sessionStorage.SLOT02 = 1;
            break;

          case 3:
            sessionStorage.SLOT03 = 1;
            break;

          case 4:
            sessionStorage.SLOT04 = 1;
            break;
        }
      }
    }
  } 
  else if (elemento == "div_collect_item_water") {
    for (i = 1; i <= inventory_checker.length; i++) {
      if (inventory_checker[i - 1] == "0" && notAddedWater == true) {
        notAddedWater = false;
        inventory_checker[i - 1] = water_sprite;
        document.getElementById(`div_iten_container_0${i}`).innerHTML =
          water_sprite;
        switch (i) {
          case 1:
            sessionStorage.SLOT01 = 2;
            break;
          case 2:
            sessionStorage.SLOT02 = 2;
            break;

          case 3:
            sessionStorage.SLOT03 = 2;
            break;

          case 4:
            sessionStorage.SLOT04 = 2;
            break;
        }
      }
    }
  } 
  else if (elemento == "div_collect_item_machine") {
    for (i = 1; i <= inventory_checker.length; i++) {
      if (inventory_checker[i - 1] == "0" && notAddedMachine == true) {
        notAddedMachine = false;
        inventory_checker[i - 1] = machine_sprite;
        document.getElementById(`div_iten_container_0${i}`).innerHTML =
          machine_sprite;
        switch (i) {
          case 1:
            sessionStorage.SLOT01 = 3;
            break;
          case 2:
            sessionStorage.SLOT02 = 3;
            break;

          case 3:
            sessionStorage.SLOT03 = 3;
            break;

          case 4:
            sessionStorage.SLOT04 = 3;
            break;
        }
      }
    }
  }
}

function saveState() {
  var page = "0400";

  if (slot_01.innerHTML == coffee_sprite) {
    inv_01 = 1;
  }
  if (slot_02.innerHTML == coffee_sprite) {
    inv_02 = 1;
  }
  if (slot_03.innerHTML == coffee_sprite) {
    inv_03 = 1;
  }
  if (slot_04.innerHTML == coffee_sprite) {
    inv_04 = 1;
  }

  if (slot_01.innerHTML == water_sprite) {
    inv_01 = 2;
  }
  if (slot_02.innerHTML == water_sprite) {
    inv_02 = 2;
  }
  if (slot_03.innerHTML == water_sprite) {
    inv_03 = 2;
  }
  if (slot_04.innerHTML == water_sprite) {
    inv_04 = 2;
  }

  if (slot_01.innerHTML == machine_sprite) {
    inv_01 = 3;
  }
  if (slot_02.innerHTML == machine_sprite) {
    inv_02 = 3;
  }
  if (slot_03.innerHTML == machine_sprite) {
    inv_03 = 3;
  }
  if (slot_04.innerHTML == machine_sprite) {
    inv_04 = 3;
  }

  if (slot_01.innerHTML == s01) {
    inv_01 = 99;
  }
  if (slot_02.innerHTML == s01) {
    inv_02 = 99;
  }
  if (slot_03.innerHTML == s01) {
    inv_03 = 99;
  }
  if (slot_04.innerHTML == s01) {
    inv_04 = 99;
  }

  if (slot_01.innerHTML == "") {
    inv_01 = 0;
  }
  if (slot_02.innerHTML == "") {
    inv_02 = 0;
  }
  if (slot_03.innerHTML == "") {
    inv_03 = 0;
  }
  if (slot_04.innerHTML == "") {
    inv_04 = 0;
  }

  fetch("/save/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slot_01: inv_01,
      slot_02: inv_02,
      slot_03: inv_03,
      slot_04: inv_04,
      current_page: page,
      ID_USER: sessionStorage.ID_USUARIO,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";
        // limparFormulario();
        // finalizarAguardar();
      } else {
        throw "Houve um erro ao tentar salvar!";
      }
    })
    .catch(function (resposta) {
      // console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
  return false;
}

function loadState() {
  if (menu_open == false) {
    fetch("/save/load", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ID_USER: sessionStorage.ID_USUARIO,
      }),
    })
      .then(function (resposta) {
        console.log("resposta objeto fetch cru: ", resposta);

        // --- FIX 1: Convert the response stream to a JavaScript object/array ---
        // We use response.json() and return the promise it gives us.
        if (resposta.ok) {
          return resposta.json();
        } else {
          // Handle HTTP error statuses gracefully
          throw new Error(
            "Server responded with a non-OK status: " + resposta.status
          );
        }
      })
      .then(function (resultadoLoad) {
        console.log("Parsed JSON data (resultadoLoad): ", resultadoLoad);
        save_container.innerHTML = "";

        if (Array.isArray(resultadoLoad)) {
          console.log("Number of results:", resultadoLoad.length);
          let rest = 0;
          if (resultadoLoad.length > 10) {
            rest = resultadoLoad.length - 10;
          }
          console.log("resto:", rest);
          for (let i = 0; i < resultadoLoad.length - rest; i++) {
            console.log("Processing item index:", i + rest);

            var sprite_load_01 =
              '<img src="./assets/img/blank_slot.png" style="border: 1px white solid; height: 100%;">';
            var sprite_load_02 =
              '<img src="./assets/img/blank_slot.png" style="border: 1px white solid; height: 100%;">';
            var sprite_load_03 =
              '<img src="./assets/img/blank_slot.png" style="border: 1px white solid; height: 100%;">';
            var sprite_load_04 =
              '<img src="./assets/img/blank_slot.png" style="border: 1px white solid; height: 100%;">';

            const saveItem = resultadoLoad[i + rest];

            if (saveItem.slot_01 == 1) {
              sprite_load_01 = load_inventory_sprite_coffee;
            } else if (saveItem.slot_01 == 2) {
              sprite_load_01 = load_inventory_sprite_water;
            } else if (saveItem.slot_01 == 3) {
              sprite_load_01 = load_inventory_sprite_machine;
            } else if (saveItem.slot_01 == 99) {
              sprite_load_01 = load_inventory_sprite_s01;
            }

            if (saveItem.slot_02 == 1) {
              sprite_load_02 = load_inventory_sprite_coffee;
            } else if (saveItem.slot_02 == 2) {
              sprite_load_02 = load_inventory_sprite_water;
            } else if (saveItem.slot_02 == 3) {
              sprite_load_02 = load_inventory_sprite_machine;
            } else if (saveItem.slot_02 == 99) {
              sprite_load_02 = load_inventory_sprite_s01;
            }

            if (saveItem.slot_03 == 1) {
              sprite_load_03 = load_inventory_sprite_coffee;
            } else if (saveItem.slot_03 == 2) {
              sprite_load_03 = load_inventory_sprite_water;
            } else if (saveItem.slot_03 == 3) {
              sprite_load_03 = load_inventory_sprite_machine;
            } else if (saveItem.slot_03 == 99) {
              sprite_load_03 = load_inventory_sprite_s01;
            }

            if (saveItem.slot_04 == 1) {
              sprite_load_04 = load_inventory_sprite_coffee;
            } else if (saveItem.slot_04 == 2) {
              sprite_load_04 = load_inventory_sprite_water;
            } else if (saveItem.slot_04 == 3) {
              sprite_load_04 = load_inventory_sprite_machine;
            } else if (saveItem.slot_04 == 99) {
              sprite_load_04 = load_inventory_sprite_s01;
            }
            save_container.innerHTML += `
                        <div class="save_container" style="width: fit-content;" id="div_save_${i}" onclick="restoreSave(${[
              saveItem.slot_01,
              saveItem.slot_02,
              saveItem.slot_03,
              saveItem.slot_04,
              saveItem.timeSlot,
            ]})">
                          <div class="save_option" style="display: flex; flex-direction: row;align-items: center;justify-content: space-between; border: 1px white solid; width: fit-content; height: 20px;">
                            <span id="saved_slot" style="border: 1px white solid; height: 100%; width: fit-content;">${
                              saveItem.timeSlot
                            }</span>
                            <span id="saved_inventory" style="display: flex; flex-direction: row;align-items: center;justify-content: center; height: 100%">${sprite_load_01}${sprite_load_02}${sprite_load_03}${sprite_load_04}</span>
                            <span id="saved_time" style="border: 1px white solid; height: 100%; width: fit-content;">${new Date(
                              saveItem.timeSave
                            ).toLocaleDateString()}|${new Date(
              saveItem.timeSave
            ).toLocaleTimeString()}</span></div>
                        </div>
                      `;
            // setTimeout(() => {save_container.innerHTML = ''}, 2500);
          }
        } else {
          console.error(
            "Expected an array of results, but received:",
            resultadoLoad
          );
        }
      })
      .catch(function (error) {
        console.error(`#ERRO: ${error.message || error}`);
      });
    save_container.style.display = "block";
    menu_open = true;
    return false;
  } else {
    save_container.style.display = "none";
    menu_open = false;
  }
}

function restoreSave(a, b, c, d, e) {
  if (a != 0) {
    switch (a) {
      case 1:
        sessionStorage.SLOT01 = 1;
        break;
      case 2:
        sessionStorage.SLOT01 = 2;
        break;
      case 3:
        sessionStorage.SLOT01 = 3;
        break;
      case 99:
        sessionStorage.SLOT01 = 99;
        break;
    }
  } else {
    sessionStorage.SLOT01 = 0;
  }

  if (b != 0) {
    switch (b) {
      case 1:
        sessionStorage.SLOT02 = 1;
        break;
      case 2:
        sessionStorage.SLOT02 = 2;
        break;
      case 3:
        sessionStorage.SLOT02 = 3;
        break;
      case 99:
        sessionStorage.SLOT02 = 99;
        break;
    }
  } else {
    sessionStorage.SLOT02 = 0;
  }

  if (c != 0) {
    switch (c) {
      case 1:
        sessionStorage.SLOT03 = 1;
        break;
      case 2:
        sessionStorage.SLOT03 = 2;
        break;
      case 3:
        sessionStorage.SLOT03 = 3;
        break;
      case 99:
        sessionStorage.SLOT03 = 99;
        break;
    }
  } else {
    sessionStorage.SLOT03 = 0;
  }

  if (d != 0) {
    switch (d) {
      case 1:
        sessionStorage.SLOT04 = 1;
        break;
      case 2:
        sessionStorage.SLOT04 = 2;
        break;
      case 3:
        sessionStorage.SLOT04 = 3;
        break;
      case 99:
        sessionStorage.SLOT04 = 99;
        break;
    }
  } else {
    sessionStorage.SLOT04 = 0;
  }

  start_check();
}

function start_check() {
  if (sessionStorage.SLOT01 != "0") {
    switch (sessionStorage.SLOT01) {
      case "1":
        slot_01.innerHTML = coffee_sprite;
        inventory_checker[0] = coffee_sprite;
        notAddedCoffee = false;
        break;
      case "2":
        slot_01.innerHTML = water_sprite;
        inventory_checker[0] = water_sprite;
        notAddedWater = false;
        break;
      case "3":
        slot_01.innerHTML = machine_sprite;
        inventory_checker[0] = machine_sprite;
        notAddedMachine = false;
        break;
      case "99":
        slot_01.innerHTML = s01;
        inventory_checker[0] = s01;
        notAddedS01 = false;
        break;
    }
  } else {
    slot_01.innerHTML = "";
    inventory_checker[0] = "0";
  }
  if (sessionStorage.SLOT02 != "0") {
    switch (sessionStorage.SLOT02) {
      case "1":
        slot_02.innerHTML = coffee_sprite;
        inventory_checker[1] = coffee_sprite;
        notAddedCoffee = false;
        break;
      case "2":
        slot_02.innerHTML = water_sprite;
        inventory_checker[1] = water_sprite;
        notAddedWater = false;
        break;
      case "3":
        slot_02.innerHTML = machine_sprite;
        inventory_checker[1] = machine_sprite;
        notAddedMachine = false;
        break;
      case "99":
        slot_02.innerHTML = s01;
        inventory_checker[1] = s01;
        notAddedS01 = false;
        break;
    }
  } else {
    slot_02.innerHTML = "";
    inventory_checker[1] = "0";
  }
  if (sessionStorage.SLOT03 != "0") {
    switch (sessionStorage.SLOT01) {
      case "1":
        slot_03.innerHTML = coffee_sprite;
        inventory_checker[2] = coffee_sprite;
        notAddedCoffee = false;
        break;
      case "2":
        slot_03.innerHTML = water_sprite;
        inventory_checker[2] = water_sprite;
        notAddedWater = false;
        break;
      case "3":
        slot_03.innerHTML = machine_sprite;
        inventory_checker[2] = machine_sprite;
        notAddedMachine = false;
        break;
      case "99":
        slot_03.innerHTML = s01;
        inventory_checker[2] = s01;
        notAddedS01 = false;
        break;
    }
  } else {
    slot_03.innerHTML = "";
    inventory_checker[2] = "0";
  }
  if (sessionStorage.SLOT04 != "0") {
    switch (sessionStorage.SLOT04) {
      case "1":
        slot_04.innerHTML = coffee_sprite;
        inventory_checker[3] = coffee_sprite;
        notAddedCoffee = false;
        break;
      case "2":
        slot_04.innerHTML = water_sprite;
        inventory_checker[3] = water_sprite;
        notAddedWater = false;
        break;
      case "3":
        slot_04.innerHTML = machine_sprite;
        inventory_checker[3] = machine_sprite;
        notAddedMachine = false;
        break;
      case "99":
        slot_04.innerHTML = s01;
        inventory_checker[3] = s01;
        notAddedS01 = false;
        break;
    }
  } else {
    slot_04.innerHTML = "";
    inventory_checker[3] = "0";
  }
}

function Blink() {
  blackout.style.display = "block";
  setTimeout(() => {
    blackout.style.display = "none";
  }, 123);
}

function FindThen() {
  if(canEnd == false){
    Blink();
  }
  const container = document.getElementById("div_quarto_01_0400");
  const coffee = document.getElementById("div_collect_item_coffee");
  const water = document.getElementById("div_collect_item_water");
  const machine = document.getElementById("div_collect_item_machine");
  let array = [coffee, water, machine];
  if(estou_Cozinha == true){

    
    for (let i = 0; i < array.length; i++) {
      const maxY = container.offsetHeight - array[i].offsetHeight;
      const maxX = container.offsetWidth - array[i].offsetWidth;
      
      const randomY = Math.floor(Math.random() * maxY);
      const randomX = Math.floor(Math.random() * maxX);
      
      let random_trans = Number((Math.random() + 0.25).toFixed(2));
      if (random_trans > 1) {
        random_trans = 1;
      }
      
      if (array[i] != "COLETADO!") {
        array[i].style.opacity = random_trans;
        array[i].style.top = randomY + "px";
        array[i].style.left = randomX + "px";
      }
    }
  }
  if ( array[0].innerHTML == "COLETADO!" && array[1].innerHTML == "COLETADO!" && array[2].innerHTML == "COLETADO!") {
    completion();
  } 
  else {
    setTimeout(FindThen, 3333);
  }
}

function completion() {
  const coffee = document.getElementById("div_collect_item_coffee");
  const water = document.getElementById("div_collect_item_water");
  const machine = document.getElementById("div_collect_item_machine");

  const end_choice = document.getElementById("button_completion_end");

  let array = [coffee, water, machine];

  if (
    array[0].innerHTML == "COLETADO!" &&
    array[1].innerHTML == "COLETADO!" &&
    array[2].innerHTML == "COLETADO!"
  ) {
    end_choice.innerHTML = `{seguir_frente: IS_DEFINED}`;
    end_choice.style.backgroundColor = "white";
    end_choice.style.color = "black";
    end_choice.style.border = "1px gray solid";
    canEnd = true;
    Blink();
  }
}
function showEnd() {
    const coffee = document.getElementById("div_collect_item_coffee");
    const water = document.getElementById("div_collect_item_water");
    const machine = document.getElementById("div_collect_item_machine");
    let array = [coffee, water, machine];

  if (canEnd == true) {
    alert(`Não entendo, mas quando penso vejo que já são 0523`);
    end_back.innerHTML = '<p>0523</p>'
    end_back.style.display = 'flex';
  } else {
    alert("Preciso: [da ÁGUA] [do CAFÉ] [da CAFETEIRA]");
  }
}
