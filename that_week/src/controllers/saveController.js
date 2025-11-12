var saveModel = require("../models/saveModel");
// var aquarioModel = require("../models/aquarioModel");

function load(req, res) {
  var id = req.body.ID_USER;

  if (id == undefined) {
    res.status(400).send("inicie uma sessão!");
  } else {
    saveModel
      .load(id) // This should ideally return all saves for the user
      .then(function (resultadoLoad) {
        // resultadoLoad is the array of results from your database query
        console.log(`\nResultados encontrados: ${resultadoLoad.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoLoad)}`);
        
        if (resultadoLoad.length >= 1) {
          // *** FIX: Send the entire array back to the client ***
          // Express automatically formats an array into a JSON array response.
          return res.status(200).json(resultadoLoad); 
          


        } else {
          // If no saves were found, send an empty array or a specific status
          res.status(200).json([]);
        }
      })
      .catch(function (erro) {
        console.log("Erro no login:", erro);
        res.status(500).json(erro.sqlMessage || erro.message);
      });
  }
}


function save(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

  var slot01 = req.body.slot_01;
  var slot02 = req.body.slot_02;
  var slot03 = req.body.slot_03;
  var slot04 = req.body.slot_04;
  var time_slot = req.body.current_page;
  var id = req.body.ID_USER;
  saveModel
    .save(slot01, slot02, slot03, slot04, time_slot, id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  load,
  save,
};
