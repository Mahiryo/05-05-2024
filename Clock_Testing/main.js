var digit_0 = [1, 1, 1, 0, 1, 1, 1]; // [a,b,c,#,e,f,g]
var digit_1 = [0, 0, 1, 0, 0, 1, 0]; // [#,#,c,#,#,f,#]
var digit_2 = [1, 0, 1, 1, 1, 0, 1];
var digit_3 = [1, 0, 1, 1, 0, 1, 1];
var digit_4 = [0, 1, 1, 1, 0, 1, 0];
var digit_5 = [1, 1, 0, 1, 0, 1, 1];
var digit_6 = [1, 1, 0, 1, 1, 1, 1];
var digit_7 = [1, 0, 1, 0, 0, 1, 0];
var digit_8 = [1, 1, 1, 1, 1, 1, 1];
var digit_9 = [1, 1, 1, 1, 0, 1, 1];
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
  if (counter_h1 >= 0 && counter_h1 < 9) {
    counter_h1 += 1;
  }
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
  if (counter_h1 > 0 && counter_h1 <= 9) {
    counter_h1 -= 1;
  }
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
  if (counter_m1 >= 0 && counter_m1 < 9) {
    counter_m1 += 1;
  }
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
  if (counter_m1 > 0 && counter_m1 <= 9) {
    counter_m1 -= 1;
  }
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
  if ((counter_h2 >= 0) && (counter_h2 < 9)) {
    counter_h2 += 1;
  }
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
  if (counter_h2 > 0 && counter_h2 <= 9) {
    counter_h2 -= 1;
  }
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
  if ((counter_m2) >= 0 && counter_m2 < 9) {
    counter_m2 += 1;
  }
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
  if (counter_m2 > 0 && counter_m2 <= 9) {
    counter_m2 -= 1;
  }
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
