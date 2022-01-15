'use strict';

var utils = require('../utils/writer.js');
var AutorController = require('../service/AutorControllerService');

module.exports.deleteAutor = function deleteAutor (req, res, next, id) {
  AutorController.deleteAutor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertAutor = function insertAutor (req, res, next) {
  AutorController.insertAutor(body)
    .then(AutorController.retrieveAutor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAutor = function retrieveAutor (req, res, next) {
  AutorController.retrieveAutor()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAutorId = function retrieveAutorId (req, res, next, id) {
  AutorController.retrieveAutorId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAutor = function updateAutor (req, res, next, body, id) {
  AutorController.updateAutor(body, id)
    .then(AutorController.retrieveAutor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
