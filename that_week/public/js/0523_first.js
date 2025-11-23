var inv_01 = 0;
var inv_02 = 0;
var inv_03 = 0;
var inv_04 = 0;

var text = "";
var speed = 100;
var i = 0;

var banner_0523 = document.getElementById("div_banner_0523");
var container = document.getElementById("div_quarto_01_0400");
banner_0523.style.filter = "brightness(2)";
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

var inventory_checker = ["0","0","0","0"];
var a = 0;

var door_sfx = new Audio("assets/audio/door.mp3");
var knock_sfx = new Audio("assets/audio/knock.mp3");
var amb_sfx = new Audio("assets/audio/amb.mp3");

var notAddedCapsules = true;
var notAddedMedicine = true;
var notAddedWaterCup = true;

var served_mother = false;
var served_gradma = false;

var notAddedS01 = true;

var menu_open = false;

var canEnd = false;

var estou_quarto_01 = false;
var estou_quarto_02 = true;
var estou_sala = false;
var estou_Cozinha = false;


var capsules_sprite = String(
  '<img id="img_capsules" src="./assets/img/capsules.png" style="filter: invert()" alt="capsules_image">'
);
var water_cup_sprite = String(
  '<img id="img_water" src="./assets/img/cup_water.png" style="filter: invert()" alt="water_image">'
);
var medicine_sprite = String(
  '<img id="img_medicine" src="./assets/img/medicine.png" style="filter: invert()" alt="medicine_image">'
);

var s01 = String(
  '<img id="gif_S01" src="./assets/img/GIF/ERROR_TIO.gif" style="width: 95%" alt="error_image">'
);

var load_inventory_sprite_s01 = String(
  `<img src="./assets/img/GIF/ERROR_TIO.gif" style="border: 1px black solid; height: 100%;">`
);

var load_inventory_sprite_cup_water = String(
  `<img src="./assets/img/cup_water.png" style="border: 1px black solid; filter: invert(); height: 100%;">`
);
var load_inventory_sprite_medicine = String(
  `<img src="./assets/img/medicine.png"style="border: 1px black solid; filter: invert(); height: 100%;">`
);
var load_inventory_sprite_capsules = String(
  `<img src="./assets/img/capsules.png" style="border: 1px black solid; filter: invert(); height: 100%;">`
);

var confetti_change = String(
  `<img class="confetti" id="img_gif_confetti" src="./assets/img/GIF/joy.gif" alt="confetti">`
);



var div_cozinha_0523_content = String(`
            <div class="collectable" id="div_collect_iten_capsules">
              <img id="img_capsules" src="./assets/img/capsules.png" style="filter: invert()" alt="capsules_image" onclick="comemorar('div_collect_iten_capsules')">
            </div>

            <div class="collectable" id="div_collect_iten_water_cup">
              <img id="img_water" src="./assets/img/cup_water.png" style="filter: invert()" alt="water_image" onclick="comemorar('div_collect_iten_water_cup')">
            </div>

            <audio id="audio_joy" src="./assets/audio/children-joy-100078.mp3"></audio>
            <audio id="audio_knock" src="./assets/audio/knock.mp3"></audio>
`);

var div_quarto_01_0523_content = String(`
          <div id="div_interact_mother">
            <img
              id="gif_mother"
              onclick="interact('div_interact_mother')"
              src="./assets/img/GIF/mother.gif"
              alt="mother_image"
              style="transform: scale(0.25)"
            />
          </div>
          <div class="collectable" id="div_collect_iten_medicine">
              <img id="img_medicine" src="./assets/img/medicine.png" style="filter: invert()" alt="medicine_image" onclick="comemorar('div_collect_iten_medicine')">
          </div>

          <audio id="audio_joy" src="./assets/audio/children-joy-100078.mp3"></audio>
          <audio id="audio_knock" src="./assets/audio/knock.mp3"></audio>
`);

var div_sala_01_0523_content = String(`
            <div id="div_interact_grandma">
              <img id="gif_grandma" src="./assets/img/GIF/clock_mouth_grandma.gif" alt="grandma_image" onclick="interact('div_interact_grandma')">
            </div>

            <audio id="audio_joy" src="./assets/audio/children-joy-100078.mp3"></audio>
            <audio id="audio_knock" src="./assets/audio/knock.mp3"></audio>
`);


var div_save_container_content = String(
  `
            <div class="save_container">
              <div class="save_option" style="display: flex; flex-direction: row;align-itens: center;justify-content: space-between; border: 1px white solid; width: fit-content; height: 20px;">
                <span id="saved_slot" style="border: 1px white solid; height: 100%; width: fit-content;">0400</span>
                <span id="saved_inventory" style="display: flex; flex-direction: row;align-itens: center;justify-content: center; height: 100%"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img src="./assets/img/capsules.png" style="border: 1px black solid; filter: invert(); height: 100%;"></span>
                <span id="saved_time" style="border: 1px white solid; height: 100%; width: fit-content;">YYYY-MM-DD-hh-mm-ss</span></div>
            </div>
          `
);




var writter_target = "";
function defineWriter(element) {
  writter_target = document.getElementById(element);
  writter_target.textContent = "";
  typeWriter();
}
function typeWriter() {
  if (i < text.length) {
    writter_target.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function QuartoZeroUm() {
  document.getElementById("minha_resposta").textContent = "";
  door_sfx.play();
  if (!estou_quarto_01 && estou_sala) {
    text = "Mesmo se quiser... não posso voltar a dormir agora.";
    estou_quarto_01 = true;
    estou_quarto_02 = false;
    estou_Cozinha = false;
    estou_sala = false;

    banner_0523.classList.add("quarto-01");
    banner_0523.classList.remove("quarto-02");
    banner_0523.classList.remove("cozinha");
    banner_0523.classList.remove("sala");

    container.innerHTML = div_quarto_01_0523_content;
    // Restore_iten(quarto);
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
    FindThen();
  } else {
    text = "Minha mãe esta me encarando...";
  }
  i = 0;
  // Restore_iten();
  defineWriter("minha_resposta");
}

function SalaMain() {
  document.getElementById("minha_resposta").textContent = "";
  door_sfx.play();
  if (!estou_sala && (estou_Cozinha || estou_quarto_01 || estou_quarto_02)) {
    text = "Minha vó ligou as luzes e abriu as cortinas, já esta clareando...";
    estou_quarto_01 = false;
    estou_quarto_02 = false;
    estou_Cozinha = false;
    estou_sala = true;

    sala.disabled = false;
    quarto_01.disabled = false;
    cozinha.disabled = false;
    quarto_02.disabled = false;

    container.innerHTML = div_sala_01_0523_content;

    banner_0523.classList.remove("quarto-01");
    banner_0523.classList.remove("quarto-02");
    banner_0523.classList.remove("cozinha");

    banner_0523.classList.add("sala");

    sala.classList.remove("desativado");
    sala.classList.add("ativado", "agora");

    quarto_01.classList.add("ativado");
    quarto_02.classList.add("ativado");
    cozinha.classList.add("ativado");

    quarto_01.classList.remove("desativado", "agora");
    quarto_02.classList.remove("desativado", "agora");
    cozinha.classList.remove("desativado", "agora");
  } else {
    text = "Agora que esta claro eu consigo notar a bagunça...";
  }
  i = 0;
  defineWriter("minha_resposta");
}

function Cozinha() {
  document.getElementById("minha_resposta").textContent = "";
  door_sfx.play();
  if (!estou_Cozinha && estou_sala) {
    text = "Entro na cozinha, mesmo com a luz desligada, esta claro...";

    banner_0523.classList.remove("sala");
    banner_0523.classList.add("cozinha");

    estou_quarto_01 = false;
    estou_quarto_02 = false;
    estou_Cozinha = true;
    estou_sala = false;

    sala.disabled = false;
    cozinha.disabled = false;

    quarto_01.disabled = true;
    quarto_02.disabled = true;

    container.innerHTML = div_cozinha_0523_content;
    // Restore_iten(cozinha);
    if (notAddedCapsules == false) {
      document.getElementById("div_collect_iten_capsules").innerHTML = "COLETADO!";
    }
    if (notAddedWaterCup == false) {
      document.getElementById("div_collect_iten_water_cup").innerHTML = "COLETADO!";
    }
    FindThen()

    cozinha.classList.add("agora", "ativado");
    sala.classList.remove("agora");

    cozinha.classList.remove("desativado");

    quarto_01.classList.remove("ativado");
    quarto_02.classList.remove("ativado");

    sala.classList.add("ativado");

    quarto_01.classList.add("desativado");
    quarto_02.classList.add("desativado");
    sala.classList.remove("desativado");
    // Restore_iten();
  } else {
    text = "Eu já estou na cozinha, eu vim aqui por uma razão, acho.";
  }

  i = 0;
  defineWriter("minha_resposta");
}

function QuartoZeroDois() {
  document.getElementById("minha_resposta").textContent = "";
  door_sfx.play();
  if (!estou_quarto_02 && estou_sala) {
    text = "O quarto dos meus avôs fede a tinta e metais. Minha cabeça dói";
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
    text = "Eu realmente quero muito sair daqui...";
  }

  i = 0;
  defineWriter("minha_resposta");
}

function comemorar(elemento) {
  document.getElementById(elemento).innerHTML = confetti_change;
  document.getElementById("audio_joy").play();
  updateInventory(elemento);
}

function updateInventory(elemento) {

  if (elemento == "div_collect_iten_water_cup") {
    for (i = 1; i <= inventory_checker.length; i++) {
      if (inventory_checker[i - 1] == "0" && notAddedWaterCup == true) {
        notAddedWaterCup = false;
        inventory_checker[i - 1] = water_cup_sprite;
        document.getElementById(`div_iten_container_0${i}`).innerHTML =
          water_cup_sprite;
        switch (i) {
          case 1:
            sessionStorage.SLOT01 = 4;
            break;
          case 2:
            sessionStorage.SLOT02 = 4;
            break;

          case 3:
            sessionStorage.SLOT03 = 4;
            break;

          case 4:
            sessionStorage.SLOT04 = 4;
            break;
        }
      }
    }
  } 
  else if (elemento == "div_collect_iten_capsules") {
    for (i = 1; i <= inventory_checker.length; i++) {
      if (inventory_checker[i - 1] == "0" && notAddedCapsules == true) {
        notAddedCapsules = false;
        inventory_checker[i - 1] = capsules_sprite;
        document.getElementById(`div_iten_container_0${i}`).innerHTML =
          capsules_sprite;
        switch (i) {
          case 1:
            sessionStorage.SLOT01 = 5;
            break;
          case 2:
            sessionStorage.SLOT02 = 5;
            break;

          case 3:
            sessionStorage.SLOT03 = 5;
            break;

          case 4:
            sessionStorage.SLOT04 = 5;
            break;
        }
      }
    }
  } 
  else if (elemento == "div_collect_iten_medicine") {
    for (i = 1; i <= inventory_checker.length; i++) {
      if (inventory_checker[i - 1] == "0" && notAddedMedicine == true) {
        notAddedMedicine = false;
        inventory_checker[i - 1] = medicine_sprite;
        document.getElementById(`div_iten_container_0${i}`).innerHTML =
          medicine_sprite;
        switch (i) {
          case 1:
            sessionStorage.SLOT01 = 6;
            break;
          case 2:
            sessionStorage.SLOT02 = 6;
            break;

          case 3:
            sessionStorage.SLOT03 = 6;
            break;

          case 4:
            sessionStorage.SLOT04 = 6;
            break;
        }
      }
    }
  }
}

function saveState() {
  var page = "0523";

  if (slot_01.innerHTML == water_cup_sprite) {
    inv_01 = 4;
  }
  if (slot_02.innerHTML == water_cup_sprite) {
    inv_02 = 4;
  }
  if (slot_03.innerHTML == water_cup_sprite) {
    inv_03 = 4;
  }
  if (slot_04.innerHTML == water_cup_sprite) {
    inv_04 = 4;
  }

  if (slot_01.innerHTML == capsules_sprite) {
    inv_01 = 5;
  }
  if (slot_02.innerHTML == capsules_sprite) {
    inv_02 = 5;
  }
  if (slot_03.innerHTML == capsules_sprite) {
    inv_03 = 5;
  }
  if (slot_04.innerHTML == capsules_sprite) {
    inv_04 = 5;
  }

  if (slot_01.innerHTML == medicine_sprite) {
    inv_01 = 3;
  }
  if (slot_02.innerHTML == medicine_sprite) {
    inv_02 = 3;
  }
  if (slot_03.innerHTML == medicine_sprite) {
    inv_03 = 3;
  }
  if (slot_04.innerHTML == medicine_sprite) {
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
            console.log("Processing iten index:", i + rest);

            var sprite_load_01 =
              '<img src="./assets/img/blank_slot.png" style="border: 1px white solid; height: 100%;">';
            var sprite_load_02 =
              '<img src="./assets/img/blank_slot.png" style="border: 1px white solid; height: 100%;">';
            var sprite_load_03 =
              '<img src="./assets/img/blank_slot.png" style="border: 1px white solid; height: 100%;">';
            var sprite_load_04 =
              '<img src="./assets/img/blank_slot.png" style="border: 1px white solid; height: 100%;">';

            const saveiten = resultadoLoad[i + rest];

            if (saveiten.slot_01 == 4) {
              sprite_load_01 = load_inventory_sprite_cup_water;
            } else if (saveiten.slot_01 == 5) {
              sprite_load_01 = load_inventory_sprite_capsules;
            } else if (saveiten.slot_01 == 6) {
              sprite_load_01 = load_inventory_sprite_medicine;
            } else if (saveiten.slot_01 == 99) {
              sprite_load_01 = load_inventory_sprite_s01;
            }

            if (saveiten.slot_02 == 4) {
              sprite_load_02 = load_inventory_sprite_cup_water;
            } else if (saveiten.slot_02 == 5) {
              sprite_load_02 = load_inventory_sprite_capsules;
            } else if (saveiten.slot_02 == 6) {
              sprite_load_02 = load_inventory_sprite_medicine;
            } else if (saveiten.slot_02 == 99) {
              sprite_load_02 = load_inventory_sprite_s01;
            }

            if (saveiten.slot_03 == 4) {
              sprite_load_03 = load_inventory_sprite_cup_water;
            } else if (saveiten.slot_03 == 5) {
              sprite_load_03 = load_inventory_sprite_capsules;
            } else if (saveiten.slot_03 == 6) {
              sprite_load_03 = load_inventory_sprite_medicine;
            } else if (saveiten.slot_03 == 99) {
              sprite_load_03 = load_inventory_sprite_s01;
            }

            if (saveiten.slot_04 == 4) {
              sprite_load_04 = load_inventory_sprite_cup_water;
            } else if (saveiten.slot_04 == 5) {
              sprite_load_04 = load_inventory_sprite_capsules;
            } else if (saveiten.slot_04 == 6) {
              sprite_load_04 = load_inventory_sprite_medicine;
            } else if (saveiten.slot_04 == 99) {
              sprite_load_04 = load_inventory_sprite_s01;
            }
            save_container.innerHTML += `
                        <div class="save_container" style="width: fit-content;" id="div_save_${i}" onclick="restoreSave(${[
              saveiten.slot_01,
              saveiten.slot_02,
              saveiten.slot_03,
              saveiten.slot_04,
              saveiten.timeSlot,
            ]})">
                          <div class="save_option" style="display: flex; flex-direction: row;align-itens: center;justify-content: space-between; border: 1px white solid; width: fit-content; height: 20px;">
                            <span id="saved_slot" style="border: 1px white solid; height: 100%; width: fit-content;">${
                              saveiten.timeSlot
                            }</span>
                            <span id="saved_inventory" style="display: flex; flex-direction: row;align-itens: center;justify-content: center; height: 100%">${sprite_load_01}${sprite_load_02}${sprite_load_03}${sprite_load_04}</span>
                            <span id="saved_time" style="border: 1px white solid; height: 100%; width: fit-content;">${new Date(
                              saveiten.timeSave
                            ).toLocaleDateString()}|${new Date(
              saveiten.timeSave
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
      case 4:
        sessionStorage.SLOT01 = 4;
        break;
      case 5:
        sessionStorage.SLOT01 = 5;
        break;
      case 6:
        sessionStorage.SLOT01 = 6;
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
      case 4:
        sessionStorage.SLOT02 = 4;
        break;
      case 5:
        sessionStorage.SLOT02 = 5;
        break;
      case 6:
        sessionStorage.SLOT02 = 6;
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
      case 4:
        sessionStorage.SLOT03 = 4;
        break;
      case 5:
        sessionStorage.SLOT03 = 5;
        break;
      case 6:
        sessionStorage.SLOT03 = 6;
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
      case 4:
        sessionStorage.SLOT04 = 4;
        break;
      case 5:
        sessionStorage.SLOT04 = 5;
        break;
      case 6:
        sessionStorage.SLOT04 = 6;
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
      case "4":
        slot_01.innerHTML = water_cup_sprite;
        inventory_checker[0] = water_cup_sprite;
        notAddedWaterCup = false;
        break;
      case "5":
        slot_01.innerHTML = capsules_sprite;
        inventory_checker[0] = capsules_sprite;
        notAddedCapsules = false;
        break;
      case "6":
        slot_01.innerHTML = medicine_sprite;
        inventory_checker[0] = medicine_sprite;
        notAddedMedicine = false;
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
      case "4":
        slot_02.innerHTML = water_cup_sprite;
        inventory_checker[1] = water_cup_sprite;
        notAddedWaterCup = false;
        break;
      case "5":
        slot_02.innerHTML = capsules_sprite;
        inventory_checker[1] = capsules_sprite;
        notAddedCapsules = false;
        break;
      case "6":
        slot_02.innerHTML = medicine_sprite;
        inventory_checker[1] = medicine_sprite;
        notAddedMedicine = false;
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
    switch (sessionStorage.SLOT03) {
      case "4":
        slot_03.innerHTML = water_cup_sprite;
        inventory_checker[2] = water_cup_sprite;
        notAddedWaterCup = false;
        break;
      case "5":
        slot_03.innerHTML = capsules_sprite;
        inventory_checker[2] = capsules_sprite;
        notAddedCapsules = false;
        break;
      case "6":
        slot_03.innerHTML = medicine_sprite;
        inventory_checker[2] = medicine_sprite;
        notAddedMedicine = false;
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
        case "4":
        slot_04.innerHTML = water_cup_sprite;
        inventory_checker[3] = water_cup_sprite;
        notAddedWaterCup = false; 
        break;
      case "5":
        slot_04.innerHTML = capsules_sprite;
        inventory_checker[3] = capsules_sprite;
        notAddedCapsules = false;
        break;
      case "6":
        slot_04.innerHTML = medicine_sprite;
        inventory_checker[3] = medicine_sprite;
        notAddedMedicine = false;
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



function Give_Itens(receiver) {

  if(receiver == 1){
    let has_capsules = false;
    let has_water = false;
    let slot_has_capsules = Number()
    let slot_has_water = Number()
    for (i = 0; i < inventory_checker.length; i++) {
      if(inventory_checker[i] == capsules_sprite){
        has_capsules = true;
        slot_has_capsules = i+1;
      }

      if(inventory_checker[i] == water_cup_sprite){
        has_water = true;
        slot_has_water = i+1;
      }
    }
    if(has_capsules && has_water){
      i = 0;
      text = ".. ah... esta na hora.. já... obrigada filha.";
      defineWriter("div_interact_right");
      served_gradma = true;
      inventory_checker[slot_has_capsules-1] = '0';
      inventory_checker[slot_has_water -1] = '0';
      document.getElementById(`div_iten_container_0${slot_has_capsules}`).innerHTML = '';
      document.getElementById(`div_iten_container_0${slot_has_water}`).innerHTML = '';

      sessionStorage.setItem(`SLOT0${slot_has_capsules}`, '0');
      sessionStorage.setItem(`SLOT0${slot_has_water}`, '0');
      if(!served_mother){
        notAddedWaterCup = true;
      } else {
        completion()
      }
    } 
    else if(has_capsules){
      i = 0;
      text = "faz. favor.. agua?";
      defineWriter("div_interact_right");
    } 
    else if(has_water){
      i = 0;
      text = "meu remedio.. na cozinha";
      defineWriter("div_interact_right");
    }
  }
  else if(receiver == 2){
    let has_medicine = false;
    let has_water = false;
    let slot_has_medicine = Number()
    let slot_has_water = Number()
    for (i = 0; i < inventory_checker.length; i++) {
      if(inventory_checker[i] == medicine_sprite){
        has_medicine = true;
        slot_has_medicine = i+1;
      }

      if(inventory_checker[i] == water_cup_sprite){
        has_water = true;
        slot_has_water = i+1;
      }
    }
    if(has_medicine && has_water){
      i = 0;
      text = "obriga-da Essta tudo ceRTo!";
      defineWriter("div_interact_right");
      served_mother = true;
      inventory_checker[slot_has_medicine-1] =' 0';
      inventory_checker[slot_has_water-1] = '0';
      document.getElementById(`div_iten_container_0${slot_has_medicine}`).innerHTML = '';
      document.getElementById(`div_iten_container_0${slot_has_water}`).innerHTML = '';

      sessionStorage.setItem(`SLOT0${slot_has_medicine}`, '0');
      sessionStorage.setItem(`SLOT0${slot_has_water}`, '0');

      if(!served_gradma){
        notAddedWaterCup = true;
      } else {
        completion()
      }
    } 
    else if(has_medicine){
      i = 0;
      text = "oh. remedio estta certo, pode t-trazer a AgUA?";
      defineWriter("div_interact_right");
    } 
    else if(has_water){
      i = 0;
      text = "ttenho meu remedio certo para tomar. esta no nosso quarto";
      defineWriter("div_interact_right");
    }
  }
}
function FindThen() {
  const container_img = container;
  let array = [];

  if(estou_Cozinha == true){
    const cup_water = document.getElementById("div_collect_iten_water_cup");
    const capsules = document.getElementById("div_collect_iten_capsules");
    if(!notAddedCapsules){
      capsules.innerHTML = "COLETADO!"
    }
    if(!notAddedWaterCup){
      cup_water.innerHTML = "COLETADO!"
    }
    array = [capsules, cup_water];
    if(notAddedWaterCup || notAddedCapsules){
      for (let i = 0; i < array.length; i++) {
        const maxY = container_img.offsetHeight - array[i].offsetHeight;
        const maxX = container_img.offsetWidth - array[i].offsetWidth;
        
        const randomY = Math.floor(Math.random() * maxY);
        const randomX = Math.floor(Math.random() * maxX);
        
        let random_trans = Number((Math.random() + 0.25).toFixed(2));
        if (random_trans > 1) {
          random_trans = 1;
        }
        
          array[i].style.opacity = random_trans;
          array[i].style.top = randomY + "px";
          array[i].style.left = randomX + "px";
        
      }
    } 
  }
  else if(estou_quarto_01){
    const medicine = document.getElementById("div_collect_iten_medicine");
      if(!notAddedMedicine){
        medicine.innerHTML = "COLETADO!"
      }
      array = [medicine];
      console.log(array)
      for (let i = 0; i < array.length; i++) {
        const maxY = container_img.offsetHeight - array[i].offsetHeight;
        const maxX = container_img.offsetWidth - array[i].offsetWidth;
        
        const randomY = Math.floor(Math.random() * maxY);
        const randomX = Math.floor(Math.random() * maxX);
        
        let random_trans = Number((Math.random() + 0.25).toFixed(2));
        if (random_trans > 1) {
          random_trans = 1;
        }
        
          array[i].style.opacity = random_trans;
          array[i].style.top = randomY + "px";
          array[i].style.left = randomX + "px";
      }
  } else {
    array = [];
  }

  
  setTimeout(FindThen, 3000);
}


function completion() {
  const end_choice = document.getElementById("button_completion_end");

  if (served_gradma  && served_mother ) {
    end_choice.innerHTML = `{seguir_frente: IS_DEFINED}`;
    end_choice.style.backgroundColor = "white";
    end_choice.style.color = "black";
    end_choice.style.border = "1px gray solid";
    canEnd = true;

  }
}

function showEnd() {

  if (canEnd == true) {
    alert(`Preciso sair, preciso sair rápido, tenho que ir para lá. são 0612......talvez pegar uma agua tambem`);
    notAddedWaterCup = true;
    end_back.innerHTML = "<p>0612</p>";
    end_back.style.display = "flex";
  } else {
    alert("preciso ir pro quarto, algo que preciso esta lá");
  }
}


function closeInteract(){
  const banner = document.getElementById("div_banner_0523");
  document.getElementById("div_header").style.display = "flex";
  document.getElementById("div_footer").style.display = "flex";
  container.innerHTML = interact_prev;
  banner.style.height = "300vh";




}
let interact_prev = '';
function interact(id) {
  document.getElementById("div_header").style.display = "none";
  document.getElementById("div_footer").style.display = "none";

  const target = document.getElementById(id);
  const banner = document.getElementById("div_banner_0523");

  banner.style.height = "100vh";
  interact_prev = container.innerHTML;
  if(id == 'div_interact_grandma' && !served_gradma){
    target.innerHTML = `
    <div class="interact-top" id="div_interact_top"onclick="Give_Itens(1)" style="cursor: pointer;">(|D-arr~cApsUlas&&Agua[_janela_]--Interaction{}|)></div>
    
    <img src="./assets/img/GIF/clock_mouth_grandma.gif"
    alt="grandma_image">
    <div class="interact-right" id="div_interact_right"></div>
    
    <div class="interact-bottom" id="div_interact_botton" onclick="closeInteract()" style="cursor: pointer;">(|Encerrar[_janela_]--Interaction{}|)</div>
    `;
    
    target.classList.add("interact-grid");
    const mother_diaglog = document.getElementById("div_interact_right");
    i = 0;
    text =
    "...................................................................";
    defineWriter("div_interact_right");
    
    setTimeout(() => {
      target.classList.add("show");
    }, 200); 
  } 
  else if((id == 'div_interact_mother') && !served_mother){
    target.innerHTML = `
    <div class="interact-top" id="div_interact_top"onclick="Give_Itens(2)" style="cursor: pointer;">(|D-arr~Remedio&&Agua[_janela_]--Interaction{}|)></div>
    
    <img src="./assets/img/GIF/mother_on_interact.gif"
    alt="mother_image">
    <div class="interact-right" id="div_interact_right"></div>
    
    <div class="interact-bottom" id="div_interact_botton" onclick="closeInteract()" style="cursor: pointer;">(|Encerrar[_janela_]--Interaction{}|)</div>
    `;
    
    target.classList.add("interact-grid");
    const mother_diaglog = document.getElementById("div_interact_right");
    
    i = 0;
    text =
    "bom dia. filha. por favor. preciso. pode?.. que.. TRaZer. você: traga os rémedios par- para- pra sua mãe e vó";
    defineWriter("div_interact_right");
    
    setTimeout(() => {
      target.classList.add("show");
    }, 200);
  }
}
start_check();