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

var inventory_checker = ["", "", "", ""];
var a = 0;

var notAddedCapsules = true;
var notAddedMedicine = true;
var notAddedWater = true;

var served_mother = false;
var served_gradma = false;

var notAddedS01 = true;

var menu_open = false;

var canEnd = false;

var estou_quarto_01 = false;
var estou_quarto_02 = true;
var estou_sala = false;
var estou_Cozinha = false;

var div_cozinha_0523_content = String(`
            <div class="collectable" id="div_collect_item_capsules">
              <img id="img_capsules" src="./assets/img/capsules.png" style="filter: invert()" alt="capsules_image"onclick="comemorar('div_collect_item_capsules')">
            </div>

            <div class="collectable" id="div_collect_item_water">
              <img id="img_water" src="./assets/img/cup_water.png" style="filter: invert()" alt="water_image" onclick="comemorar('div_collect_item_water')">
            </div>

            <audio id="audio_joy" src="./assets/audio/children-joy-100078.mp3"></audio>
            <audio id="audio_knock" src="./assets/audio/knock.mp3"></audio>
`);

var div_quarto_01_0523_content = String(`
            <div class="collectable" id="div_collect_item_medicine">
              <img id="img_medicine" src="./assets/img/medicine.png" style="filter: invert()" alt="medicine_image" onclick="comemorar('div_collect_item_medicine')">
            </div>

            <audio id="audio_joy" src="./assets/audio/children-joy-100078.mp3"></audio>
            <audio id="audio_knock" src="./assets/audio/knock.mp3"></audio>
`);

var div_sala_01_0523_content = String(`
            <div class="collectable" id="div_interact_grandma>
              <img id="gif_grandma" src="./assets/img/GIF/clock_mouth_grandma.gif" alt="grandma_image">
            </div>

            <audio id="audio_joy" src="./assets/audio/children-joy-100078.mp3"></audio>
            <audio id="audio_knock" src="./assets/audio/knock.mp3"></audio>
`);

var capsules_sprite = String(
  '<img id="img_capsules" src="./assets/img/capsules.png" style="filter: invert()" alt="capsules_image">'
);
var water_sprite = String(
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

var load_inventory_sprite_water = String(
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

var div_save_container_content = String(
  `
            <div class="save_container">
              <div class="save_option" style="display: flex; flex-direction: row;align-items: center;justify-content: space-between; border: 1px white solid; width: fit-content; height: 20px;">
                <span id="saved_slot" style="border: 1px white solid; height: 100%; width: fit-content;">0400</span>
                <span id="saved_inventory" style="display: flex; flex-direction: row;align-items: center;justify-content: center; height: 100%"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img src="./assets/img/capsules.png" style="border: 1px black solid; filter: invert(); height: 100%;"></span>
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

  if (!estou_quarto_01 && estou_sala) {
    text = "Mesmo se quiser... não posso voltar a dormir agora.";
    estou_quarto_01 = true;
    estou_quarto_02 = false;
    estou_Cozinha = false;
    estou_sala = false;

    container.innerHTML = div_quarto_01_0523_content;
    Restore_Item(quarto);
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
    text = "Minha mãe esta me encarando...";
  }
  i = 0;
  Restore_Item();
  typeWriter();
}

function SalaMain() {
  document.getElementById("minha_resposta").textContent = "";

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
  typeWriter();
}

function Cozinha() {
  document.getElementById("minha_resposta").textContent = "";

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
    Restore_Item(cozinha);
    if (notAddedCapsules == false) {
      document.getElementById("div_collect_item_capsules").innerHTML =
        "COLETADO!";
    }
    if (notAddedWater == false) {
      document.getElementById("div_collect_item_water").innerHTML = "COLETADO!";
    }
    if (notAddedMedicine == false) {
      document.getElementById("div_collect_item_medicine").innerHTML =
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
    Restore_Item();
  } else {
    text = "Eu já estou na cozinha, eu vim aqui por uma razão, acho.";
  }

  i = 0;
  typeWriter();
}

function QuartoZeroDois() {
  document.getElementById("minha_resposta").textContent = "";

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
  typeWriter();
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
  if (elemento == "div_collect_item_capsules") {
    for (i = 1; i < inventory_checker.length; i++) {
      if (inventory_checker[i - 1] == "" && notAddedCapsules == true) {
        notAddedCapsules = false;
        inventory_checker[i - 1] = capsules_sprite;
        document.getElementById(`div_iten_container_0${i}`).innerHTML =
          capsules_sprite;
        switch (i) {
          case 1:
            sessionStorage.SLOT01 = 1;
            break;
          case 2:
            sessionStorage.SLOT02 = 1;
            break;

          case 3:
            sessionStorage.SLOT02 = 1;
            break;

          case 4:
            sessionStorage.SLOT02 = 1;
            break;
        }
      }
    }
  } else if (elemento == "div_collect_item_water") {
    for (i = 1; i < inventory_checker.length; i++) {
      if (inventory_checker[i - 1] == "" && notAddedWater == true) {
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
            sessionStorage.SLOT02 = 2;
            break;

          case 4:
            sessionStorage.SLOT02 = 2;
            break;
        }
      }
    }
  } else if (elemento == "div_collect_item_medicine") {
    for (i = 1; i < inventory_checker.length; i++) {
      if (inventory_checker[i - 1] == "" && notAddedMedicine == true) {
        notAddedMedicine = false;
        inventory_checker[i - 1] = medicine_sprite;
        document.getElementById(`div_iten_container_0${i}`).innerHTML =
          medicine_sprite;
        switch (i) {
          case 1:
            sessionStorage.SLOT01 = 3;
            break;
          case 2:
            sessionStorage.SLOT02 = 3;
            break;

          case 3:
            sessionStorage.SLOT02 = 3;
            break;

          case 4:
            sessionStorage.SLOT02 = 3;
            break;
        }
      }
    }
  }
}

function saveState() {
  var page = "0523";

  if (slot_01.innerHTML == capsules_sprite) {
    inv_01 = 1;
  }
  if (slot_02.innerHTML == capsules_sprite) {
    inv_02 = 1;
  }
  if (slot_03.innerHTML == capsules_sprite) {
    inv_03 = 1;
  }
  if (slot_04.innerHTML == capsules_sprite) {
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
              sprite_load_01 = load_inventory_sprite_capsules;
            } else if (saveItem.slot_01 == 2) {
              sprite_load_01 = load_inventory_sprite_water;
            } else if (saveItem.slot_01 == 3) {
              sprite_load_01 = load_inventory_sprite_medicine;
            } else if (saveItem.slot_01 == 99) {
              sprite_load_01 = load_inventory_sprite_s01;
            }

            if (saveItem.slot_02 == 1) {
              sprite_load_02 = load_inventory_sprite_capsules;
            } else if (saveItem.slot_02 == 2) {
              sprite_load_02 = load_inventory_sprite_water;
            } else if (saveItem.slot_02 == 3) {
              sprite_load_02 = load_inventory_sprite_medicine;
            } else if (saveItem.slot_02 == 99) {
              sprite_load_02 = load_inventory_sprite_s01;
            }

            if (saveItem.slot_03 == 1) {
              sprite_load_03 = load_inventory_sprite_capsules;
            } else if (saveItem.slot_03 == 2) {
              sprite_load_03 = load_inventory_sprite_water;
            } else if (saveItem.slot_03 == 3) {
              sprite_load_03 = load_inventory_sprite_medicine;
            } else if (saveItem.slot_03 == 99) {
              sprite_load_03 = load_inventory_sprite_s01;
            }

            if (saveItem.slot_04 == 1) {
              sprite_load_04 = load_inventory_sprite_capsules;
            } else if (saveItem.slot_04 == 2) {
              sprite_load_04 = load_inventory_sprite_water;
            } else if (saveItem.slot_04 == 3) {
              sprite_load_04 = load_inventory_sprite_medicine;
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
      case "1":
        slot_01.innerHTML = capsules_sprite;
        notAddedCapsules = false;
        break;
      case "2":
        slot_01.innerHTML = water_sprite;
        notAddedWater = false;
        break;
      case "3":
        slot_01.innerHTML = medicine_sprite;
        notAddedMedicine = false;
        break;
      case "99":
        slot_01.innerHTML = s01;
        notAddedS01 = false;
        break;
    }
  } else {
    slot_01.innerHTML = "";
  }
  if (sessionStorage.SLOT02 != "0") {
    switch (sessionStorage.SLOT02) {
      case "1":
        slot_02.innerHTML = capsules_sprite;
        notAddedCapsules = false;
        break;
      case "2":
        slot_02.innerHTML = water_sprite;
        notAddedWater = false;
        break;
      case "3":
        slot_02.innerHTML = medicine_sprite;
        notAddedMedicine = false;
        break;
      case "99":
        slot_02.innerHTML = s01;
        notAddedS01 = false;
        break;
    }
  } else {
    slot_02.innerHTML = "";
  }
  if (sessionStorage.SLOT03 != "0") {
    switch (sessionStorage.SLOT01) {
      case "1":
        slot_03.innerHTML = capsules_sprite;
        notAddedCapsules = false;
        break;
      case "2":
        slot_03.innerHTML = water_sprite;
        notAddedWater = false;
        break;
      case "3":
        slot_03.innerHTML = medicine_sprite;
        notAddedMedicine = false;
        break;
      case "99":
        slot_03.innerHTML = s01;
        notAddedS01 = false;
        break;
    }
  } else {
    slot_03.innerHTML = "";
  }
  if (sessionStorage.SLOT04 != "0") {
    switch (sessionStorage.SLOT04) {
      case "1":
        slot_04.innerHTML = capsules_sprite;
        notAddedCapsules = false;
        break;
      case "2":
        slot_04.innerHTML = water_sprite;
        notAddedWater = false;
        break;
      case "3":
        slot_04.innerHTML = medicine_sprite;
        notAddedMedicine = false;
        break;
      case "99":
        slot_04.innerHTML = s01;
        notAddedS01 = false;
        break;
    }
  } else {
    slot_04.innerHTML = "";
  }
}

function Blink() {
  blackout.style.display = "block";
  setTimeout(() => {
    blackout.style.display = "none";
  }, 123);
}

function Restore_Item(enter) {
  const onde_entrei = `${enter}`;
  if(onde_entrei == 'quarto'){



  } 
  else if (onde_entrei == 'cozinha'){



  }
}

function Give_Itens(receiver) {
  const capsules = document.getElementById("div_collect_item_capsules");

  const cup_water = document.getElementById("div_collect_item_water");

  const medicine = document.getElementById("div_collect_item_medicine");

  let array = [capsules, cup_water, medicine];

  if (receiver == "vó") {
    if (
      array[0].innerHTML == "COLETADO!" &&
      array[1].innerHTML == "COLETADO!"
    ) {
      served_gradma = true;
      text = "Dei os remedios para minha vó";
      i = 0;
      typeWriter();
    } else {
      document.getElementById("minha_resposta").textContent = "";
      text = "Falta a água... ou talvez esse não seja o remedio correto";
      i = 0;
      typeWriter();
    }
  } else if (receiver == "mãe") {
    if (
      array[2].innerHTML == "COLETADO!" &&
      array[1].innerHTML == "COLETADO!"
    ) {
      served_mother = true;
    } else {
      document.getElementById("minha_resposta").textContent = "";
      text = "Falta água... ou talvez esse não seja o remedio correto";
      i = 0;
      typeWriter();
    }
  } else {
    alert("como?");
  }
}

function completion() {
  const end_choice = document.getElementById("button_completion_end");

  if (served_gradma == true && served_mother == true) {
    end_choice.innerHTML = `{seguir_frente: IS_DEFINED}`;
    end_choice.style.backgroundColor = "white";
    end_choice.style.color = "black";
    end_choice.style.border = "1px gray solid";
    canEnd = true;
    // Blink();
  }
}

function showEnd() {
  const capsules = document.getElementById("div_collect_item_capsules");
  const cup_water = document.getElementById("div_collect_item_water");
  const medicine = document.getElementById("div_collect_item_medicine");
  let array = [capsules, cup_water, medicine];

  if (canEnd == true) {
    alert(`Preciso sair, preciso sair rápido, tenho que ir para lá.`);
    end_back.innerHTML = "<p>0612</p>";
    end_back.style.display = "flex";
  } else {
    alert("Preciso: dar os tomar meus remédios");
  }
}
