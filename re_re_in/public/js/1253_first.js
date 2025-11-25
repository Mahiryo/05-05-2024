var inv_01 = 0;
var inv_02 = 0;
var inv_03 = 0;
var inv_04 = 0;

var text = "";
var speed = 100;
var i = 0;

var save_container = document.getElementById("div_save_containers");

var end_choice = document.getElementById("button_completion_end");

var end_back = document.getElementById("div_solution_ending");

var slot_01 = document.getElementById("div_iten_container_01");
var slot_02 = document.getElementById("div_iten_container_02");
var slot_03 = document.getElementById("div_iten_container_03");
var slot_04 = document.getElementById("div_iten_container_04");

var inventory_checker = ["0", "0", "0", "0"];
var a = 0;

var door_sfx = new Audio("assets/audio/door.mp3");
var ringtone_sfx = new Audio("assets/audio/ringtone.mp3");
var knock_sfx = new Audio("assets/audio/knock.mp3");
var amb_sfx = new Audio("assets/audio/amb.mp3");

var notAddedS01 = true;
var notAddedS02 = true;

var menu_open = false;

var canEnd = false;

var s01 = String(
  '<img id="gif_S01" src="./assets/img/GIF/ERROR_TIO.gif" style="width: 95%" alt="error_image">'
);
var s02 = String(
  '<img id="gif_S02" src="./assets/img/GIF/undefined.gif" style="width: 95%" alt="error_image">'
);

var load_inventory_sprite_s01 = String(
  `<img src="./assets/img/GIF/ERROR_TIO.gif" style="border: 1px black solid; height: 100%;">`
);
var load_inventory_sprite_s02 = String(
  `<img src="./assets/img/GIF/undefined.gif" style="border: 1px black solid; height: 100%;">`
);

var div_save_container_content = String(
  `
            <div class="save_container">
              <div class="save_option" style="display: flex; flex-direction: row;align-itens: center;justify-content: space-between; border: 1px white solid; width: fit-content; height: 20px;">
                <span id="saved_slot" style="border: 1px white solid; height: 100%; width: fit-content;">0400</span>
                <span id="saved_inventory" style="display: flex; flex-direction: row;align-itens: center;justify-content: center; height: 100%"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img style="border: 1px black solid; filter: invert(); height: 100%;"><img src="./assets/img/bag.png" style="border: 1px black solid; filter: invert(); height: 100%;"></span>
                <span id="saved_time" style="border: 1px white solid; height: 100%; width: fit-content;">YYYY-MM-DD-hh-mm-ss</span></div>
            </div>
          `
);

var writter_target;
function defineWriter(element) {
  writter_target = document.getElementById(element);
  writter_target.textContent = "";
  typeWriter();
  i = 0;
}
function typeWriter() {
  if (i < text.length) {
    writter_target.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let holdStart = 0;

const tranquilizer = document.getElementById("button_calma");

let held = 0;

function startHold() {
  holdStart = Date.now();
  held = 0;
  good_game_design();
}

var resp_sfx = new Audio("assets/audio/respirar.mp3");

function endHold() {
  if (held >= 500 && held <= 1500) {
    resp_sfx.play();
    value -= 20;
    i = 0;
    text = " phew ";
    
    defineWriter("minha_resposta");
  }
  held = "abacate";
}

function good_game_design() {
  if (held >= 0) {
    held = Date.now() - holdStart;
    console.log(held);
  }

  if (held >= 500 && held <= 1500) {
    tranquilizer.style.filter = "invert()";
  } else {
    tranquilizer.style.filter = "none";
  }

  if (held >= 0) {
    setTimeout(good_game_design, 100);
  }
}

// referencia \\
// var digit_0 = [1, 1, 1, 0, 1, 1, 1];
// var digit_1 = [0, 0, 1, 0, 0, 1, 0];
// var digit_2 = [1, 0, 1, 1, 1, 0, 1];
// var digit_3 = [1, 0, 1, 1, 0, 1, 1];
// var digit_4 = [0, 1, 1, 1, 0, 1, 0];
// var digit_5 = [1, 1, 0, 1, 0, 1, 1];
// var digit_6 = [1, 1, 0, 1, 1, 1, 1];
// var digit_7 = [1, 0, 1, 0, 0, 1, 0];
// var digit_8 = [1, 1, 1, 1, 1, 1, 1];
// var digit_9 = [1, 1, 1, 1, 0, 1, 1];

var complete_digit_0 = `
                    <div class="segment a on"></div>
                    <div class="segment b on"></div>
                    <div class="segment c on"></div>
                    <div class="segment d"></div>
                    <div class="segment e on"></div>
                    <div class="segment f on"></div>
                    <div class="segment g on"></div>
                    `;
var complete_digit_1 = `
                    <div class="segment a"></div>
                    <div class="segment b"></div>
                    <div class="segment c on"></div>
                    <div class="segment d"></div>
                    <div class="segment e"></div>
                    <div class="segment f on"></div>
                    <div class="segment g"></div>
                    `;
var complete_digit_2 = `
                    <div class="segment a on"></div>
                    <div class="segment b"></div>
                    <div class="segment c on"></div>
                    <div class="segment d on"></div>
                    <div class="segment e on"></div>
                    <div class="segment f"></div>
                    <div class="segment g on"></div>
                    `;
var complete_digit_3 = `
                    <div class="segment a on"></div>
                    <div class="segment b"></div>
                    <div class="segment c on"></div>
                    <div class="segment d on"></div>
                    <div class="segment e"></div>
                    <div class="segment f on"></div>
                    <div class="segment g on"></div>
                    `;
var complete_digit_4 = `
                    <div class="segment a"></div>
                    <div class="segment b on"></div>
                    <div class="segment c on"></div>
                    <div class="segment d on"></div>
                    <div class="segment e"></div>
                    <div class="segment f on"></div>
                    <div class="segment g"></div>
                    `;
var complete_digit_5 = `
                    <div class="segment a on"></div>
                    <div class="segment b on"></div>
                    <div class="segment c"></div>
                    <div class="segment d on"></div>
                    <div class="segment e"></div>
                    <div class="segment f on"></div>
                    <div class="segment g on"></div>
                    `;
var complete_digit_6 = `
                    <div class="segment a on"></div>
                    <div class="segment b on"></div>
                    <div class="segment c"></div>
                    <div class="segment d on"></div>
                    <div class="segment e on"></div>
                    <div class="segment f on"></div>
                    <div class="segment g on"></div>
                    `;
var complete_digit_7 = `
                    <div class="segment a on"></div>
                    <div class="segment b"></div>
                    <div class="segment c on"></div>
                    <div class="segment d"></div>
                    <div class="segment e"></div>
                    <div class="segment f on"></div>
                    <div class="segment g"></div>
                    `;
var complete_digit_8 = `
                    <div class="segment a on"></div>
                    <div class="segment b on"></div>
                    <div class="segment c on"></div>
                    <div class="segment d on"></div>
                    <div class="segment e on"></div>
                    <div class="segment f on"></div>
                    <div class="segment g on"></div>
                    `;
var complete_digit_9 = `
                    <div class="segment a on"></div>
                    <div class="segment b on"></div>
                    <div class="segment c on"></div>
                    <div class="segment d on"></div>
                    <div class="segment e"></div>
                    <div class="segment f on"></div>
                    <div class="segment g on"></div>
                    `;

// a b c d e f g
//      aaaaa
//     b     c
//     b     c
//     b     c
//      ddddd
//     e     f
//     e     f
//     e     f
//      ggggg

var primeiro_digito = document.getElementById("h1");
var segundo_digito = document.getElementById("h2");
var terceiro_digito = document.getElementById("m1");
var quarto_digito = document.getElementById("m2");

var counter_h1 = 0;
var counter_h2 = 0;

var counter_m1 = 0;
var counter_m2 = 0;

function AumentarPrimeiroDigito() {
  switch (counter_h1) {
    case 0:
      {
        primeiro_digito.innerHTML = complete_digit_0;
      }
      break;
    case 1:
      {
        primeiro_digito.innerHTML = complete_digit_1;
      }
      break;
    case 2:
      {
        primeiro_digito.innerHTML = complete_digit_2;
      }
      break;
    case 3:
      {
        primeiro_digito.innerHTML = complete_digit_3;
      }
      break;
    case 4:
      {
        primeiro_digito.innerHTML = complete_digit_4;
      }
      break;
    case 5:
      {
        primeiro_digito.innerHTML = complete_digit_5;
      }
      break;
    case 6:
      {
        primeiro_digito.innerHTML = complete_digit_6;
      }
      break;
    case 7:
      {
        primeiro_digito.innerHTML = complete_digit_7;
      }
      break;
    case 8:
      {
        primeiro_digito.innerHTML = complete_digit_8;
      }
      break;
    case 9:
      {
        primeiro_digito.innerHTML = complete_digit_9;
      }
      break;
  }
}
function DiminuirPrimeiroDigito() {
  switch (counter_h1) {
    case 0:
      {
        primeiro_digito.innerHTML = complete_digit_0;
      }
      break;
    case 1:
      {
        primeiro_digito.innerHTML = complete_digit_1;
      }
      break;
    case 2:
      {
        primeiro_digito.innerHTML = complete_digit_2;
      }
      break;
    case 3:
      {
        primeiro_digito.innerHTML = complete_digit_3;
      }
      break;
    case 4:
      {
        primeiro_digito.innerHTML = complete_digit_4;
      }
      break;
    case 5:
      {
        primeiro_digito.innerHTML = complete_digit_5;
      }
      break;
    case 6:
      {
        primeiro_digito.innerHTML = complete_digit_6;
      }
      break;
    case 7:
      {
        primeiro_digito.innerHTML = complete_digit_7;
      }
      break;
    case 8:
      {
        primeiro_digito.innerHTML = complete_digit_8;
      }
      break;
    case 9:
      {
        primeiro_digito.innerHTML = complete_digit_9;
      }
      break;
  }
}

function AumentarTerceiroDigito() {
  switch (counter_m1) {
    case 0:
      {
        terceiro_digito.innerHTML = complete_digit_0;
      }
      break;
    case 1:
      {
        terceiro_digito.innerHTML = complete_digit_1;
      }
      break;
    case 2:
      {
        terceiro_digito.innerHTML = complete_digit_2;
      }
      break;
    case 3:
      {
        terceiro_digito.innerHTML = complete_digit_3;
      }
      break;
    case 4:
      {
        terceiro_digito.innerHTML = complete_digit_4;
      }
      break;
    case 5:
      {
        terceiro_digito.innerHTML = complete_digit_5;
      }
      break;
    case 6:
      {
        terceiro_digito.innerHTML = complete_digit_6;
      }
      break;
    case 7:
      {
        terceiro_digito.innerHTML = complete_digit_7;
      }
      break;
    case 8:
      {
        terceiro_digito.innerHTML = complete_digit_8;
      }
      break;
    case 9:
      {
        terceiro_digito.innerHTML = complete_digit_9;
      }
      break;
  }
}
function DiminuirTerceiroDigito() {
  switch (counter_m1) {
    case 0:
      {
        terceiro_digito.innerHTML = complete_digit_0;
      }
      break;
    case 1:
      {
        terceiro_digito.innerHTML = complete_digit_1;
      }
      break;
    case 2:
      {
        terceiro_digito.innerHTML = complete_digit_2;
      }
      break;
    case 3:
      {
        terceiro_digito.innerHTML = complete_digit_3;
      }
      break;
    case 4:
      {
        terceiro_digito.innerHTML = complete_digit_4;
      }
      break;
    case 5:
      {
        terceiro_digito.innerHTML = complete_digit_5;
      }
      break;
    case 6:
      {
        terceiro_digito.innerHTML = complete_digit_6;
      }
      break;
    case 7:
      {
        terceiro_digito.innerHTML = complete_digit_7;
      }
      break;
    case 8:
      {
        terceiro_digito.innerHTML = complete_digit_8;
      }
      break;
    case 9:
      {
        terceiro_digito.innerHTML = complete_digit_9;
      }
      break;
  }
}

function AumentarSegundoDigito() {
  switch (counter_h2) {
    case 0:
      {
        segundo_digito.innerHTML = complete_digit_0;
      }
      break;
    case 1:
      {
        segundo_digito.innerHTML = complete_digit_1;
      }
      break;
    case 2:
      {
        segundo_digito.innerHTML = complete_digit_2;
      }
      break;
    case 3:
      {
        segundo_digito.innerHTML = complete_digit_3;
      }
      break;
    case 4:
      {
        segundo_digito.innerHTML = complete_digit_4;
      }
      break;
    case 5:
      {
        segundo_digito.innerHTML = complete_digit_5;
      }
      break;
    case 6:
      {
        segundo_digito.innerHTML = complete_digit_6;
      }
      break;
    case 7:
      {
        segundo_digito.innerHTML = complete_digit_7;
      }
      break;
    case 8:
      {
        segundo_digito.innerHTML = complete_digit_8;
      }
      break;
    case 9:
      {
        segundo_digito.innerHTML = complete_digit_9;
      }
      break;
  }
}
function DiminuirSegundoDigito() {
  switch (counter_h2) {
    case 0:
      {
        segundo_digito.innerHTML = complete_digit_0;
      }
      break;
    case 1:
      {
        segundo_digito.innerHTML = complete_digit_1;
      }
      break;
    case 2:
      {
        segundo_digito.innerHTML = complete_digit_2;
      }
      break;
    case 3:
      {
        segundo_digito.innerHTML = complete_digit_3;
      }
      break;
    case 4:
      {
        segundo_digito.innerHTML = complete_digit_4;
      }
      break;
    case 5:
      {
        segundo_digito.innerHTML = complete_digit_5;
      }
      break;
    case 6:
      {
        segundo_digito.innerHTML = complete_digit_6;
      }
      break;
    case 7:
      {
        segundo_digito.innerHTML = complete_digit_7;
      }
      break;
    case 8:
      {
        segundo_digito.innerHTML = complete_digit_8;
      }
      break;
    case 9:
      {
        segundo_digito.innerHTML = complete_digit_9;
      }
      break;
  }
}

function AumentarQuartoDigito() {
  switch (counter_m2) {
    case 0:
      {
        quarto_digito.innerHTML = complete_digit_0;
      }
      break;
    case 1:
      {
        quarto_digito.innerHTML = complete_digit_1;
      }
      break;
    case 2:
      {
        quarto_digito.innerHTML = complete_digit_2;
      }
      break;
    case 3:
      {
        quarto_digito.innerHTML = complete_digit_3;
      }
      break;
    case 4:
      {
        quarto_digito.innerHTML = complete_digit_4;
      }
      break;
    case 5:
      {
        quarto_digito.innerHTML = complete_digit_5;
      }
      break;
    case 6:
      {
        quarto_digito.innerHTML = complete_digit_6;
      }
      break;
    case 7:
      {
        quarto_digito.innerHTML = complete_digit_7;
      }
      break;
    case 8:
      {
        quarto_digito.innerHTML = complete_digit_8;
      }
      break;
    case 9:
      {
        quarto_digito.innerHTML = complete_digit_9;
      }
      break;
  }
}
function DiminuirQuartoDigito() {
  switch (counter_m2) {
    case 0:
      {
        quarto_digito.innerHTML = complete_digit_0;
      }
      break;
    case 1:
      {
        quarto_digito.innerHTML = complete_digit_1;
      }
      break;
    case 2:
      {
        quarto_digito.innerHTML = complete_digit_2;
      }
      break;
    case 3:
      {
        quarto_digito.innerHTML = complete_digit_3;
      }
      break;
    case 4:
      {
        quarto_digito.innerHTML = complete_digit_4;
      }
      break;
    case 5:
      {
        quarto_digito.innerHTML = complete_digit_5;
      }
      break;
    case 6:
      {
        quarto_digito.innerHTML = complete_digit_6;
      }
      break;
    case 7:
      {
        quarto_digito.innerHTML = complete_digit_7;
      }
      break;
    case 8:
      {
        quarto_digito.innerHTML = complete_digit_8;
      }
      break;
    case 9:
      {
        quarto_digito.innerHTML = complete_digit_9;
      }
      break;
  }
}

let minutes = String("00");
let seconds = String("45");
let total_time = Number();
start_clock();

function start_clock() {
  counter_h1 = Number(minutes[0]);
  counter_h2 = Number(minutes[1]);

  counter_m1 = Number(seconds[0]);
  counter_m2 = Number(seconds[1]);

  AumentarPrimeiroDigito();
  AumentarSegundoDigito();
  AumentarTerceiroDigito();
  AumentarQuartoDigito();

  // console.log(counter_h1)
  // console.log(counter_h2)
  // console.log(counter_m1)
  // console.log(counter_m2)

  total_time = Number(Number(minutes) * 60 + Number(seconds));
  clock_til_win();
}

function clock_til_win() {
  // console.log(total_time);

  AumentarTerceiroDigito();
  AumentarQuartoDigito();
  AumentarSegundoDigito();
  AumentarPrimeiroDigito();
  DiminuirPrimeiroDigito();
  DiminuirSegundoDigito();
  DiminuirQuartoDigito();
  DiminuirTerceiroDigito();
  if (counter_m2 == 0) {
    counter_m2 = 9;

    if (counter_m1 == 0) {
      counter_m1 = 5;
      counter_m2 = 9;

      if (counter_h2 == 0) {
        counter_h2 = 9;

        if (counter_h1 == 0) {
          counter_h1 = 5;
          counter_h2 = 9;
        } else {
          counter_h1--;
        }
      } else {
        counter_h2--;
      }
    } else {
      counter_m1--;
    }
  } else {
    counter_m2--;
  }
  // console.log(counter_h1)
  // console.log(counter_h2)
  // console.log(counter_m1)
  // console.log(counter_m2)

  if (total_time > 0) {
    total_time -= 1;
    setTimeout(clock_til_win, 1000);
  } else {
    completion();
  }
}

function completion() {
  const end_choice = document.getElementById("button_completion_end");

  if (total_time <= 0) {
    end_choice.innerHTML = `{seguir_frente: IS_DEFINED}`;
    end_choice.style.backgroundColor = "white";
    end_choice.style.color = "black";
    end_choice.style.border = "1px gray solid";
    canEnd = true;
    // showEnd()
  }
}
function showEnd() {
  if (canEnd == true) {
    alert(
      `Eu acordo... estou confusa. Quando que dormi? olho ao meu redor são: 1414`
    );
    // notAddedWaterCup = true;
    end_back.innerHTML = "<p>1414</p>";
    end_back.style.display = "flex";
    end_back.style.fontFamily = "pixel_like";
    end_back.style.color = "yellow";
    end_back.style.filter = "opacity(1)";
  } else {
    alert(".................");
  }
}
function saveState() {
  var page = "1818";

  if (slot_01.innerHTML == s02) {
    inv_01 = 66;
  }
  if (slot_02.innerHTML == s02) {
    inv_02 = 66;
  }
  if (slot_03.innerHTML == s02) {
    inv_03 = 66;
  }
  if (slot_04.innerHTML == s02) {
    inv_04 = 66;
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

            if (saveiten.slot_01 == 66) {
              sprite_load_01 = load_inventory_sprite_s02;
            } else if (saveiten.slot_01 == 99) {
              sprite_load_01 = load_inventory_sprite_s01;
            }

            if (saveiten.slot_02 == 66) {
              sprite_load_02 = load_inventory_sprite_s02;
            } else if (saveiten.slot_02 == 99) {
              sprite_load_02 = load_inventory_sprite_s01;
            }

            if (saveiten.slot_03 == 66) {
              sprite_load_03 = load_inventory_sprite_s02;
            } else if (saveiten.slot_03 == 99) {
              sprite_load_03 = load_inventory_sprite_s01;
            }

            if (saveiten.slot_04 == 66) {
              sprite_load_04 = load_inventory_sprite_s02;
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
      case 66:
        sessionStorage.SLOT01 = 66;
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
      case 66:
        sessionStorage.SLOT02 = 66;
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
      case 66:
        sessionStorage.SLOT03 = 66;
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
      case 66:
        sessionStorage.SLOT04 = 66;
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
      case "66":
        slot_01.innerHTML = s02;
        inventory_checker[0] = s02;
        notAddedS02 = false;
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
      case "66":
        slot_02.innerHTML = s02;
        inventory_checker[1] = s02;
        notAddedS02 = false;
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
      case "66":
        slot_03.innerHTML = s02;
        inventory_checker[2] = s02;
        notAddedS02 = false;
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
      case "8":
        slot_04.innerHTML = s02;
        inventory_checker[3] = s02;
        notAddedS02 = false;
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
start_check()
setTimeout(calling, 5000);
let save_onclick_elemento_inst = document.getElementById("img_contact_inst").onclick;
let save_onclick_elemento_cell = document.getElementById("img_contact_cell").onclick;
let save_onclick_elemento_zapp = document.getElementById("img_contact_zapp").onclick;
let save_onclick_elemento_face = document.getElementById("img_contact_face").onclick;
let save_onclick_elemento_disc = document.getElementById("img_contact_disc").onclick;

let elemento;
function calling() {
  let rng_call = Math.random() * 5 + 1;
  rng_call = Math.floor(rng_call);

  document.getElementById("img_contact_inst").onclick = null;
  document.getElementById("img_contact_cell").onclick = null;
  document.getElementById("img_contact_zapp").onclick = null;
  document.getElementById("img_contact_face").onclick = null;
  document.getElementById("img_contact_disc").onclick = null;

  switch (rng_call) {
    case 1:
      elemento = document.getElementById("img_contact_inst");
      elemento.onclick = save_onclick_elemento_inst;
      document.getElementById("img_contact_cell").onclick = null;
      document.getElementById("img_contact_zapp").onclick = null;
      document.getElementById("img_contact_face").onclick = null;
      document.getElementById("img_contact_disc").onclick = null;
      break;
    case 2:
      elemento = document.getElementById("img_contact_cell");
      elemento.onclick = save_onclick_elemento_cell;
      document.getElementById("img_contact_inst").onclick = null;
      document.getElementById("img_contact_zapp").onclick = null;
      document.getElementById("img_contact_face").onclick = null;
      document.getElementById("img_contact_disc").onclick = null;
      break;
    case 3:
      elemento = document.getElementById("img_contact_zapp");
      elemento.onclick = save_onclick_elemento_zapp;
      document.getElementById("img_contact_inst").onclick = null;
      document.getElementById("img_contact_cell").onclick = null;
      document.getElementById("img_contact_face").onclick = null;
      document.getElementById("img_contact_disc").onclick = null;
      break;
    case 4:
      elemento = document.getElementById("img_contact_face");
      elemento.onclick = save_onclick_elemento_face;
      document.getElementById("img_contact_inst").onclick = null;
      document.getElementById("img_contact_cell").onclick = null;
      document.getElementById("img_contact_zapp").onclick = null;
      document.getElementById("img_contact_disc").onclick = null;
      break;
    case 5:
      elemento = document.getElementById("img_contact_disc");
      elemento.onclick = save_onclick_elemento_disc;
      document.getElementById("img_contact_inst").onclick = null;
      document.getElementById("img_contact_cell").onclick = null;
      document.getElementById("img_contact_zapp").onclick = null;
      document.getElementById("img_contact_face").onclick = null;
      break;
  }

  elemento.classList.remove("desativado");
  elemento.classList.add("vibrate");
  start_call()
  // setTimeout(calling, 7500);
}

function atender(elemento){
  let contact = document.getElementById(elemento);
  count_time = 'batata';
  contact.classList.add('desativado');
  contact.classList.remove('vibrate');
  document.getElementById(elemento).onclick = null;
  ringtone_sfx.loop = false;
  setTimeout(calling, 7500);
}

let call_timer 
let count_time
// let call_timer


function start_call() {
  call_timer = Date.now();
  count_time = 0;
  ringtone_sfx.play()
  ringtone_sfx.loop = true;
  call_design()
}

function call_design() {
  if (count_time >= 0) {
    count_time = Date.now() - call_timer;
    value += 0.5;
    setTimeout(call_design, 100);
  }
}
// img_contact_inst
// img_contact_cell
// img_contact_zapp
// img_contact_face
// img_contact_disc
