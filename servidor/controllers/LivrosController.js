'use strict';

var utils = require('../utils/writer.js');
var LivrosController = require('../service/LivrosControllerService');

module.exports.deleteLivro = function deleteLivro (req, res, next, id) {
  LivrosController.deleteLivro(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertLivros = function insertLivros (req, res, next) {
  LivrosController.insertLivros()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveLivro = function retrieveLivro (req, res, next, id) {
  LivrosController.retrieveLivro(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveLivros = function retrieveLivros (req, res, next) {
  LivrosController.retrieveLivros()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLivroId = function updateLivroId (req, res, next, body, id) {
  LivrosController.updateLivroId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
